# 🔧 Resolver: Política de Execução do PowerShell

## ⚠️ Problema

O PowerShell está bloqueando a execução de scripts do npm. Isso é uma configuração de segurança do Windows.

---

## ✅ Solução Rápida

Execute este comando no PowerShell **como Administrador**:

### **Passo 1: Abrir PowerShell como Administrador**

1. Pressione `Windows + X`
2. Escolha **"Windows PowerShell (Admin)"** ou **"Terminal (Admin)"**
3. Se pedir permissão, clique em **"Sim"**

### **Passo 2: Executar o Comando**

No PowerShell **como Administrador**, digite:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Pressione Enter. Se pedir confirmação, digite `S` e pressione Enter.

### **Passo 3: Fechar e Abrir Novo PowerShell Normal**

1. Feche o PowerShell de Administrador
2. Abra um PowerShell **normal** (não precisa ser admin)
3. Navegue até a pasta do projeto:

```powershell
cd "C:\Users\victo\Desktop\Projetos Random\Factorial IT\factorial-microsoft-landing"
```

4. Agora execute:

```powershell
npm install
```

✅ **Deve funcionar agora!**

---

## 🔍 Alternativa: Sem Precisa de Admin

Se não quiser usar PowerShell como Admin, você pode usar o **CMD** (Prompt de Comando) em vez do PowerShell:

1. Pressione `Windows + R`
2. Digite: `cmd` e pressione Enter
3. Navegue até a pasta:

```cmd
cd "C:\Users\victo\Desktop\Projetos Random\Factorial IT\factorial-microsoft-landing"
```

4. Execute:

```cmd
npm install
```

O CMD não tem essa restrição de política de execução!

---

## 📝 Explicação

- **RemoteSigned**: Permite executar scripts locais e scripts baixados da internet que estejam assinados
- **CurrentUser**: Aplica apenas para o usuário atual (mais seguro)
- Isso é necessário porque o npm usa scripts PowerShell para funcionar

---

## ✅ Depois de Resolver

Quando `npm install` funcionar, você verá muitas linhas sendo exibidas. Isso é normal!

Quando terminar, execute:

```powershell
npm run dev
```

E abra: http://localhost:3000

🎉 **Pronto!**
