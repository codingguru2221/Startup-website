**AWS Deployment**

This repo is now prepared for:
- frontend on `S3 + CloudFront`
- backend on `AWS App Runner`

Recommended subdomains:
- website: `app.thecodex.in`
- api: `api.thecodex.in`

**Architecture**

- `artifacts/thecodex` builds a static Vite app
- `artifacts/api-server` runs the Express API
- `Dockerfile.api-server` packages the API for App Runner
- `scripts/deploy-frontend-aws.ps1` builds and uploads the frontend to S3

**Frontend**

1. Create an S3 bucket for the site.
Suggested bucket name: `app.thecodex.in`

2. Create an ACM certificate in `us-east-1`.
Use either:
- `app.thecodex.in`
- or `*.thecodex.in`

3. Create a CloudFront distribution.
Use the S3 bucket as origin.

4. Set SPA routing in CloudFront custom error responses:
- `403 -> /index.html -> 200`
- `404 -> /index.html -> 200`

5. Point Route 53 to CloudFront.
Create an alias `A` record:
- name: `app`
- target: your CloudFront distribution

6. Build and deploy the frontend.
From repo root:

```powershell
.\scripts\deploy-frontend-aws.ps1 `
  -BucketName "app.thecodex.in" `
  -DistributionId "YOUR_CLOUDFRONT_DISTRIBUTION_ID" `
  -ApiBaseUrl "https://api.thecodex.in" `
  -BasePath "/"
```

Frontend env values:
- `BASE_PATH=/`
- `VITE_API_BASE_URL=https://api.thecodex.in`

Sample file:
[.env.production.example](/c:/Users/hp5cd/Desktop/Codes/startup%20projects/Banao-Hub/artifacts/thecodex/.env.production.example)

**Backend**

Use `AWS App Runner` with the repository connected through GitHub, or build and push the container through ECR.

Container file:
[Dockerfile.api-server](/c:/Users/hp5cd/Desktop/Codes/startup%20projects/Banao-Hub/Dockerfile.api-server)

If you build locally, use:

```powershell
docker build -f Dockerfile.api-server -t thecodex-api .
```

If you want to test locally:

```powershell
docker run --rm -p 3001:3001 --env-file artifacts/api-server/.env thecodex-api
```

For App Runner:
- Port: `3001`
- Health check path: `/api/healthz`

Create a custom domain in App Runner:
- `api.thecodex.in`

Then add the Route 53 records App Runner asks for.

**Backend Env Vars**

Create `artifacts/api-server/.env` from:
[.env.example](/c:/Users/hp5cd/Desktop/Codes/startup%20projects/Banao-Hub/artifacts/api-server/.env.example)

Current backend supports:
- storage backup in local file
- Google Sheets storage
- email notification through SMTP

For AWS-ready email, you can later replace SMTP creds with Amazon SES SMTP credentials.

Core envs:
- `PORT=3001`
- `GOOGLE_SERVICE_ACCOUNT_EMAIL=...`
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=...`
- `GOOGLE_SHEETS_SPREADSHEET_ID=...`
- `GOOGLE_SHEETS_SHEET_NAME=Leads`
- `SMTP_HOST=smtp.gmail.com`
- `SMTP_PORT=587`
- `SMTP_SECURE=false`
- `SMTP_USER=sender-email@gmail.com`
- `SMTP_PASS=your_app_password`
- `NOTIFICATION_FROM_EMAIL=sender-email@gmail.com`
- `NOTIFICATION_TO_EMAIL=official-email@gmail.com`

**Pre-Deploy Checks**

Frontend:

```powershell
cd artifacts/thecodex
$env:BASE_PATH="/"
$env:VITE_API_BASE_URL="https://api.thecodex.in"
pnpm run build
```

Backend:

```powershell
pnpm --filter @workspace/api-server run typecheck
pnpm --filter @workspace/api-server run build
```

**Notes**

- Frontend Vite config now defaults to `PORT=4173` and `BASE_PATH=/`, so production builds are easier.
- Frontend app bakes `VITE_API_BASE_URL` at build time. If the API domain changes, rebuild and redeploy the frontend.
- The existing frontend project still has unrelated typecheck issues in `GlassCard.tsx` and `NeonButton.tsx`, but the production build works.
