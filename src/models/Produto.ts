import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  duracao: number;
  foto: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}
