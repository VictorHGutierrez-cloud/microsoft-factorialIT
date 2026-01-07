# Factorial IT + Microsoft Landing Page

Uma landing page moderna, interativa e visualmente impactante que demonstra a integração perfeita entre Factorial IT e o ecossistema Microsoft. Este projeto serve como um template replicável para parceiros Microsoft que vendem Factorial RH.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional com animações fluidas
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Interativo**: Animações com Framer Motion e micro-interações
- **Template Replicável**: Sistema de configuração fácil para personalização por parceiro
- **Performance Otimizada**: Next.js 14 com App Router para máxima performance
- **TypeScript**: Type safety em todo o código

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório ou navegue até a pasta do projeto:
```bash
cd factorial-microsoft-landing
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🎨 Personalização para Parceiros

O projeto inclui um sistema de configuração simples para personalizar a landing page para diferentes parceiros Microsoft.

### Configuração do Parceiro

Edite o arquivo `config/partner-config.ts` para personalizar:

```typescript
export const partnerConfig: PartnerConfig = {
  name: "Seu Parceiro",           // Nome do parceiro
  logo: "/images/partners/logo.svg", // Caminho do logo
  colors: {
    primary: "#0078D4",            // Cor principal (geralmente Microsoft Azure Blue)
    secondary: "#FF6B9D",         // Cor Factorial IT
  },
  contact: {
    email: "contact@parceiro.com",
    phone: "+1-XXX-XXX-XXXX",
    website: "https://parceiro.com",
  },
  microsoftDesignations: [
    "Business Applications",
    "Security",
    // Adicione as designações Microsoft do parceiro
  ],
  onePagers: [
    {
      title: "Título do One Pager",
      file: "/one-pagers/arquivo.pdf",
      thumbnail: "/one-pagers/thumb.png", // Opcional
      category: "security", // security, automation, analytics, integration
    },
  ],
  customContent: {
    heroTitle: "Título personalizado do Hero",
    heroSubtitle: "Subtítulo personalizado",
    ctaText: "Texto do botão CTA",
  },
};
```

### Adicionando One Pagers

1. Coloque os arquivos PDF na pasta `public/one-pagers/`
2. Adicione as imagens de thumbnail (opcional) na mesma pasta
3. Atualize o array `onePagers` em `config/partner-config.ts`

### Personalizando Cores

As cores são definidas em dois lugares:

1. **Configuração do Parceiro** (`config/partner-config.ts`): Cores principais
2. **Tailwind Config** (`tailwind.config.ts`): Cores do sistema (Factorial, Microsoft)

Para mudar as cores do sistema, edite `tailwind.config.ts`:

```typescript
colors: {
  factorial: {
    primary: '#FF6B9D',
    secondary: '#FF8FB3',
  },
  microsoft: {
    azure: '#0078D4',
    dynamics: '#00B294',
    // etc.
  },
}
```

## 📁 Estrutura do Projeto

```
factorial-microsoft-landing/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── hero/               # Hero Section
│   ├── ecosystem/          # Visualização do ecossistema
│   ├── integrations/       # Cards de integração
│   ├── features/           # Features e value proposition
│   ├── cta/                # Call-to-action
│   └── shared/             # Componentes compartilhados
├── config/
│   └── partner-config.ts   # Configuração do parceiro
├── lib/
│   └── utils.ts            # Utilitários
└── public/
    ├── images/             # Imagens
    └── one-pagers/         # One pagers PDFs
```

## 🎯 Seções da Landing Page

1. **Hero Section**: Impacto imediato com visualização do ecossistema
2. **Ecosystem Visualization**: Diagrama interativo mostrando conexões
3. **Integration Showcase**: Cards detalhando cada integração Microsoft
4. **Everything Works**: Timeline mostrando automação
5. **Microsoft Stack**: Grid de produtos Microsoft integrados
6. **Value Proposition**: Métricas animadas de ROI
7. **One Pagers**: Recursos para download
8. **CTA Section**: Formulário de contato

## 🚀 Build para Produção

```bash
npm run build
npm start
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa ESLint

## 🎨 Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 📱 Responsividade

O site é totalmente responsivo com breakpoints otimizados:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Customização Avançada

### Adicionando Novas Seções

1. Crie o componente em `components/`
2. Importe e adicione em `app/page.tsx`
3. Adicione link de navegação em `components/shared/Navbar.tsx`

### Modificando Animações

As animações usam Framer Motion. Para ajustar:
- Edite os componentes individuais
- Ajuste `initial`, `animate`, e `transition` props
- Use `whileInView` para animações no scroll

## 📄 Licença

Este projeto é um template para uso por parceiros Microsoft.

## 🤝 Suporte

Para dúvidas ou suporte, entre em contato através do email configurado em `partner-config.ts`.

---

**Desenvolvido para demonstrar a integração perfeita entre Factorial IT e Microsoft Ecosystem**
