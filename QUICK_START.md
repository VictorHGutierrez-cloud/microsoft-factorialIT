# 🚀 Quick Start Guide

## ⚠️ IMPORTANTE: Instalar Node.js Primeiro

**Se você recebeu erro "npm não é reconhecido":**

1. Baixe o Node.js de: **https://nodejs.org/** (versão LTS)
2. Instale marcando "Add to PATH"
3. **Feche e abra um novo PowerShell**
4. Verifique: `node --version` e `npm --version`

📖 **Guia completo:** Veja `INSTALACAO_NODEJS.md` para instruções detalhadas

---

## Para Começar Rapidamente

### 1. Instalar Dependências
```bash
cd factorial-microsoft-landing
npm install
```

**OU use o script automático:**
- Clique duas vezes em `SETUP_WINDOWS.bat` (se estiver no Windows)

### 2. Personalizar para Seu Parceiro

Edite `config/partner-config.ts`:
- Altere o nome do parceiro
- Ajuste as cores (primary e secondary)
- Adicione informações de contato
- Configure os one pagers

### 3. Executar em Desenvolvimento
```bash
npm run dev
```

Abra http://localhost:3000 no navegador.

### 4. Adicionar One Pagers

1. Coloque os PDFs em `public/one-pagers/`
2. Adicione thumbnails (opcional) na mesma pasta
3. Atualize o array `onePagers` em `config/partner-config.ts`

### 5. Build para Produção
```bash
npm run build
npm start
```

## 📝 Checklist de Personalização

- [ ] Nome do parceiro em `partner-config.ts`
- [ ] Logo do parceiro (adicionar em `public/images/`)
- [ ] Cores personalizadas
- [ ] Informações de contato
- [ ] Designações Microsoft
- [ ] One pagers adicionados
- [ ] Conteúdo customizado (hero title, subtitle, etc.)

## 🎨 Cores Recomendadas

- **Primary**: Cor principal do parceiro (geralmente Microsoft Azure Blue: #0078D4)
- **Secondary**: Cor Factorial IT (Rosa: #FF6B9D)

## 📱 Testar Responsividade

O site é totalmente responsivo. Teste em:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## ⚡ Dicas

- Use imagens otimizadas para melhor performance
- Mantenha os one pagers em PDF para fácil download
- Personalize as animações se necessário (Framer Motion)
- Adicione Google Analytics se necessário

---

**Pronto para usar!** 🎉
