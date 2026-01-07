# 🚀 Configuração do GitHub Pages

## ✅ O que foi configurado

1. ✅ Next.js configurado para export estático
2. ✅ GitHub Action criado para deploy automático
3. ✅ Scripts atualizados no package.json

---

## 📋 Passo a Passo para Ativar

### **Passo 1: Ativar GitHub Pages no Repositório**

1. Acesse seu repositório no GitHub:
   https://github.com/VictorHGutierrez-cloud/microsoft-factorialIT

2. Clique em **"Settings"** (Configurações)

3. No menu lateral esquerdo, clique em **"Pages"**

4. Em **"Source"**, escolha:
   - **"GitHub Actions"** (não "Deploy from a branch")

5. Clique em **"Save"**

### **Passo 2: Fazer Push das Mudanças**

As configurações já foram feitas. Agora você precisa fazer push:

```powershell
cd "C:\Users\victo\Desktop\Projetos Random\Factorial IT\factorial-microsoft-landing"
git add .
git commit -m "Configure GitHub Pages deployment"
git push
```

### **Passo 3: Verificar Deploy**

1. Vá em **"Actions"** no seu repositório GitHub
2. Você verá o workflow "Deploy to GitHub Pages" rodando
3. Aguarde ~2-3 minutos
4. Quando terminar (verde ✅), o site estará no ar!

---

## 🌐 URL do Site

Depois do deploy, seu site estará disponível em:

**https://victorhgutierrez-cloud.github.io/microsoft-factorialIT/**

---

## 🔄 Deploy Automático

A partir de agora, **toda vez que você fizer push** para a branch `main`, o GitHub Actions vai:

1. ✅ Instalar dependências
2. ✅ Fazer build do projeto
3. ✅ Fazer deploy automaticamente para GitHub Pages

**Você não precisa fazer nada!** É automático! 🎉

---

## 🔍 Verificar Status do Deploy

1. Vá em **"Actions"** no repositório
2. Clique no workflow mais recente
3. Veja os logs em tempo real
4. Se der erro, os logs mostram o que aconteceu

---

## ⚠️ Notas Importantes

### Base Path

O site está configurado com base path `/microsoft-factorialIT` porque GitHub Pages serve de uma subpasta.

Se você quiser usar um domínio customizado ou mudar isso, edite `next.config.js`:

```javascript
basePath: '', // Remove para usar domínio raiz
```

### Imagens

As imagens estão configuradas como `unoptimized: true` para funcionar no GitHub Pages estático.

---

## 🆘 Problemas Comuns

### Deploy não inicia

- Verifique se ativou GitHub Pages com "GitHub Actions" como source
- Verifique se fez push das mudanças

### Site não carrega

- Aguarde alguns minutos (primeiro deploy pode demorar)
- Verifique se o workflow terminou com sucesso em "Actions"
- Limpe o cache do navegador (Ctrl + F5)

### Erro no build

- Veja os logs em "Actions"
- Verifique se todas as dependências estão no package.json
- Certifique-se de que o Node.js 18+ está sendo usado

---

## ✅ Checklist

- [ ] Ativar GitHub Pages em Settings → Pages → Source: "GitHub Actions"
- [ ] Fazer push das mudanças
- [ ] Verificar Actions para ver o deploy rodando
- [ ] Aguardar deploy terminar
- [ ] Acessar: https://victorhgutierrez-cloud.github.io/microsoft-factorialIT/

---

**Pronto! Seu site estará no ar em poucos minutos!** 🚀
