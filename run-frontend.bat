@echo off
setlocal

cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed or not available in PATH.
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

if "%PORT%"=="" set "PORT=4173"
if "%BASE_PATH%"=="" set "BASE_PATH=/"

echo Starting frontend on http://127.0.0.1:%PORT%/
start "" "http://127.0.0.1:%PORT%/"
call pnpm --filter @workspace/thecodex run dev

pause
