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