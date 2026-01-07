# 📤 Como Fazer Push para o GitHub

## ⚠️ Git Não Está Instalado

Você precisa instalar o Git primeiro para fazer push do código.

---

## 🚀 Opção 1: Instalar Git (Recomendado)

### **Passo 1: Baixar Git**

1. Acesse: **https://git-scm.com/download/win**
2. Baixe o instalador (vai baixar automaticamente a versão correta)
3. Execute o instalador

### **Passo 2: Instalar Git**

Durante a instalação:
- Clique em "Next" nas telas iniciais
- **Mantenha as opções padrão** (já estão configuradas corretamente)
- Na tela "Choosing the default editor", pode deixar "Nano" ou escolher outro
- Continue clicando "Next"
- Clique em "Install"
- Aguarde terminar
- Clique em "Finish"

### **Passo 3: Verificar Instalação**

1. **Feche e abra um NOVO PowerShell** (importante!)
2. Digite:

```powershell
git --version
```

**Se aparecer algo como `git version 2.x.x` → ✅ Funcionou!**

### **Passo 4: Fazer Push do Projeto**

Depois que o Git funcionar, execute estes comandos:

```powershell
# Navegar até a pasta do projeto
cd "C:\Users\victo\Desktop\Projetos Random\Factorial IT\factorial-microsoft-landing"

# Inicializar repositório Git
git init

# Criar branch main
git branch -M main

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit: Factorial IT + Microsoft Landing Page"

# Adicionar remote do GitHub
git remote add origin https://github.com/VictorHGutierrez-cloud/microsoft-factorialIT.git

# Fazer push para o GitHub
git push -u origin main
```

**Nota:** Na primeira vez, o GitHub pode pedir autenticação. Siga as instruções na tela.

---

## 🎯 Opção 2: GitHub Desktop (Mais Fácil)

Se preferir uma interface gráfica:

1. Baixe: **https://desktop.github.com/**
2. Instale o GitHub Desktop
3. Faça login com sua conta GitHub
4. Clique em **"File" → "Add Local Repository"**
5. Selecione a pasta: `factorial-microsoft-landing`
6. Clique em **"Publish repository"**
7. Escolha o repositório: `microsoft-factorialIT`
8. Clique em **"Publish Repository"**

✅ **Pronto!**

---

## 📝 O Que Será Enviado?

**SIM, toda a pasta `factorial-microsoft-landing` será enviada**, mas:

✅ **Será enviado:**
- Todo o código fonte
- Componentes React
- Configurações
- Documentação (README, etc.)
- Arquivos de configuração

❌ **NÃO será enviado** (já está no .gitignore):
- `node_modules/` (dependências - são muito grandes)
- `.next/` (build temporário)
- Arquivos de log
- Arquivos temporários

---

## 🔐 Autenticação no GitHub

Na primeira vez que fizer push, o GitHub pode pedir autenticação:

### **Opção A: Personal Access Token (Recomendado)**

1. Acesse: https://github.com/settings/tokens
2. Clique em **"Generate new token (classic)"**
3. Dê um nome (ex: "Factorial Landing")
4. Marque a opção **"repo"** (acesso completo aos repositórios)
5. Clique em **"Generate token"**
6. **COPIE o token** (você só verá uma vez!)
7. Quando o Git pedir senha, **cole o token** em vez da senha

### **Opção B: GitHub CLI**

Instale o GitHub CLI e faça login:

```powershell
gh auth login
```

---

## ✅ Depois do Push

Depois que o push funcionar, você verá:

```
Enumerating objects: X, done.
Counting objects: 100% (X/X), done.
Writing objects: 100% (X/X), done.
To https://github.com/VictorHGutierrez-cloud/microsoft-factorialIT.git
 * [new branch]      main -> main
```

🎉 **Seu código estará no GitHub!**

---

## 📞 Precisa de Ajuda?

Se tiver problemas:
1. Certifique-se de que o Git está instalado: `git --version`
2. Verifique se está na pasta correta
3. Verifique se o repositório GitHub existe e está vazio
