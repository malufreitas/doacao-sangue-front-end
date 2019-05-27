import { Categoria } from './categoria';
import { Material } from './material';
import { Tamanho } from './tamanho';
import { Genero } from './genero';

export interface Produto {
    id: number;
    nome: string;
    quantidade: number;
    descricao: string;
    valorunitario: number;
    categoria: Categoria[];
    tamanho: Tamanho[];
    volume: string;
    material: Material[];
    genero: Genero[],
    urlimagem: string
  }
