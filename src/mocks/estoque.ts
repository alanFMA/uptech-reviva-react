interface IProdutoImagem {
  url: string;
  descricao: string;
}

export interface IProduto {
  id: number;
  nome: string;
  url: string;
  preco: number;
  descricao: string;
  tamanhos_disponiveis: string[] //Array<string>
  quantidade_disponivel: number;
  imagens: IProdutoImagem[];
  categoria: string;
}

export interface ICarrinhoProduto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  imagem: IProdutoImagem[];
}


export const produtosInitial: IProduto[] = [
  {
    id: 1,
    nome: "Calça Black Jeans Feminina Skinny Preto",
    url: "calca-black",
    preco: 55.9,
    descricao: "Uma calça muito confortável e com um design moderno",
    tamanhos_disponiveis: ["P", "M", "G"],
    quantidade_disponivel: 12,
    categoria: "lancamentos",
    imagens: [
      {
        url: "https://static.riachuelo.com.br/RCHLO/13776541005/portrait/8388d930f7a0ad0df4cafcb55355ac1ccc72d06a.jpg",
        descricao: "Calçã Black",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/13776541005/portrait/b923e81e5fdd174a1ef2a331ea550e61e6e1a826.jpg",
        descricao: "Calçã Black",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/13776541005/portrait/b09be076feec0d04aac1abd5e023dd6a2a8d7bac.jpg",
        descricao: "Calçã Black",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/13776541005/portrait/da6229a8a90d1da92119908fb0408d5bb56a3926.jpg",
        descricao: "Calçã Black",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/13776541005/portrait/8809f8996405bd25a759c8e837f24adebc53609b.jpg",
        descricao: "Calçã Black",
      },
    ],
  },
  {
    id: 2,
    nome: "Camisa Manga Curta Masculina com Bolso",
    url: "camisa-manga",
    preco: 75.99,
    descricao: "Uma camisa diferenciada para ambientes mais quentes",
    tamanhos_disponiveis: ["P", "M", "G"],
    quantidade_disponivel: 12,
    categoria: "lancamentos",
    imagens: [
      {
        url: "https://static.riachuelo.com.br/RCHLO/14190621002/portrait/57c98408b64b494992da8f5a0661631b07b24e3d.jpg",
        descricao: "Camisa Curta",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14190621002/portrait/332f4f3ed37af0e5a04fc6778e363e34a549d8a8.jpg",
        descricao: "Camisa Curta",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14190621002/portrait/c5652d6795802c161e4a618479c005b013b00f86.jpg",
        descricao: "Camisa Curta",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14190621002/portrait/b72fb1894892584a8332cbf1600f5828b756f7e8.jpg",
        descricao: "Camisa Curta",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14190621002/portrait/eccb2509717f65a32eb0eca62de9cf23d2dba50f.jpg",
        descricao: "Camisa Curta",
      },
    ],
  },
  {
    id: 3,
    nome: "Vestido Curto Feminino Evasê Recorte Floral",
    url: "vestido-curto",
    preco: 109.99,
    descricao: "Vestido floral para sintonizar com a natureza",
    tamanhos_disponiveis: ["P", "M", "G"],
    quantidade_disponivel: 12,
    categoria: "lancamentos",
    imagens: [
      {
        url: "https://static.riachuelo.com.br/RCHLO/14630281001/portrait/286efb86fbe3668e2ec65c06a921a6aac37ff882.jpg",
        descricao: "Vestido Curto",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14630281001/portrait/1d276305205a9f67b60067dd85dec936a6a6ea01.jpg",
        descricao: "Vestido Curto",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14630281001/portrait/8b788131af06b7d0821904cfbabcbc22d1365f80.jpg",
        descricao: "Vestido Curto",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14630281001/portrait/eaccde1c806cf033b37d7b1b7bda261709a392fc.jpg",
        descricao: "Vestido Curto",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14630281001/portrait/7d5eeb3c0c0e4f8731d578c58cdcc4dabea47927.jpg",
        descricao: "Vestido Curto",
      },
    ],
  },
  {
    id: 4,
    nome: "Camisa Polo Masculina Básica Cinza Turigan",
    url: "camisa-polo",
    preco: 84.99,
    descricao: "Camisa polo básica para qualquer situação",
    tamanhos_disponiveis: ["P", "M", "G"],
    quantidade_disponivel: 12,
    categoria: "lancamentos",
    imagens: [
      {
        url: "https://static.riachuelo.com.br/RCHLO/14327945004/portrait/93dd1b2ac01f6d220c04d73d99633e7f851a83b5.jpg",
        descricao: "Camisa Polo",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14327945004/portrait/71678d547aa924929427381775e930074c419732.jpg",
        descricao: "Camisa Polo",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14327945004/portrait/e3dc68e7fca9d870ace07e842817a8243cb0d4ba.jpg",
        descricao: "Camisa Polo",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14327945004/portrait/1e2c5f1a9e54cda3e7982f55be6580e830a1f3d5.jpg",
        descricao: "Camisa Polo",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14327945004/portrait/8f62890f6f7b28e7df0b1d4eb1eea0b88a9b75da.jpg",
        descricao: "Camisa Polo",
      },
    ],
  },
  {
    id: 5,
    nome: "Bermuda Água Masculina Tactel Verão Laranja",
    url: "bermuda-agua",
    preco: 36.99,
    descricao: "Bermuda diferenciada tactel",
    tamanhos_disponiveis: ["P", "M", "G"],
    quantidade_disponivel: 12,
    categoria: "verao",
    imagens: [
      {
        url: "https://static.riachuelo.com.br/RCHLO/14263661004/portrait/f8990b7e94ada9dbee7ddbc4a0e7996f61ce1cf7.jpg",
        descricao: 'bermuda'
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14263661004/portrait/e934f3c2e3362b527ea23883cf18b904264dede8.jpg",
        descricao: 'bermuda'
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14263661004/portrait/d73ed6fc9deaee261f1f1a79c9968bbd0a800366.jpg",
        descricao: 'bermuda'
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14263661004/portrait/9788f1a31c9d9d8e8d4b8e2632b4b159c1d68e53.jpg",
        descricao: 'bermuda'
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14263661004/portrait/e77633feab201f095cc267ecf253e35173cabb34.jpg",
        descricao: 'bermuda'
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14263661004/portrait/8ddf8a35e26004030491b1592883fbef7dc59f16.jpg",
        descricao: 'bermuda'
      }
    ]
  },
  {
    id: 6,
    nome: "Bermuda Água Masculina Tactel Verão Azul",
    url: "bermuda-agua-azul",
    preco: 36.99,
    descricao: "Bermuda diferenciada tactel",
    tamanhos_disponiveis: ["P", "M", "G"],
    quantidade_disponivel: 12,
    categoria: "verao",
    imagens: [
      {
        url: "https://static.riachuelo.com.br/RCHLO/14196581004/portrait/d6d410bba3e559aad1dac28583863508327d0965.jpg",
        descricao: 'bermuda'
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14196581004/portrait/511a7c3197c9e621680b3a75b587d51a11949ea0.jpg",
        descricao: 'bermuda'
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14196581004/portrait/d1fb2fcfdea08fab7a2d9d333b0b072f0008a2d8.jpg",
        descricao: 'bermuda'
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14196581004/portrait/3a1d221cfa30e645599ecee81717b353205014a7.jpg",
        descricao: 'bermuda'
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14196581004/portrait/2b24707c49f6eb7d55d5ffc2f9fe995ef15ab902.jpg",
        descricao: 'bermuda'
      },
    ]
  },
  {
    id: 7,
    nome: "Camiseta Masculina Manga Curta Verão Branco",
    url: "camiseta-masculina-verao",
    preco: 42.99,
    descricao: "Bermuda diferenciada tactel",
    tamanhos_disponiveis: ["P", "M", "G"],
    quantidade_disponivel: 12,
    categoria: "verao",
    imagens: [
      {
        url: "https://static.riachuelo.com.br/RCHLO/14428474001/portrait/7ef03efc4422fdf3784543f5598dde8b054dbc05.jpg",
        descricao: 'camiseta'
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14428474001/portrait/10e5ed1c43b29e7df24c699c03ce7fce02e91a51.jpg",
        descricao: 'camiseta'
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14428474001/portrait/211ab2e0e556beeb72bcbdc0fb173c6bcf3059c9.jpg",
        descricao: 'camiseta'
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14428474001/portrait/56668539f232377c13387b20107254fa6507142d.jpg",
        descricao: 'camiseta'
      },
    ]
  },
  {
    id: 8,
    nome: "Maiô Tradicional Verão Azul Turquesa",
    url: "maio-verao-turquesa",
    preco: 36.99,
    descricao: "Bermuda diferenciada tactel",
    tamanhos_disponiveis: ["P", "M", "G"],
    quantidade_disponivel: 12,
    categoria: "verao",
    imagens: [
      {
        url: "https://static.riachuelo.com.br/RCHLO/14106116003/portrait/180bbff6bbf9b6b492095e3a664c748f81d1e095.jpg",
        descricao: 'maiô'
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14106116003/portrait/80a90e0820a76138ffa20963fa292a756e8884ad.jpg",
        descricao: 'maiô'
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14106116003/portrait/452b67b4ea744072a4ef85db1c2e0b97fa242b9d.jpg",
        descricao: 'maiô'
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14106116003/portrait/5c2262c62720c2a0a4b19b02885981992a05a157.jpg",
        descricao: 'maiô'
      },
    ]
  },
];

