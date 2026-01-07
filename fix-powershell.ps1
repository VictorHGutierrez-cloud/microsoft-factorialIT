# Script para resolver política de execução do PowerShell
# Execute este arquivo como Administrador

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Configurando PowerShell para npm" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se está executando como Admin
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $isAdmin) {
    Write-Host "⚠️  ATENÇÃO: Este script precisa ser executado como Administrador!" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Para executar como Admin:" -ForegroundColor Yellow
    Write-Host "1. Clique com botão direito neste arquivo" -ForegroundColor Yellow
    Write-Host "2. Escolha 'Executar com PowerShell (como administrador)'" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "OU use o CMD (Prompt de Comando) em vez do PowerShell:" -ForegroundColor Yellow
    Write-Host "   - Pressione Windows + R" -ForegroundColor Yellow
    Write-Host "   - Digite: cmd" -ForegroundColor Yellow
    Write-Host "   - Navegue até a pasta do projeto" -ForegroundColor Yellow
    Write-Host "   - Execute: npm install" -ForegroundColor Yellow
    Write-Host ""
    pause
    exit
}

Write-Host "✅ Executando como Administrador" -ForegroundColor Green
Write-Host ""

# Verificar política atual
Write-Host "Política atual: " -NoNewline
$currentPolicy = Get-ExecutionPolicy -Scope CurrentUser
Write-Host $currentPolicy -ForegroundColor Yellow
Write-Host ""

# Alterar política
Write-Host "Alterando política para RemoteSigned..." -ForegroundColor Cyan
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

Write-Host ""
Write-Host "✅ Política alterada com sucesso!" -ForegroundColor Green
Write-Host ""
Write-Host "Agora você pode:" -ForegroundColor Cyan
Write-Host "1. Fechar este PowerShell" -ForegroundColor White
Write-Host "2. Abrir um PowerShell NORMAL (não precisa ser admin)" -ForegroundColor White
Write-Host "3. Navegar até a pasta do projeto" -ForegroundColor White
Write-Host "4. Executar: npm install" -ForegroundColor White
Write-Host ""
pause
