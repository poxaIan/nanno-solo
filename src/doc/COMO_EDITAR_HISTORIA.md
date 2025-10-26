# 📖 Como Editar a História da Empresa

## 📍 Onde está a história?

A história da empresa aparece na página **"Sobre Nós"** (antes da seção de Equipe).

## ✏️ Como editar o conteúdo

Edite o arquivo: **`src/data/company-history.js`**

### Estrutura do arquivo:

```javascript
export const companyHistory = {
  // 1. Introdução (texto principal no topo)
  introduction: "Seu texto aqui...",
  
  // 2. Timeline (marcos importantes)
  milestones: [
    {
      year: "2020",                    // Ano do marco
      title: "O Início",               // Título do marco
      description: "Descrição..."      // O que aconteceu
    },
    // Adicione quantos marcos quiser!
  ],
  
  // 3. Missão, Visão e Valores
  values: {
    mission: {
      title: "Missão",
      description: "Texto da missão..."
    },
    vision: {
      title: "Visão",
      description: "Texto da visão..."
    },
    values: {
      title: "Valores",
      description: "Texto dos valores..."
    }
  }
};
```

## 🎨 Design da Seção

### ✨ O que foi implementado:

1. **Título e Introdução**
   - Texto centralizado e destaque

2. **Timeline Visual**
   - Cards coloridos em grid 2 colunas (responsivo)
   - Cada marco tem: ano, ícone, título e descrição
   - Efeito hover com zoom

3. **Missão, Visão, Valores**
   - 3 cards lado a lado (responsivo)
   - Cores alternadas (amarelo/verde)
   - Efeito hover

## 💡 Dicas para o texto:

### ✅ BOM:
- Textos curtos e objetivos (2-4 linhas por marco)
- Use parágrafos separados para diferentes ideias
- Destaque conquistas específicas
- Seja autêntico

### ❌ EVITE:
- Textos longos e densos
- Muita informação técnica de uma vez
- Parágrafos enormes
- Jargões complicados

## 📝 Exemplo Real:

```javascript
milestones: [
  {
    year: "2020",
    title: "Fundação da Nanno Solo",
    description: "Iniciamos nossas atividades focados em controle tecnológico de obras públicas em Minas Gerais."
  },
  {
    year: "2022",
    title: "Expansão Regional",
    description: "Ampliamos nossa atuação para Rio de Janeiro e São Paulo, dobrando nossa equipe técnica."
  },
  {
    year: "2024",
    title: "Certificações",
    description: "Conquistamos certificações ISO 9001 e ampliamos serviços para pavimentação e solos."
  }
]
```

## 🔧 Como testar suas mudanças:

1. Edite o arquivo `src/data/company-history.js`
2. Salve
3. O site atualiza automaticamente (hot reload)
4. Veja a página "Sobre Nós" no navegador

## 📱 Responsivo

O design se adapta automaticamente:
- **Mobile**: 1 coluna
- **Tablet**: 2 colunas
- **Desktop**: 2 colunas (timeline) + 3 colunas (valores)

---

💡 **Dica Final**: Mantenha textos concisos. As pessoas geralmente escaneiam ao invés de ler tudo!

