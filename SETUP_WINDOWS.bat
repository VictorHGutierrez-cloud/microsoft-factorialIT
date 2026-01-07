@echo off
echo ========================================
echo   Setup do Projeto Factorial Landing
echo ========================================
echo.

echo Verificando Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo [ERRO] Node.js nao esta instalado!
    echo.
    echo Por favor, instale o Node.js primeiro:
    echo 1. Acesse: https://nodejs.org/
    echo 2. Baixe a versao LTS
    echo 3. Instale marcando "Add to PATH"
    echo 4. Reinicie este script
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js encontrado!
node --version
npm --version
echo.

echo Navegando para a pasta do projeto...
cd /d "%~dp0"
echo [OK] Pasta atual: %CD%
echo.

echo Instalando dependencias...
echo (Isso pode levar alguns minutos...)
echo.
npm install

if %errorlevel% neq 0 (
    echo.
    echo [ERRO] Falha ao instalar dependencias
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Instalacao concluida com sucesso!
echo ========================================
echo.
echo Para executar o projeto, use:
echo   npm run dev
echo.
echo Depois abra: http://localhost:3000
echo.
pause
