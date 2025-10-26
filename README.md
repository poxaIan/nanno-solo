# Nanno Solo - Site Institucional

Site institucional da empresa Nanno Solo, especializada em gerenciamento de projetos e consultoria em engenharia.

## Estrutura do Projeto

```
src/
├── app/                    # Rotas e páginas do Next.js
│   ├── page.jsx           # Página inicial
│   ├── team/              # Página da equipe
│   ├── services/          # Página de serviços
│   ├── projects/          # Página de portfólio
│   └── testimonials/      # Página de depoimentos
├── components/
│   ├── layout/            # Componentes de layout
│   │   ├── Navbar.jsx    # Barra de navegação
│   │   └── Footer.jsx    # Rodapé
│   ├── sections/          # Seções de página
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Team.jsx
│   │   ├── Subscribe.jsx
│   │   ├── WorkList.jsx
│   │   ├── AllProjects.jsx
│   │   └── StatList.jsx
│   └── ui/                # Componentes de UI reutilizáveis
│       ├── Brand.jsx
│       ├── Breadcrumb.jsx
│       ├── ProgressbarProvider.jsx
│       ├── FeatureProject.jsx
│       └── TestimonialList.jsx
├── data/                  # Dados estáticos
│   ├── services.js       # Dados dos serviços
│   ├── team.js           # Dados da equipe
│   ├── projects.js       # Dados dos projetos
│   ├── partners.js       # Dados das parcerias
│   └── work-list.js      # Lista de trabalhos
├── lib/                   # Funções utilitárias
│   └── date-utils.js     # Utilitários de data
└── config/                # Configurações
    └── constants.js      # Constantes globais
```

## Seções do Site

- **Início** - Introdução, parcerias, o que fazemos, contato e rodapé
- **Equipe** - Integrantes da equipe e rodapé
- **Serviços** - Serviços prestados pela empresa
- **Portfólio** - Histórico de projetos e clientes

## Começando

Primeiro, instale as dependências:

```bash
npm install
```

Em seguida, execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Build de Produção

Para criar uma build de produção:

```bash
npm run build
```

Para iniciar o servidor de produção:

```bash
npm start
```

## Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **React 18** - Biblioteca de UI
- **Tailwind CSS** - Framework de CSS
- **React Icons** - Biblioteca de ícones
- **AOS** - Animações on scroll

## Deploy

O site pode ser implantado facilmente na [Vercel Platform](https://vercel.com/new).

Consulte a [documentação de deployment do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.
