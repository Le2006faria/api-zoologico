import { Atracao } from "./atracao";

export class Zoologico{
    private nome: string;
    private lista_de_atracoes: Array<Atracao>;
    
    constructor(_nome: string, lista_de_atracoes: Array<Atracao>){
    this.nome= _nome;
    this.lista_de_atracoes= lista_de_atracoes;
    }

    public getNome() {
        return this.nome;
    }
    public setNome(_nome: string) {
        this.nome = _nome;
    }

    public getLista_de_atracoes(): Array<Atracao> {
        return this.lista_de_atracoes;
    }
    public setLista_de_atracoes(_lista_de_atracoes: Atracao) {
        this.lista_de_atracoes.push(_lista_de_atracoes);
    }

}