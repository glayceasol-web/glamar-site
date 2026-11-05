// =====================================================================
// GLAMAR — dados do site de vendas
// Reserva do site. Quando o Supabase responde (config.js + supabase-site-publico.sql),
// o plantel e as competições vêm direto do sistema de gestão e este arquivo
// só complementa com fotos em boa resolução, vídeos e textos.
// =====================================================================
window.GLAMAR = {
  whatsapp: "5531984125665",        // DDI + DDD + número, só dígitos
  instagram: "glamarjuatuba",         // usuário do Instagram, sem @
  email: "",                        // deixe vazio para não mostrar
  cidade: "Juatuba, Minas Gerais",

    // Plantel: só animais próprios e registrados (nada à venda por enquanto)
  cavalos: [
    {
      "id": "abccmm-0249987",
      "capa": "fotos/capa-bela-do-magnus.jpg",
      "nome": "Bela do Magnus",
      "raca": "Mangalarga Marchador",
      "sexo": "Fêmea",
      "nascimento": "2016-02-20",
      "pelagem": "Castanha",
      "registro": "ABCCMM 0249987",
      "modalidade": "Marcha",
      "pai": "Talento do Comboio",
      "mae": "Atriz J.V.C.D",
      "genealogia": {
        "p": "Talento do Comboio",
        "m": "Atriz J.V.C.D",
        "pp": "Trilho da Zizica",
        "pm": "Bela do Comboio",
        "mp": "Esporão HO",
        "mm": "Formosa Drumontana",
        "ppp": "Caruso J.D.",
        "ppm": "Gigi do Morro Grande",
        "pmm": "Lagoa Bonita Seresta",
        "mpp": "Junco do Café",
        "mpm": "Mágica de Sete Lagoas",
        "mmp": "Zurique HO",
        "mmm": "Hortência Forum"
      },
      "status": "plantel",
      "destaque": false,
      "fotos": [
        "fotos/bela-do-magnus.jpg"
      ],
      "video": "",
      "descricao": "Livro MM6 definitivo fechado fêmea. Criador: Sandro Magno Diniz."
    },
    {
      "id": "abccmm-377599",
      "capa": "fotos/capa-celebridade-repouso.jpg",
      "nome": "Celebridade Repouso",
      "raca": "Mangalarga Marchador",
      "sexo": "Fêmea",
      "nascimento": "2023-01-24",
      "pelagem": "Castanha pampa",
      "registro": "ABCCMM 377599",
      "modalidade": "Marcha",
      "pai": "Pecado da Sabe",
      "mae": "Dadiva FA do Jacuí",
      "genealogia": {
        "p": "Pecado da Sabe",
        "m": "Dadiva FA do Jacuí",
        "pp": "Jabuti da Mandassaia",
        "pm": "Itaqui Brahma",
        "mp": "Higino Capim Fino",
        "mm": "Luana do Giba",
        "ppp": "Radar de Anchieta",
        "ppm": "Astuta do Morro Queimado",
        "pmp": "Sabia da Lenda",
        "pmm": "Itaqui Suíça",
        "mpp": "Elo Kafé da Nova",
        "mpm": "Atitude das Laranjeiras",
        "mmp": "Poeta do Giba",
        "mmm": "Lais do Giba"
      },
      "status": "plantel",
      "destaque": false,
      "fotos": [
        "fotos/celebridade-repouso.jpg"
      ],
      "video": "fotos/celebridade-repouso.mp4",
      "descricao": "Livro MM2 provisório fêmea. Criador: Marcos de Freitas Lima."
    },
    {
      "id": "abccmm-0217076",
      "capa": "fotos/capa-elf-nobreza.jpg",
      "nome": "Elf Nobreza",
      "raca": "Mangalarga Marchador",
      "sexo": "Fêmea",
      "nascimento": "2020-09-01",
      "pelagem": "Pampa de castanha",
      "registro": "ABCCMM 0217076",
      "modalidade": "Marcha",
      "pai": "Elf Hollywood",
      "mae": "Elf Única",
      "genealogia": {
        "p": "Elf Hollywood",
        "m": "Elf Única"
      },
      "status": "plantel",
      "destaque": false,
      "fotos": [
        "fotos/elf-nobreza.jpg"
      ],
      "video": "",
      "descricao": "Livro MM6 definitivo fechado fêmea. Criador: Leonor Carnevalli Lambertucci."
    },
    {
      "id": "abccmm-0249860",
      "capa": "fotos/capa-gameleira-do-silvado.jpg",
      "nome": "Gameleira do Silvado",
      "raca": "Mangalarga Marchador",
      "sexo": "Fêmea",
      "nascimento": "2021-12-29",
      "pelagem": "Pampa de baia",
      "registro": "ABCCMM 0249860",
      "modalidade": "Marcha",
      "pai": "Tarô Bavária",
      "mae": "Jamaica Caxambuense",
      "genealogia": {
        "p": "Tarô Bavária",
        "m": "Jamaica Caxambuense",
        "pp": "Galante do Expoente",
        "pm": "Igara Toulon",
        "mp": "Delete Caxambuense",
        "mm": "Sandy Caxambuense",
        "ppp": "Trilho da Zizica",
        "ppm": "Única Kafé",
        "pmp": "Tarot Kafé",
        "pmm": "Predileta do Paranapanema",
        "mpp": "Comboio do Expoente",
        "mpm": "Zita Caxambuense",
        "mmp": "Beijo J.B.",
        "mmm": "Sonata Caxambuense"
      },
      "status": "plantel",
      "destaque": false,
      "fotos": [
        "fotos/gameleira-do-silvado.jpg"
      ],
      "video": "fotos/gameleira-do-silvado.mp4",
      "descricao": "Mãe da Athena Glamar. Livro MM6 definitivo fechado fêmea. Criador: Agro-Pecuária Barra Seca Ltda."
    },
    {
      "id": "abccmm-0249580",
      "capa": "fotos/capa-isla-pbr-perfil.jpg",
      "nome": "Isla P.B.R.",
      "raca": "Mangalarga Marchador",
      "sexo": "Fêmea",
      "nascimento": "2022-10-02",
      "pelagem": "Tordilha",
      "registro": "ABCCMM 0249580",
      "modalidade": "Marcha",
      "pai": "Galante do Expoente",
      "mae": "Fogueira da Diesel",
      "genealogia": {
        "p": "Galante do Expoente",
        "m": "Fogueira da Diesel",
        "pp": "Trilho da Zizica",
        "pm": "Única Kafé",
        "mp": "Capricho Koronus",
        "mm": "Aurora D.3",
        "ppp": "Caruso J.D.",
        "ppm": "Gigi do Morro Grande",
        "pmp": "Palhaço de Ituverava",
        "pmm": "Garota Kafé",
        "mpp": "Abrigo D2",
        "mpm": "Java D2",
        "mmm": "Brenda AJP"
      },
      "status": "plantel",
      "destaque": false,
      "fotos": [
        "fotos/isla-pbr-perfil.jpg",
        "fotos/isla-pbr-cabeca.jpg"
      ],
      "video": "",
      "descricao": "Livro MM6 definitivo fechado fêmea. Criador: João Paulo Rezende dos Santos."
    },
    {
      "id": "abccmm-0248320",
      "capa": "fotos/capa-mione-4lg.jpg",
      "nome": "Mione 4LG",
      "raca": "Mangalarga Marchador",
      "sexo": "Fêmea",
      "nascimento": "2022-03-17",
      "pelagem": "Preta pampa",
      "registro": "ABCCMM 0248320",
      "modalidade": "Marcha",
      "pai": "Feitiço Caxambuense",
      "mae": "Gostosa PCA",
      "genealogia": {
        "p": "Feitiço Caxambuense",
        "m": "Gostosa PCA",
        "pp": "Argos das Minas Gerais",
        "pm": "Xangrilá Caxambuense",
        "mp": "Jato Isa do Berro D'Água",
        "mm": "Luz Isa do Berro D'Água",
        "ppp": "Damasco da Ogar",
        "ppm": "Dançarina da Gamboa",
        "pmp": "Ara Sabiá",
        "pmm": "Princesa do J.Granado",
        "mpp": "Lótus da Catimba",
        "mpm": "Sumaya CF da Sercore",
        "mmp": "Raybam da Santa Esmeralda",
        "mmm": "Quina da Santa Esmeralda"
      },
      "status": "plantel",
      "destaque": false,
      "fotos": [
        "fotos/mione-4lg.jpg"
      ],
      "video": "",
      "descricao": "Livro MM6 definitivo fechado fêmea. Criador: José Roberto Herrerias."
    },
    {
      "id": "abqm-M285036",
      "capa": "fotos/capa-crystal-doc-gim.jpg",
      "nome": "Crystal Doc Gim",
      "raca": "Quarto de Milha (mestiço 1/2)",
      "sexo": "Fêmea",
      "nascimento": "2020-01-26",
      "pelagem": "Palomino",
      "registro": "ABQM M285036",
      "modalidade": "",
      "pai": "Cardenal GIM",
      "mae": "Luna",
      "genealogia": {
        "p": "Cardenal GIM",
        "m": "Luna"
      },
      "status": "plantel",
      "destaque": false,
      "fotos": [
        "fotos/crystal-doc-gim.jpg"
      ],
      "video": "",
      "descricao": "Livro Mestiço 1/2 (ABQM). Criador: Bruno Allan Gomes Ferreira."
    }
  ],

  // Competições (reserva; normalmente vêm do sistema de gestão)
  competicoes: [],

  // Produtos da reprodução (potros nascidos na GLAMAR)
  produtos: [
    {
      "id": "abccmm-athena-1118596",
      "nome": "Athena Glamar",
      "raca": "Mangalarga Marchador",
      "sexo": "Fêmea",
      "nascimento": "2026-09-06",
      "pelagem": "Pampa de perlino",
      "registro": "Pais registrados na ABCCMM",
      "modalidade": "Marcha",
      "pai": "Dinâmico do Zel",
      "mae": "Gameleira do Silvado",
      "genealogia": {
        "p": "Dinâmico do Zel",
        "m": "Gameleira do Silvado",
        "pp": "Galante do Expoente",
        "pm": "C. Coreia do Édem",
        "mp": "Tarô Bavária",
        "mm": "Jamaica Caxambuense",
        "ppp": "Trilho da Zizica",
        "ppm": "Única Kafé",
        "pmp": "Fator da Cavarú-Retã",
        "pmm": "Locomotiva da Certeza",
        "mpp": "Galante do Expoente",
        "mpm": "Igara Toulon",
        "mmp": "Delete Caxambuense",
        "mmm": "Sandy Caxambuense"
      },
      "fotos": [
        "fotos/athena-glamar.jpg"
      ],
      "capa": "fotos/capa-athena-glamar.jpg",
      "video": "",
      "descricao": "Reprodução própria GLAMAR: primeira potra nascida aqui.",
        "filiacao": "Filha de Dinâmico do Zel (ABCCMM 061905) com Gameleira do Silvado (ABCCMM 0249860). Pelo lado do pai, Athena é bisneta de Fator da Cavarú-Retã, renomado garanhão da raça: Fator é o pai de C. Coreia do Édem, mãe do Dinâmico. Galante do Expoente também aparece dos dois lados, como avô paterno e bisavô materno.",
        "destaquesGenealogia": ["Fator da Cavarú-Retã", "Galante do Expoente"],
        "fotoDestaque": [{"src": "fotos/athena-olhos.jpg?v=5", "legenda": "Athena de frente"}, {"src": "fotos/athena-olho-azul.jpg?v=2", "legenda": "Os olhos azuis, típicos da dose dupla do gene creme"}],
        "curiosidade": "Athena é uma pampa de perlino, uma pelagem rara. O pai (alazão amarilho) e a mãe (pampa de baia) carregam, cada um, uma cópia do gene creme, que clareia a pelagem. Athena herdou as duas cópias: é homozigota para o gene creme. Com essa dose dupla, o pelo fica cor de creme, a pele fica rosada e os olhos ficam claros. Embora os pais sejam registrados, por causa dessa dupla diluição ela não atende às normas de pelagem da Associação Brasileira dos Criadores do Cavalo Mangalarga Marchador (ABCCMM).",
        "reproducao": {"intro": "Como tem duas cópias do gene creme, Athena passa uma cópia para todos os potros. Nenhum filho dela nasce sem diluição. O resultado depende do garanhão:", "itens": ["Garanhão sem o gene creme: todos os potros com uma cópia, ou seja, amarilhos (base alazã), baios (base castanha) ou pretos fumaça (base preta), conforme a cor do garanhão.", "Garanhão com uma cópia (amarilho ou baio): metade dos potros com uma cópia (amarilho ou baio) e metade com dose dupla, como ela.", "Garanhão com dose dupla: todos os potros com dose dupla.", "O padrão pampa também pode passar para parte dos potros."]}
    }
  ],

  // Embriões ofertados (vazio = não mostra)
  embrioes: []
};
