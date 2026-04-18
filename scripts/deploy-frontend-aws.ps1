param(
  [Parameter(Mandatory = $true)]
  [string]$BucketName,

  [Parameter(Mandatory = $true)]
  [string]$DistributionId,

  [Parameter(Mandatory = $false)]
  [string]$ApiBaseUrl = "https://api.thecodex.in",

  [Parameter(Mandatory = $false)]
  [string]$BasePath = "/"
)

$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$frontendDir = Join-Path $repoRoot "artifacts\thecodex"

Write-Host "Building frontend for AWS..."
Push-Location $frontendDir
try {
  $env:BASE_PATH = $BasePath
  $env:VITE_API_BASE_URL = $ApiBaseUrl
  pnpm run build
}
finally {
  Pop-Location
}

$distDir = Join-Path $frontendDir "dist\public"

$indexHtmlPath = Join-Path $distDir "index.html"
$fallback404Path = Join-Path $distDir "404.html"

if (Test-Path $indexHtmlPath) {
  Copy-Item $indexHtmlPath $fallback404Path -Force
  Write-Host "Created SPA fallback file: 404.html"
}

Write-Host "Syncing build output to S3 bucket s3://$BucketName ..."
aws s3 sync $distDir "s3://$BucketName" --delete

Write-Host "Creating CloudFront invalidation..."
aws cloudfront create-invalidation --distribution-id $DistributionId --paths "/*"

Write-Host "Frontend deployment completed."
