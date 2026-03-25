@echo off
setlocal

cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed or not available in PATH.
  echo Install Node.js, then run this file again.
  pause
  exit /b 1
)

where pnpm >nul 2>nul
if errorlevel 1 (
  echo pnpm not found. Trying to enable it with corepack...
  call corepack enable
  call corepack prepare pnpm@10.22.0 --activate
  where pnpm >nul 2>nul
  if errorlevel 1 (
    echo pnpm is not installed or not available in PATH.
    echo Install it with: npm install -g pnpm
    pause
    exit /b 1
  )
)

if not exist "node_modules" (
  echo Installing dependencies...
  call pnpm install
  if errorlevel 1 (
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)

if "%PORT%"=="" set "PORT=3001"

echo.
echo Starting API server on port %PORT%...
echo Health URL: http://127.0.0.1:%PORT%/api/healthz
echo.

call pnpm --filter @workspace/api-server run dev
set "EXIT_CODE=%ERRORLEVEL%"

echo.
if not "%EXIT_CODE%"=="0" (
  echo Server stopped with exit code %EXIT_CODE%.
) else (
  echo Server stopped.
)

pause
exit /b %EXIT_CODE%
