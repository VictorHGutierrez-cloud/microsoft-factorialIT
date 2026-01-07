# 📦 Guia de Instalação do Node.js

## ⚠️ Problema Identificado

O Node.js não está instalado no seu computador. É necessário instalá-lo para executar o projeto.

---

## 🚀 Solução Passo a Passo

### **Passo 1: Baixar o Node.js**

1. Abra seu navegador
2. Acesse: **https://nodejs.org/**
3. Você verá duas opções:
   - **LTS** (recomendado) - Versão estável e de longo prazo
   - **Current** - Versão mais recente
4. **Clique em "LTS"** para baixar

### **Passo 2: Instalar o Node.js**

1. Execute o arquivo baixado (ex: `node-v20.x.x-x64.msi`)
2. Clique em **"Next"** na tela de boas-vindas
3. **IMPORTANTE**: Marque a opção **"Automatically install the necessary tools"** (se aparecer)
4. Continue clicando em **"Next"**
5. Na tela de configuração, **certifique-se de que está marcado**:
   - ✅ "Add to PATH" (adicionar ao caminho do sistema)
6. Clique em **"Install"**
7. Aguarde a instalação terminar
8. Clique em **"Finish"**

### **Passo 3: Verificar a Instalação**

1. **Feche TODOS os terminais PowerShell abertos**
2. Abra um **NOVO PowerShell** (importante para carregar as variáveis de ambiente)
3. Digite e pressione Enter:

```powershell
node --version
```

**Resultado esperado**: Deve mostrar algo como `v20.x.x`

4. Digite e pressione Enter:

```powershell
npm --version
```

**Resultado esperado**: Deve mostrar algo como `10.x.x`

✅ **Se ambos funcionarem, a instalação foi bem-sucedida!**

---

## 📍 Passo 4: Instalar Dependências do Projeto

Agora que o Node.js está instalado, vamos instalar as dependências do projeto:

1. No PowerShell, navegue até a pasta do projeto:

```powershell
cd "C:\Users\victo\Desktop\Projetos Random\Factorial IT\factorial-microsoft-landing"
```

2. Instale as dependências:

```powershell
npm install
```

**Isso pode levar alguns minutos.** Você verá muitas linhas sendo exibidas enquanto os pacotes são baixados.

3. Quando terminar, você verá algo como:
```
added 500 packages, and audited 501 packages in 2m
```

---

## 🎉 Passo 5: Executar o Projeto

Agora você pode executar o projeto:

```powershell
npm run dev
```

Você verá uma mensagem como:
```
  ▲ Next.js 14.0.4
  - Local:        http://localhost:3000
```

4. **Abra seu navegador** e acesse: **http://localhost:3000**

🎊 **Pronto! O site está funcionando!**

---

## ❓ Problemas Comuns

### Problema: "node não é reconhecido" após instalar

**Solução:**
1. Feche TODOS os terminais PowerShell
2. Abra um NOVO PowerShell
3. Se ainda não funcionar, reinicie o computador

### Problema: "npm install" está muito lento

**Solução:**
- Isso é normal na primeira vez
- Pode levar 2-5 minutos dependendo da sua internet
- Aguarde até terminar

### Problema: Erros durante "npm install"

**Solução:**
- Certifique-se de estar na pasta correta do projeto
- Verifique sua conexão com a internet
- Tente novamente: `npm install`

---

## 📞 Precisa de Mais Ajuda?

Se tiver problemas, me avise e eu te ajudo a resolver!

---

**Resumo Rápido:**
1. ✅ Baixar Node.js de nodejs.org (versão LTS)
2. ✅ Instalar (marcar "Add to PATH")
3. ✅ Fechar e abrir novo PowerShell
4. ✅ Verificar: `node --version` e `npm --version`
5. ✅ Navegar até a pasta do projeto
6. ✅ Executar: `npm install`
7. ✅ Executar: `npm run dev`
8. ✅ Abrir http://localhost:3000 no navegador
