export const clinica = {
  nome: 'Sorriso Lumière',
  telefone: '(11) 3062-4418',
  whatsapp: '(11) 98734-2160',
  whatsappLink: 'https://wa.me/5511987342160',
  email: 'contato@sorrisolumiere.com.br',
  instagram: '@sorrisolumiere',
  horario: 'Seg. a sex. 8h–19h · Sáb. 8h–13h',
  enderecoLinha1: 'Rua Haddock Lobo, 1.250, Conj. 42',
  enderecoLinha2: 'Cerqueira César · São Paulo/SP · 01414-002',
  convenios: ['Amil Dental', 'OdontoPrev', 'Bradesco Dental', 'SulAmérica Odonto'],
  responsavel: 'Dra. Camila Andrade · CRO-SP 98.214',
  cnpj: '00.000.000/0001-00',
}

export const menu = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Antes e depois', href: '#antes-e-depois' },
  { label: 'Depoimentos', href: '#depoimentos' },
]

export const numeros = [
  { valor: 15, sufixo: '+', legenda: ['anos de', 'experiência'] },
  { valor: 8000, sufixo: '+', legenda: ['sorrisos', 'transformados'] },
  { valor: 98, sufixo: '%', legenda: ['indicariam para', 'amigos e família'] },
]

export const diferenciais = [
  {
    titulo: 'Sem dor, sem medo',
    texto: 'Anestesia computadorizada e opção de sedação consciente para quem tem ansiedade.',
  },
  {
    titulo: 'Prévia do resultado',
    texto: 'Escaneamento 3D e simulação digital: você aprova o sorriso antes de começar.',
  },
  {
    titulo: 'Preço transparente',
    texto: 'Orçamento detalhado por escrito, sem surpresas, com parcelamento em até 18x.',
  },
  {
    titulo: 'Especialistas dedicados',
    texto: 'Cada área com seu especialista, com pós-graduação e atualização constante.',
  },
]

export const tratamentos = [
  {
    titulo: 'Lentes de contato dental',
    texto:
      'Facetas ultrafinas de porcelana que corrigem cor, formato e pequenos desalinhamentos, com mínimo ou nenhum desgaste.',
    detalhe: '2 a 3 sessões · Durabilidade de 15+ anos',
    imagem: '/img/lentes.jpg',
    alt: 'Dentes após aplicação de lentes de contato',
    destaque: true,
    descricao:
      'As lentes de contato dental são lâminas de porcelana com cerca de 0,3 mm, cimentadas sobre a frente dos dentes. Elas mudam cor, formato e tamanho de forma natural, com brilho e translucidez parecidos com os do esmalte.',
    indicado: ['Dentes manchados que não clareiam', 'Espaços entre os dentes', 'Dentes pequenos, desgastados ou desalinhados'],
    sessoes: '2 a 3 sessões',
    duracao: '15 anos ou mais',
    etapas: ['Avaliação e escaneamento 3D', 'Prova do ensaio (mock-up)', 'Cimentação das lentes'],
  },
  {
    titulo: 'Clareamento dental',
    detalhe: 'Até 8 tons mais claro · consultório + caseiro',
    imagem: '/img/clareamento.jpg',
    alt: 'Dentista preparando clareamento',
    descricao:
      'Combinamos o clareamento a laser no consultório com o clareamento caseiro com moldeira sob medida, para um resultado mais rápido, uniforme e com menos sensibilidade.',
    indicado: ['Dentes amarelados pelo tempo', 'Manchas de café, vinho ou cigarro', 'Quem vai fazer lentes e quer ajustar a cor'],
    sessoes: '1 a 2 sessões + 2 semanas em casa',
    duracao: '1 a 3 anos, com manutenção',
    etapas: ['Limpeza e avaliação da cor', 'Sessão a laser no consultório', 'Moldeira para uso em casa'],
  },
  {
    titulo: 'Implantes dentários',
    detalhe: 'Cirurgia guiada por tomografia 3D',
    imagem: '/img/implantes.jpg',
    alt: 'Especialista analisando tomografia para implante',
    descricao:
      'O implante é um pino de titânio que substitui a raiz do dente perdido. Com a cirurgia guiada, o planejamento é feito no computador antes do procedimento, que fica mais rápido, preciso e confortável.',
    indicado: ['Perda de um ou mais dentes', 'Quem usa prótese móvel e quer fixar', 'Dentes com fratura sem recuperação'],
    sessoes: 'Cirurgia em 1 sessão + coroa após 3 a 6 meses',
    duracao: 'Pode durar a vida toda',
    etapas: ['Tomografia e planejamento 3D', 'Cirurgia guiada com sedação opcional', 'Instalação da coroa definitiva'],
  },
  {
    titulo: 'Alinhadores invisíveis',
    detalhe: 'Dentes alinhados sem bráquetes aparentes',
    imagem: '/img/alinhadores.jpg',
    alt: 'Paciente colocando alinhador transparente',
    descricao:
      'Placas transparentes feitas sob medida que movimentam os dentes aos poucos. São removíveis, quase imperceptíveis e você vê a simulação do resultado final antes de começar.',
    indicado: ['Dentes tortos ou apinhados', 'Espaços entre os dentes', 'Quem já usou aparelho e os dentes voltaram'],
    sessoes: 'Consultas a cada 6 a 8 semanas',
    duracao: '6 a 18 meses de tratamento',
    etapas: ['Escaneamento e simulação digital', 'Entrega dos alinhadores', 'Acompanhamento e contenção'],
  },
  {
    titulo: 'Prevenção e limpeza',
    detalhe: 'Check-up, profilaxia e manutenção anual',
    imagem: '/img/prevencao.jpg',
    alt: 'Escovas de dente de bambu',
    descricao:
      'A base de todo sorriso bonito é a saúde. No check-up fazemos limpeza profissional, remoção de tártaro, aplicação de flúor e orientações de higiene para você e sua família.',
    indicado: ['Todas as idades, a cada 6 meses', 'Sangramento ou sensibilidade na gengiva', 'Quem fez lentes, implantes ou alinhadores'],
    sessoes: '1 sessão de 40 minutos',
    duracao: 'Retorno a cada 6 meses',
    etapas: ['Exame clínico completo', 'Limpeza e remoção de tártaro', 'Plano de cuidados personalizado'],
  },
]

