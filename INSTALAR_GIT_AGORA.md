# ⚡ Instalar Git AGORA - Guia Rápido

## 🎯 Você Precisa Instalar o Git

O erro que você está vendo significa que o Git não está instalado no seu computador.

---

## 🚀 Solução Rápida (5 Minutos)

### **Passo 1: Baixar Git**

1. Abra seu navegador
2. Acesse: **https://git-scm.com/download/win**
3. O download começará automaticamente
4. Aguarde o arquivo baixar (ex: `Git-2.x.x-64-bit.exe`)

### **Passo 2: Instalar Git**

1. **Clique duas vezes** no arquivo baixado
2. Clique em **"Next"** na tela de boas-vindas
3. **Mantenha todas as opções padrão** (já estão corretas)
4. Continue clicando **"Next"** até chegar em **"Install"**
5. Clique em **"Install"**
6. Aguarde a instalação terminar (1-2 minutos)
7. Clique em **"Finish"**

### **Passo 3: Fechar e Abrir NOVO PowerShell**

⚠️ **MUITO IMPORTANTE:**

1. **Feche TODOS os terminais PowerShell abertos**
2. Feche também o Cursor/VS Code se estiver usando terminal integrado
3. **Abra um NOVO PowerShell** (ou reabra o Cursor)

### **Passo 4: Verificar se Funcionou**

No **NOVO** PowerShell, digite:

```powershell
git --version
```

**✅ Se aparecer algo como `git version 2.x.x` → FUNCIONOU!**

**❌ Se ainda der erro → Veja "Solução Alternativa" abaixo**

---

## 🎯 Passo 5: Fazer Push para GitHub

Depois que `git --version` funcionar, execute:

```powershell
# Navegar até a pasta
cd "C:\Users\victo\Desktop\Projetos Random\Factorial IT\factorial-microsoft-landing"

# Inicializar Git
git init

# Criar branch main
git branch -M main

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Initial commit: Factorial IT + Microsoft Landing Page"

# Adicionar remote
git remote add origin https://github.com/VictorHGutierrez-cloud/microsoft-factorialIT.git

# Fazer push
git push -u origin main
```

---

## 🔄 Solução Alternativa: GitHub Desktop

Se não quiser instalar o Git manualmente, use o **GitHub Desktop** (mais fácil):

### **Opção A: GitHub Desktop**

1. Baixe: **https://desktop.github.com/**
2. Instale o GitHub Desktop
3. Faça login com sua conta GitHub
4. Clique em **"File" → "Add Local Repository"**
5. Selecione a pasta: `factorial-microsoft-landing`
6. Clique em **"Publish repository"**
7. Escolha: `microsoft-factorialIT`
8. Clique em **"Publish Repository"**

✅ **Pronto! Sem precisar de comandos!**

---

## 🔍 Se Ainda Não Funcionar

### Verificar se Git Está Instalado

1. Abra o **Explorador de Arquivos**
2. Vá para: `C:\Program Files\Git\`
3. Se a pasta existir, o Git está instalado
4. O problema é apenas o PATH

### Adicionar Git ao PATH Manualmente

1. Pressione `Windows + R`
2. Digite: `sysdm.cpl` e pressione Enter
3. Vá na aba **"Avançado"**
4. Clique em **"Variáveis de Ambiente"**
5. Em **"Variáveis do sistema"**, encontre **"Path"**
6. Clique em **"Editar"**
7. Clique em **"Novo"**
8. Adicione: `C:\Program Files\Git\cmd`
9. Clique em **"OK"** em todas as janelas
10. **Feche e abra um novo PowerShell**

---

## 📝 Checklist

- [ ] Git baixado de git-scm.com/download/win
- [ ] Git instalado
- [ ] Todos os terminais PowerShell fechados
- [ ] Novo PowerShell aberto
- [ ] `git --version` funciona
- [ ] Push para GitHub realizado

---

## 🆘 Ainda com Problemas?

1. **Reinicie o computador** (às vezes é necessário)
2. Use o **GitHub Desktop** (mais fácil, sem comandos)
3. Ou me avise qual erro específico está aparecendo

---

**Resumo:** Baixe Git → Instale → Feche PowerShell → Abra Novo → Teste `git --version` → Faça push! 🚀
