import type { Locale } from "./en-US";

/** Português (Brasil) */
export const ptBR: Locale = {
  langName: "Português (Brasil)",
  nav: {
    features: "Recursos",
    install: "Instalar",
    privacy: "Privacidade",
    download: "Baixar",
    github: "GitHub",
    languageLabel: "Idioma",
    sectionsLabel: "Seções",
    skipToContent: "Pular para o conteúdo",
  },
  hero: {
    titleA: "Você dá o objetivo.",
    titleB: "Ele roda nas abas.",
    sub: "Um agente de IA que dirige seu navegador de verdade — suas abas, suas sessões, suas contas logadas — com qualquer provedor que você escolher. Descreva uma tarefa no painel lateral; o TabRunner lê páginas, clica, digita e navega até o trabalho estar pronto.",
    ctaPrimary: "Baixar para Chromium",
    ctaFor: "Baixar para {{browser}}",
    ctaUnsupported:
      "O TabRunner roda em navegadores com base Chrome no desktop — abra esta página no Chrome, Brave, Edge, Arc, Opera ou Vivaldi para baixar.",
    ctaSecondary: "Como instalar",
    missionLabel: "Descreva uma tarefa",
    missionGo: "Lançar",
    placeholders: [
      "Tire a nota fiscal do meu e-mail para o relatório de despesas…",
      "Preencha o formulário de visto com os dados da minha reserva…",
      "Copie os números da semana do painel de analytics para a planilha…",
      "Ache meu código de rastreio e cole no formulário da transportadora…",
    ],
    demoHint:
      "Lance uma — isso solta um cometa no céu, e nada mais. A execução de verdade precisa da extensão.",
    demoLaunched:
      "Aquele cometa é a ideia em miniatura. Instalado, ele roda a tarefa no seu navegador de verdade.",
    browsersLabel: "Roda no",
    chromiumNote:
      "Só Chromium. Firefox e Safari não têm a API de entrada confiável, então eles ganham uma explicação, não um botão morto.",
  },
  run: {
    demoBadge: "demonstração simulada",
    taskLabel: "Tarefa",
    task: "Tirar a nota fiscal mais recente do e-mail para o relatório de despesas",
    planning: "Planejando…",
    planTitle: "Plano",
    plan: [
      "Abrir a caixa de entrada",
      "Encontrar a nota fiscal mais recente",
      "Abrir o relatório de despesas",
      "Anexar e preencher os campos",
    ],
    tools: [
      { tool: "navigate", detail: "caixa de entrada do webmail" },
      { tool: "click", detail: 'ref=e21 "nota-fiscal.pdf"' },
      { tool: "snapshot", detail: "formulário de despesas, 6 campos" },
    ],
    composing: "Preenchendo o relatório de despesas…",
    done: "Pronto — relatório de despesas pronto para revisão",
    elapsed: "decorrido",
    tokens: "tokens",
    stopNote: "Esc para qualquer execução de verdade — inclusive esta, se fosse real.",
  },
  features: {
    title: "Seu navegador é a vantagem",
    sub: "A maioria dos agentes de navegador roda num navegador isolado e deslogado. O TabRunner roda no seu — então ele age nos sites em que você está logado de verdade.",
    providersMore: "+ qualquer endpoint compatível com OpenAI/Anthropic",
    items: [
      {
        title: "Traga seu provedor",
        body: "15 predefinições entre os 12 provedores abaixo: entre com a assinatura da Anthropic, OpenAI ou Kimi que você já paga, ou cole uma chave de API — mais qualquer endpoint compatível com o formato OpenAI ou Anthropic. Sem lock-in, sem intermediário.",
      },
      {
        title: "Entrada confiável de verdade",
        body: "Cliques e teclas passam pelo Chrome DevTools Protocol — eventos confiáveis genuínos, não dispatches sintéticos de JS que telas de login e de pagamento ignoram.",
      },
      {
        title: "Vê a página, não o HTML",
        body: "O modelo lê uma árvore de acessibilidade compacta, nunca o HTML bruto — prompts pequenos, refs estáveis, e senhas ou números de cartão que nunca saem da página.",
      },
      {
        title: "Guarda-corpos que aguentam",
        body: "Ações consequentes — pagar, enviar, apagar — pedem sua confirmação antes. Retentativas absorvem falhas do provedor, um limite de passos contém descontrole, e o Parar realmente para.",
      },
      {
        title: "Dirigível via MCP",
        body: "Claude Code, Claude Desktop ou qualquer cliente MCP pode entregar uma tarefa ao TabRunner e acompanhá-la até a resposta — mesmo navegador, mesmos logins, etiquetado no seu histórico.",
      },
      {
        title: "Sem servidor. Nenhum.",
        body: "Sua chave vai direto da extensão para o seu provedor. Configurações e histórico ficam no chrome.storage do seu dispositivo. Sem conta, sem telemetria, nada para vazar.",
      },
    ],
  },
  route: {
    title: "Caminho do sinal — uma tarefa, de ponta a ponta",
    you: "você",
    or: "ou",
    mcp: "um cliente MCP",
    extension: "tabrunner",
    provider: "seu provedor",
    gate: "guarda-corpos",
    page: "a página",
    relay: "um servidor de retransmissão",
    legAsk: "o pedido / o plano",
    legAct: "entrada confiável / a página como refs",
  },
  shots: {
    title: "O painel é o produto",
    sub: "Não é uma tomada do navegador — é um painel lateral que trabalha junto com a página em que você está.",
    captions: [
      "O painel lateral, antes de uma tarefa",
      "No meio da execução: o plano, os passos, a página",
      "Provedores: predefinições ou qualquer endpoint compatível",
      "Outro chat, respondendo no seu idioma",
    ],
    note: "Capturas do build atual — geradas automaticamente, então nunca ficam para trás de um redesign.",
  },
  install: {
    title: "O plano de voo",
    sub: "Dois minutos, três passos, sem conta. Até a listagem da Chrome Web Store sair da revisão, este é o caminho de entrada.",
    crxBadge: "recomendado",
    crxTitle: "Instale o CRX assinado",
    steps: [
      "Baixe o .crx — sempre a build mais recente; este link nunca muda.",
      "Abra chrome://extensions e ative o Modo de desenvolvedor (canto superior direito).",
      "Arraste o .crx para essa página e confirme, depois clique no cometa na sua barra de ferramentas.",
    ],
    downloadCrx: "Baixar",
    caveatsTitle: "Dito com clareza",
    caveats: [
      'O Chrome vai dizer que a extensão "não é da Chrome Web Store" — esperado para um CRX autoassinado.',
      "Sem atualização automática: versões novas são um novo download pelo mesmo link (é por isso que ele nunca muda).",
      "Quando a versão da loja sair, ela instala como uma extensão separada (chave de assinatura diferente) — remova a sideloaded depois de migrar; as configurações não migram.",
    ],
    zipTitle: "Prefere o zip?",
    zipSteps:
      "Baixe e descompacte, depois chrome://extensions → Modo de desenvolvedor → Carregar sem compactação → selecione a pasta descompactada.",
    downloadZip: "Baixar ZIP",
    releaseNotes: "Notas de versão",
    storeNote:
      "A listagem da Chrome Web Store está em revisão — a instalação em um clique chega aqui quando for aprovada.",
  },
  privacy: {
    title: "Sem estação terrestre",
    sub: "Um agente que dirige seu navegador logado precisa responder primeiro à pergunta sobre dados. Aqui está a resposta.",
    points: [
      "Os dados vão para exatamente dois lugares: o site em que o agente está trabalhando e o provedor de IA que você configurou.",
      "Não existe servidor do TabRunner, nem conta, nem analytics, nem chamadas a terceiros.",
      "Configurações de provedor e histórico de conversas ficam no chrome.storage, no seu dispositivo.",
    ],
    diagramBrowser: "Seu navegador",
    diagramProvider: "Seu provedor de IA",
    diagramSites: "Os sites que você usa",
    diagramKeyFlow: "chave de API ou login — direto",
    diagramTaskFlow: "cliques e teclas",
    diagramServer: "servidor TabRunner",
    diagramServerNone: "não existe",
    link: "Leia a política de privacidade completa",
  },
  footer: {
    tagline: "Você dá o objetivo. Ele roda nas abas.",
    chromium: "Só Chromium — Chrome, Brave, Edge, Arc, Opera, Vivaldi.",
    license: "Código aberto, licença MIT.",
    productHeading: "Produto",
    projectHeading: "Projeto",
    download: "Baixar",
    storeSoon: "Chrome Web Store — em revisão",
    issues: "Problemas",
    privacyLink: "Política de privacidade",
    termsLink: "Termos de uso",
    mcpDocs: "Docs do MCP",
  },
};
