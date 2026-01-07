# 🚨 ATENÇÃO: Git Não Está Instalado

## O Problema

Você está vendo este erro:
```
git : O termo 'git' não é reconhecido...
```

Isso significa que o **Git não está instalado** no seu computador.

---

## ✅ Solução em 3 Passos

### 1️⃣ Instalar Git

- **Baixe:** https://git-scm.com/download/win
- **Instale:** Clique duas vezes no arquivo e siga as instruções
- **Mantenha as opções padrão**

### 2️⃣ Fechar e Abrir NOVO PowerShell

⚠️ **MUITO IMPORTANTE:** Feche TODOS os terminais e abra um NOVO.

### 3️⃣ Verificar

```powershell
git --version
```

Se aparecer uma versão → ✅ Funcionou!

---

## 🎯 Depois que Funcionar

Execute estes comandos:

```powershell
cd "C:\Users\victo\Desktop\Projetos Random\Factorial IT\factorial-microsoft-landing"
git init
git branch -M main
git add .
git commit -m "Initial commit: Factorial IT + Microsoft Landing Page"
git remote add origin https://github.com/VictorHGutierrez-cloud/microsoft-factorialIT.git
git push -u origin main
```

---

## 🆘 Alternativa Mais Fácil: GitHub Desktop

Se não quiser usar comandos:

1. Baixe: https://desktop.github.com/
2. Instale e faça login
3. Adicione a pasta do projeto
4. Clique em "Publish repository"

✅ **Pronto! Sem comandos!**

---

**Veja `INSTALAR_GIT_AGORA.md` para guia completo!**
