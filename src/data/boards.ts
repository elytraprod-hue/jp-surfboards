export interface Board {
  id: string;
  number: string;
  name: string;
  category: string;
  slug: string;
  description: string;
  waveType: string;
  level: string;
  sizes: string;
  volume: string;
  fins: string;
  tail: string;
  rocker: string;
  tags: string[];
  coordinates: string;
  mainImage: string;
  thumbImage: string;
  whatsappMessage: string;
  bgWord: string;
}

export const boards: Board[] = [
  {
    id: "performance",
    number: "01",
    name: "Double Viper",
    category: "Performance",
    slug: "performance",
    description: "Shape afiado para ondas velozes e manobras radicais. Rocker acelerado, rails precisos e resposta imediata a cada footwork. Desenvolvida para quem exige controle total e velocidade crítica na parede da onda.",
    waveType: "Médias a Grandes",
    level: "Intermediário / Avançado",
    sizes: "5'8\" — 6'4\"",
    volume: "26 — 36 L",
    fins: "Tri-fin (FCS II)",
    tail: "Swallow / Crescent",
    rocker: "Acelerado",
    tags: ["Médias a Grandes", "Intermediário", "Avançado", "Manobra Radical"],
    coordinates: "27°14'S / 48°33'W",
    mainImage: "/boards/webp/performance.webp",
    thumbImage: "/boards/thumbs/performance.webp",
    whatsappMessage: "Olá, tenho interesse no modelo Performance (Double Viper) da JP Surf Boards.",
    bgWord: "PERF"
  },
  {
    id: "fish",
    number: "02",
    name: "Dark Rabbit",
    category: "Fish",
    slug: "fish",
    description: "Velocidade explosiva e diversão garantida em ondas pequenas a médias. Outline clássico alargado, rocker flat e drive natural abundante. Uma prancha que voa nas seções gordas onde outras param.",
    waveType: "Pequenas a Médias",
    level: "Intermediário",
    sizes: "5'4\" — 6'0\"",
    volume: "32 — 42 L",
    fins: "Twin / Quad",
    tail: "Fish / Swallow",
    rocker: "Flat / Baixo",
    tags: ["Pequenas a Médias", "Intermediário", "Velocidade", "Flow"],
    coordinates: "27°14'S / 48°33'W",
    mainImage: "/boards/webp/fish.webp",
    thumbImage: "/boards/thumbs/fish.webp",
    whatsappMessage: "Olá, tenho interesse no modelo Fish (Dark Rabbit) da JP Surf Boards.",
    bgWord: "FISH"
  },
  {
    id: "funboard",
    number: "03",
    name: "Wasabi",
    category: "Funboard",
    slug: "funboard",
    description: "Versatilidade total e estabilidade para evolução contínua no surf. Combina o paddle fácil de um longboard com a vivacidade de uma prancha menor. Ideal para quem quer progredir sem perder a diversão.",
    waveType: "Ondas Variadas",
    level: "Iniciante Avançado / Intermediário",
    sizes: "6'6\" — 7'6\"",
    volume: "45 — 65 L",
    fins: "Tri-fin (FCS II)",
    tail: "Round / Squash",
    rocker: "Suave / Médio",
    tags: ["Ondas Variadas", "Iniciante Avan.", "Progressão"],
    coordinates: "27°14'S / 48°33'W",
    mainImage: "/boards/webp/funboard.webp",
    thumbImage: "/boards/thumbs/funboard.webp",
    whatsappMessage: "Olá, tenho interesse no modelo Funboard (Wasabi) da JP Surf Boards.",
    bgWord: "FUN"
  },
  {
    id: "longboard",
    number: "04",
    name: "Skeletton Bird",
    category: "Longboard",
    slug: "longboard",
    description: "Gliding suave, noseriding clássico e estilo atemporal sobre as ondas. Desenvolvida para conexão pura com o mar, oferecendo estabilidade impecável na caminhada até o bico e curvas suaves com muito trim.",
    waveType: "Suaves a Médias",
    level: "Todos os Níveis",
    sizes: "9'0\" — 9'6\"",
    volume: "70 — 90 L",
    fins: "Single Fin + Side Bites",
    tail: "Round / Pintail",
    rocker: "Clássico / Suave",
    tags: ["Suaves a Médias", "Todos os Níveis", "Noseriding", "Estilo Clássico"],
    coordinates: "27°14'S / 48°33'W",
    mainImage: "/boards/webp/longboard.webp",
    thumbImage: "/boards/thumbs/longboard.webp",
    whatsappMessage: "Olá, tenho interesse no modelo Longboard (Skeletton Bird) da JP Surf Boards.",
    bgWord: "LONG"
  },
  {
    id: "step-up",
    number: "05",
    name: "Black Buffalo",
    category: "Step Up",
    slug: "step-up",
    description: "Desenvolvida para quando o mar sobe de verdade e a intensidade aumenta. Entrada segura nas ondas grandes, excelente controle em velocidades elevadas e fixação nas partes mais críticas da parede.",
    waveType: "Grandes e Pesadas",
    level: "Avançado",
    sizes: "6'4\" — 7'0\"",
    volume: "34 — 45 L",
    fins: "Tri-fin / Quad (FCS II)",
    tail: "Pin / Round Pin",
    rocker: "Acentuado",
    tags: ["Grandes e Pesadas", "Avançado", "Potência / Controle"],
    coordinates: "27°14'S / 48°33'W",
    mainImage: "/boards/webp/step-up.webp",
    thumbImage: "/boards/thumbs/step-up.webp",
    whatsappMessage: "Olá, tenho interesse no modelo Step Up (Black Buffalo) da JP Surf Boards.",
    bgWord: "STEP"
  },
  {
    id: "custom",
    number: "06",
    name: "Phantom Shark",
    category: "Heavy Water",
    slug: "custom",
    description: "Sessões extremas exigem pranchas sob medida. Uma gun de alta performance esculpida para ondas massivas, tubos profundos e descidas críticas em condições onde o equipamento não pode falhar.",
    waveType: "Grandes e Perigosas",
    level: "Avançado / Expert",
    sizes: "7'0\" — 8'0\"",
    volume: "42 — 58 L",
    fins: "Tri-fin (FCS II / Futures)",
    tail: "Pin Tail",
    rocker: "Extremo",
    tags: ["Grandes e Perigosas", "Expert", "Gun", "Tubo"],
    coordinates: "27°14'S / 48°33'W",
    mainImage: "/boards/webp/custom.webp",
    thumbImage: "/boards/thumbs/custom.webp",
    whatsappMessage: "Olá, tenho interesse no modelo Heavy Water (Phantom Shark) da JP Surf Boards.",
    bgWord: "GUN"
  }
];
