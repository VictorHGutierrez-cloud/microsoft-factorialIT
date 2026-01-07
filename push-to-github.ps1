# Script para fazer push do projeto para o GitHub
# Execute este script DEPOIS de instalar o Git

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Push para GitHub" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se Git está instalado
try {
    $gitVersion = git --version 2>&1
    Write-Host "✅ Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git não está instalado!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Por favor, instale o Git primeiro:" -ForegroundColor Yellow
    Write-Host "1. Acesse: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "2. Baixe e instale o Git" -ForegroundColor Yellow
    Write-Host "3. Feche e abra um novo PowerShell" -ForegroundColor Yellow
    Write-Host "4. Execute este script novamente" -ForegroundColor Yellow
    Write-Host ""
    pause
    exit
}

Write-Host ""

# Navegar até a pasta do projeto
$projectPath = "C:\Users\victo\Desktop\Projetos Random\Factorial IT\factorial-microsoft-landing"
Write-Host "Navegando para: $projectPath" -ForegroundColor Cyan
Set-Location $projectPath

Write-Host ""
Write-Host "Verificando se já é um repositório Git..." -ForegroundColor Cyan
if (Test-Path ".git") {
    Write-Host "⚠️  Já é um repositório Git. Continuando..." -ForegroundColor Yellow
} else {
    Write-Host "Inicializando repositório Git..." -ForegroundColor Cyan
    git init
}

Write-Host ""
Write-Host "Criando branch main..." -ForegroundColor Cyan
git branch -M main

Write-Host ""
Write-Host "Adicionando arquivos..." -ForegroundColor Cyan
git add .

Write-Host ""
Write-Host "Verificando status..." -ForegroundColor Cyan
$status = git status --short
if ($status) {
    Write-Host "Arquivos para commit:" -ForegroundColor Green
    Write-Host $status
    Write-Host ""
    Write-Host "Fazendo commit..." -ForegroundColor Cyan
    git commit -m "Initial commit: Factorial IT + Microsoft Landing Page"
} else {
    Write-Host "⚠️  Nenhum arquivo novo para commitar." -ForegroundColor Yellow
    Write-Host "Verificando se já existe commit..." -ForegroundColor Cyan
    $hasCommits = git log --oneline -1 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Nenhum commit encontrado. Adicione arquivos primeiro." -ForegroundColor Red
        pause
        exit
    }
}

Write-Host ""
Write-Host "Verificando remote..." -ForegroundColor Cyan
$remote = git remote get-url origin 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Adicionando remote do GitHub..." -ForegroundColor Cyan
    git remote add origin https://github.com/VictorHGutierrez-cloud/microsoft-factorialIT.git
} else {
    Write-Host "Remote já configurado: $remote" -ForegroundColor Green
    Write-Host "Atualizando remote..." -ForegroundColor Cyan
    git remote set-url origin https://github.com/VictorHGutierrez-cloud/microsoft-factorialIT.git
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Fazendo push para GitHub..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  ATENÇÃO: Se for a primeira vez, o GitHub pode pedir autenticação." -ForegroundColor Yellow
Write-Host "   Use um Personal Access Token em vez da senha." -ForegroundColor Yellow
Write-Host "   Veja: https://github.com/settings/tokens" -ForegroundColor Yellow
Write-Host ""
pause

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✅ Push realizado com sucesso!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Seu código está disponível em:" -ForegroundColor Cyan
    Write-Host "https://github.com/VictorHGutierrez-cloud/microsoft-factorialIT" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "  ❌ Erro ao fazer push" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Possíveis causas:" -ForegroundColor Yellow
    Write-Host "- Problema de autenticação" -ForegroundColor Yellow
    Write-Host "- Repositório não existe ou não está vazio" -ForegroundColor Yellow
    Write-Host "- Problema de conexão" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Veja PUSH_TO_GITHUB.md para mais ajuda." -ForegroundColor Cyan
}

Write-Host ""
pause
