# 🔧 Resolver Problema: Node.js não reconhecido

## ⚠️ Situação Atual

Você instalou o Node.js, mas o PowerShell ainda não está reconhecendo. Isso acontece porque o PowerShell precisa ser **fechado e reaberto** para carregar as novas variáveis de ambiente.

---

## ✅ Solução Rápida (3 Passos)

### **Passo 1: Fechar TODOS os Terminais**

1. Feche **TODOS** os terminais PowerShell abertos
2. Feche também o Cursor/VS Code se estiver usando terminal integrado

### **Passo 2: Abrir NOVO PowerShell**

1. Pressione `Windows + X`
2. Escolha **"Windows PowerShell"** ou **"Terminal"**
3. **OU** abra o Cursor/VS Code novamente

### **Passo 3: Verificar se Funcionou**

No **NOVO** PowerShell, digite:

```powershell
node --version
```

**Se aparecer algo como `v20.x.x` → ✅ Funcionou!**

Se ainda não funcionar, continue lendo abaixo.

---

## 🔍 Se Ainda Não Funcionar

### Opção A: Reiniciar o Computador

Às vezes é necessário reiniciar para carregar as variáveis de ambiente:

1. Salve todos os seus trabalhos
2. Reinicie o computador
3. Abra um novo PowerShell
4. Teste: `node --version`

### Opção B: Verificar Instalação do Node.js

1. Abra o **Explorador de Arquivos**
2. Vá para: `C:\Program Files\nodejs\`
3. Se a pasta existir, o Node.js está instalado
4. O problema é apenas o PATH

### Opção C: Adicionar Node.js ao PATH Manualmente

1. Pressione `Windows + R`
2. Digite: `sysdm.cpl` e pressione Enter
3. Vá na aba **"Avançado"**
4. Clique em **"Variáveis de Ambiente"**
5. Em **"Variáveis do sistema"**, encontre **"Path"**
6. Clique em **"Editar"**
7. Clique em **"Novo"**
8. Adicione: `C:\Program Files\nodejs\`
9. Clique em **"OK"** em todas as janelas
10. **Feche e abra um novo PowerShell**

---

## 🎯 Depois que Funcionar

Quando `node --version` funcionar, execute:

```powershell
# Navegar até a pasta do projeto
cd "C:\Users\victo\Desktop\Projetos Random\Factorial IT\factorial-microsoft-landing"

# Instalar dependências
npm install

# Executar o projeto
npm run dev
```

---

## 📞 Teste Rápido

Execute estes comandos em um **NOVO PowerShell**:

```powershell
node --version
npm --version
```

**Ambos devem mostrar números de versão!**

Se funcionar, você está pronto para continuar! 🎉