export const passos = [
  { titulo: 'Avaliação gratuita', texto: 'Conversa sobre o que você deseja e exame clínico completo.' },
  { titulo: 'Escaneamento 3D', texto: 'Sem moldagem com massa: um scanner capta sua boca em minutos.' },
  { titulo: 'Prévia do novo sorriso', texto: 'Você vê a simulação, ajusta o que quiser e recebe o orçamento detalhado.' },
  { titulo: 'Tratamento e acompanhamento', texto: 'Sessões agendadas no seu ritmo e retorno de revisão incluso.' },
]

export const especialistas = [
  {
    nome: 'Dra. Camila Andrade',
    area: 'Estética dental e lentes · CRO-SP 98.214',
    destaque: '16 anos de experiência',
    foto: '/img/dra-camila.jpg',
  },
  {
    nome: 'Dr. Rafael Moretti',
    area: 'Implantodontia · CRO-SP 112.507',
    destaque: '+1.500 implantes realizados',
    foto: '/img/dr-rafael.jpg',
  },
  {
    nome: 'Dra. Juliana Prado',
    area: 'Ortodontia e alinhadores · CRO-SP 87.936',
    destaque: 'Certificada em alinhadores invisíveis',
    foto: '/img/dra-juliana.jpg',
    posicao: 'center',
  },
]

export const depoimentos = [
  {
    texto:
      '“Eu escondia o sorriso nas fotos. Depois das lentes com a Dra. Camila, é a primeira coisa que as pessoas elogiam. Atendimento impecável.”',
    nome: 'Mariana Souza',
    detalhe: 'Lentes de contato · Pinheiros',
    foto: '/img/paciente-mariana.jpg',
  },
  {
    texto:
      '“Tinha pavor de dentista. Fiz dois implantes com sedação e não senti nada. Hoje mastigo e sorrio sem pensar nisso.”',
    nome: 'Carlos Eduardo Lima',
    detalhe: 'Implantes · Jardim Paulista',
    foto: '/img/paciente-carlos.jpg',
  },
  {
    texto:
      '“Usei alinhadores por 10 meses e ninguém no trabalho percebeu. A Dra. Juliana acompanhou tudo pelo WhatsApp.”',
    nome: 'Patrícia Lopes',
    detalhe: 'Alinhadores · Vila Mariana',
    foto: '/img/paciente-patricia.jpg',
  },
  {
    texto:
      '“Fiz clareamento antes do meu casamento e o resultado ficou natural, sem aquele branco artificial. Recomendo de olhos fechados.”',
    nome: 'Fernanda Ribeiro',
    detalhe: 'Clareamento · Moema',
  },
  {
    texto:
      '“Levo meus dois filhos desde pequenos. A equipe tem uma paciência enorme e eles saem da consulta pedindo para voltar.”',
    nome: 'Renato Alves',
    detalhe: 'Odontopediatria · Perdizes',
  },
  {
    texto:
      '“Cheguei com dor num sábado de manhã e fui atendido na hora. Tratamento de canal sem dor e explicado passo a passo.”',
    nome: 'Lucas Martins',
    detalhe: 'Urgência e canal · Consolação',
  },
  {
    texto:
      '“O planejamento digital fez toda a diferença: vi como ficaria o sorriso antes de começar e o resultado ficou idêntico.”',
    nome: 'Beatriz Nogueira',
    detalhe: 'Lentes de contato · Itaim Bibi',
  },
  {
    texto:
      '“Atendimento pontual, clínica impecável e preço transparente desde a primeira consulta. Finalmente encontrei meu dentista.”',
    nome: 'Rodrigo Campos',
    detalhe: 'Limpeza e prevenção · Bela Vista',
  },
]

export const duvidas = [
  {
    pergunta: 'Lente de contato dental dói?',
    resposta:
      'Não. Na maioria dos casos não há desgaste ou ele é mínimo, feito com anestesia. A maioria dos pacientes relata apenas uma leve sensibilidade nos primeiros dias.',
  },
  {
    pergunta: 'Quanto tempo duram as lentes?',
    resposta:
      'Lentes de porcelana bem cuidadas duram em média 15 anos ou mais. Fazemos revisões periódicas incluídas no tratamento.',
  },
  {
    pergunta: 'Quantas sessões são necessárias?',
    resposta:
      'Normalmente de 2 a 3 sessões: avaliação e escaneamento, prova do ensaio (mock-up) e cimentação definitiva.',
  },
  {
    pergunta: 'A avaliação é realmente gratuita?',
    resposta:
      'Sim. A primeira consulta inclui exame clínico, escaneamento 3D e prévia digital do sorriso, sem custo e sem compromisso.',
  },
  {
    pergunta: 'Vocês parcelam o tratamento?',
    resposta:
      'Sim, em até 18x no cartão ou com condições especiais no Pix. Também atendemos Amil Dental, OdontoPrev, Bradesco Dental e SulAmérica Odonto.',
  },
]
