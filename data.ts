import { TipData, TipCategory } from './types';

export const TIPS: TipData[] = [
  {
    id: 1,
    title: "ICP (Cliente Ideal)",
    subtitle: "Atração - Inbound",
    category: TipCategory.ATTRACTION_INBOUND,
    problem: "Você sabe realmente quem é seu cliente ideal? Ou está prospectando todo mundo?",
    solution: "Cria perfil detalhado do seu cliente ideal em 2 minutos (Dores, Desejos, Onde encontrar).",
    promptTemplate: "Sou corretor de seguros especializado em [TIPO DE SEGURO].\nQuero vender mais para [SEGMENTO ALVO].\n\nMe crie o perfil COMPLETO do meu cliente ideal incluindo:\n1. Dados demográficos (idade, profissão, renda)\n2. Principais problemas/medos relacionados a [TIPO SEGURO]\n3. O que ele busca/deseja resolver\n4. Onde encontrá-lo online (redes sociais, grupos)\n5. Qual é o principal gatilho que faz ele comprar?\n\nSeja bem específico e prático.",
    tools: ["ChatGPT Free", "Google Gemini Free", "Perplexity"],
    roi: "Usado em 50+ ações futuras = economiza horas",
    iconName: "Users"
  },
  {
    id: 2,
    title: "Plano de Mídia",
    subtitle: "Atração - Inbound",
    category: TipCategory.ATTRACTION_INBOUND,
    problem: "Devo postar quando? Em qual rede? Que tipo de conteúdo?",
    solution: "Cria calendário editorial completo de 30 dias com temas, formatos e horários.",
    promptTemplate: "Monte um calendário de conteúdo para 30 dias para [INSTAGRAM/LINKEDIN].\n\nMeu público alvo é [CLIENTE IDEAL].\nMeu objetivo é [OBJETIVO: ex: gerar leads].\n\nPara cada semana, crie:\n1. Tema do conteúdo\n2. Formato (texto, carrossel, vídeo)\n3. Melhor dia/hora para postar\n4. Título/Hook do post\n5. Objetivo daquele post\n\nSeja criativo mas prático.",
    tools: ["ChatGPT Free", "Make.com"],
    roi: "Economiza 2-3 horas/semana de planejamento",
    iconName: "Calendar"
  },
  {
    id: 3,
    title: "Anúncios (Ads)",
    subtitle: "Atração - Inbound",
    category: TipCategory.ATTRACTION_INBOUND,
    problem: "Meta Ads e Google Ads têm alta rejeição se a copy não é boa.",
    solution: "Cria variações de anúncios otimizados (Headlines, Descrição, CTA).",
    promptTemplate: "Crie 5 variações de anúncio para [FACEBOOK/GOOGLE ADS].\n\nProduto: Seguro de [TIPO]\nPúblico alvo: [CLIENTE IDEAL]\n\nÂngulo 1: Use gatilho de MEDO\nÂngulo 2: Use gatilho de ASPIRAÇÃO\nÂngulo 3: Use gatilho de PROVA SOCIAL\n\nPara cada anúncio, inclua:\n- Headline (máx 30 caracteres)\n- Descrição (máx 90 caracteres)\n- Call to action",
    tools: ["ChatGPT Free", "Gamma App"],
    roi: "Reduz tempo de criação em 80% + aumenta CTR em 2-3x",
    iconName: "Megaphone"
  },
  {
    id: 4,
    title: "Conteúdo Orgânico",
    subtitle: "Atração - Inbound",
    category: TipCategory.ATTRACTION_INBOUND,
    problem: "Como criar conteúdo útil sem levar horas?",
    solution: "Cria posts, carrosséis e scripts de vídeo completos em minutos.",
    promptTemplate: "Crie um post para [REDE SOCIAL] sobre:\n'[TEMA: ex: 3 erros ao escolher seguro de vida]'\n\nRequisitos:\n- Público alvo: [CLIENTE IDEAL]\n- Tom: [TOM DE VOZ]\n- Objetivo: [OBJETIVO]\n- Inclua: emoji, hook inicial, 3 pontos práticos, CTA",
    tools: ["ChatGPT Free", "Copy.ai"],
    roi: "Economiza 30-40 min/post + leads organicamente",
    iconName: "Feather"
  },
  {
    id: 5,
    title: "ICP B2B",
    subtitle: "Atração - Outbound",
    category: TipCategory.ATTRACTION_OUTBOUND,
    problem: "Quais empresas devo prospectar? Qual setor tem mais potencial?",
    solution: "Identifica tipos de empresa que mais precisam do seu produto e mapeia características.",
    promptTemplate: "Quero vender seguro [TIPO] para empresas em [SUA REGIÃO].\n\nMe crie lista de:\n1. Top 5 tipos de empresa que MAIS precisam desse seguro\n2. Para cada tipo, qual é o principal risco?\n3. Qual é o tamanho ideal (faturamento, funcionários)?\n4. Quem é o tomador de decisão (cargo)?\n5. Qual é o melhor argumento de venda para cada tipo?",
    tools: ["Perplexity Free", "LinkedIn Sales Nav"],
    roi: "Prospecção 5x mais eficiente",
    iconName: "Building2"
  },
  {
    id: 6,
    title: "Cadência de Mensagens",
    subtitle: "Atração - Outbound",
    category: TipCategory.ATTRACTION_OUTBOUND,
    problem: "Como abordar uma empresa que não me conhece? Ninguém responde.",
    solution: "Cria cadência de 4-5 toques (Email, LinkedIn, WhatsApp) personalizada.",
    promptTemplate: "Crie uma cadência de 4 toques para prospectar uma empresa [TIPO DE EMPRESA].\n\n1º Toque: LinkedIn (conexão)\n2º Toque: Email (valor)\n3º Toque: WhatsApp (urgência)\n4º Toque: Email (última tentativa)\n\nSegmento: [TIPO EMPRESA]\nProduto: Seguro [TIPO]\nÂngulo: [ANGULO DE VENDA]",
    tools: ["ChatGPT Free", "Make.com"],
    roi: "4-6x mais respostas + automação",
    iconName: "Send"
  },
  {
    id: 7,
    title: "Prospecção Inteligente",
    subtitle: "Atração - Outbound",
    category: TipCategory.ATTRACTION_OUTBOUND,
    problem: "Como não perder tempo com empresas erradas?",
    solution: "Busca informações públicas e analisa 'fit' da empresa.",
    promptTemplate: "Preciso de lista de empresas para prospectar seguro [TIPO] em [REGIÃO/BAIRRO].\n\nMe crie lista com:\n1. Empresa (nome real)\n2. Tipo (indústria)\n3. Tamanho aproximado\n4. Possível decisor\n5. Potencial fit (1-10)\n6. Argumento específico\n\nCritérios: Empresas médias.",
    tools: ["Perplexity Free", "Google Scholar"],
    roi: "5-10x mais leads qualificados",
    iconName: "Search"
  },
  {
    id: 8,
    title: "Automação de Renovações",
    subtitle: "Atração - Outbound",
    category: TipCategory.ATTRACTION_OUTBOUND,
    problem: "Clientes esquecem de renovar. Taxa cai por falta de follow-up.",
    solution: "Cria sequência automática de lembretes (60/30/15/7 dias).",
    promptTemplate: "Crie uma sequência automática de renovação para clientes de seguro [TIPO].\n\nCronograma:\n- 60 dias: Lembrete suave\n- 30 dias: Oferta especial\n- 15 dias: Urgência\n- 7 dias: Último aviso\n- 1 dia: Vencimento\n\nCrie mensagens para WhatsApp e Email com tons diferentes.",
    tools: ["Make.com Free", "Zapier"],
    roi: "+25% na receita de renovações",
    iconName: "RefreshCw"
  },
  {
    id: 9,
    title: "Automação de Atendimento",
    subtitle: "Conversão",
    category: TipCategory.CONVERSION,
    problem: "Lead que não recebe resposta em 2h tem 50% menos chance de comprar.",
    solution: "Cria script de chatbot para qualificação automática 24/7.",
    promptTemplate: "Crie script para um chatbot de WhatsApp que vai responder perguntas iniciais sobre seguro [TIPO].\n\nFluxo:\n1. Saudação\n2. Situação atual?\n3. Principal preocupação?\n4. Orçamento?\n5. Urgência?\n\nClassifique em Quente/Morno/Frio.",
    tools: ["Make.com", "ManyChat"],
    roi: "Economiza 2-3h/dia + 30% mais conversões",
    iconName: "Bot"
  },
  {
    id: 10,
    title: "Cotações Ágeis",
    subtitle: "Conversão",
    category: TipCategory.CONVERSION,
    problem: "Demoro 1h criando cotação. Cliente desiste esperando.",
    solution: "Analisa perfil e gera proposta personalizada em 2 minutos.",
    promptTemplate: "Você é um assistente expert. Cliente com perfil: [DADOS DO CLIENTE].\n\nTarefa:\n1. Identifique os 3 seguros TOP que ele precisa\n2. Recomende a cobertura ideal\n3. Explique POR QUE\n4. Crie email de proposta de valor em 3 pontos.",
    tools: ["ChatGPT Free", "Gamma App"],
    roi: "Economiza 57 min/cotação + 20% conversão",
    iconName: "Zap"
  },
  {
    id: 11,
    title: "Coach de Vendas (Objeções)",
    subtitle: "Conversão",
    category: TipCategory.CONVERSION,
    problem: "Não sei o que falar quando o cliente diz 'tá caro'.",
    solution: "IA atua como sparring partner para treinar objeções reais.",
    promptTemplate: "Você é um coach de vendas. Objeção do cliente: '[OBJEÇÃO, ex: Tá muito caro]'.\n\nCrie 3 versões de resposta:\n1. Consultiva (educacional)\n2. Emocional (impacto)\n3. Lógica (dados)\n\nUse técnica de empatia + perspectiva + pergunta.",
    tools: ["ChatGPT Free", "Claude"],
    roi: "+15-20% em taxa de conversão",
    iconName: "Award"
  },
  {
    id: 12,
    title: "Priorização & Plano",
    subtitle: "Bônus",
    category: TipCategory.BONUS,
    problem: "Por onde começo com tantas dicas?",
    solution: "Framework de Priorização (Impacto x Facilidade) e Plano de 90 dias.",
    promptTemplate: "Ajude-me a priorizar. Tenho essas 11 dicas. Minha situação atual é [SITUAÇÃO: ex: Tenho poucos leads]. Monte um plano de implementação para as próximas 4 semanas focando no maior impacto imediato.",
    tools: ["Framework Visual"],
    roi: "Clareza e execução imediata",
    iconName: "Target"
  }
];
