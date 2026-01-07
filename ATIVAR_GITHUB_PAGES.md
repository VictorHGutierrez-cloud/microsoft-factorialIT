# 🚨 IMPORTANTE: Ativar GitHub Pages Corretamente

## ⚠️ O Problema

Se o GitHub Pages está mostrando apenas o README, significa que:

1. **GitHub Pages está configurado para servir de uma branch** (não de GitHub Actions)
2. **OU o workflow não está rodando**

---

## ✅ SOLUÇÃO: Configurar GitHub Pages Corretamente

### **Passo 1: Ir em Settings**

1. Acesse: https://github.com/VictorHGutierrez-cloud/microsoft-factorialIT
2. Clique em **"Settings"** (no topo do repositório)

### **Passo 2: Ir em Pages**

1. No menu lateral esquerdo, procure **"Pages"**
2. Clique em **"Pages"**

### **Passo 3: Configurar Source**

**IMPORTANTE:** Você precisa escolher:

- ❌ **NÃO** escolha "Deploy from a branch"
- ✅ **SIM**, escolha **"GitHub Actions"**

Se você não ver a opção "GitHub Actions", pode ser que:
- O workflow ainda não foi executado pela primeira vez
- Ou você precisa dar permissões ao workflow

### **Passo 4: Verificar Permissões**

1. Ainda em **Settings**
2. Vá em **"Actions"** → **"General"**
3. Em **"Workflow permissions"**, escolha:
   - ✅ **"Read and write permissions"**
   - ✅ Marque **"Allow GitHub Actions to create and approve pull requests"**
4. Clique em **"Save"**

### **Passo 5: Executar Workflow Manualmente**

1. Vá em **"Actions"** (no topo do repositório)
2. Clique em **"Deploy to GitHub Pages"** (workflow)
3. Clique no botão **"Run workflow"** (canto superior direito)
4. Escolha branch: **"main"**
5. Clique em **"Run workflow"**

### **Passo 6: Aguardar Deploy**

1. Clique no workflow que acabou de rodar
2. Aguarde os jobs terminarem (pode levar 2-3 minutos)
3. Quando aparecer ✅ verde, o deploy está completo!

---

## 🔍 Verificar se Está Funcionando

Depois do deploy, acesse:

**https://victorhgutierrez-cloud.github.io/microsoft-factorialIT/**

Você deve ver o site completo, não apenas o README!

---

## 🆘 Se Ainda Não Funcionar

### Verificar Logs do Workflow

1. Vá em **"Actions"**
2. Clique no workflow mais recente
3. Clique no job **"build"** ou **"deploy"**
4. Veja os logs para identificar erros

### Problemas Comuns

**Erro: "Permission denied"**
- Verifique se deu permissões em Settings → Actions → General

**Erro: "Build failed"**
- Veja os logs do job "build"
- Pode ser problema de dependências

**Site ainda mostra README**
- Certifique-se de que escolheu "GitHub Actions" como source
- Aguarde alguns minutos após o deploy terminar
- Limpe o cache do navegador (Ctrl + F5)

---

## ✅ Checklist

- [ ] Settings → Pages → Source: **"GitHub Actions"** (não "Deploy from a branch")
- [ ] Settings → Actions → General → Workflow permissions: **"Read and write"**
- [ ] Actions → Deploy to GitHub Pages → **"Run workflow"** manualmente
- [ ] Aguardar deploy terminar (✅ verde)
- [ ] Acessar: https://victorhgutierrez-cloud.github.io/microsoft-factorialIT/
- [ ] Ver site completo (não apenas README)

---

**O push foi feito corretamente! Agora é só configurar o GitHub Pages para usar GitHub Actions!** 🚀
