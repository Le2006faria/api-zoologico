import { Habitat } from "./Habitat";

export class Atracao{
    private nome: string;
    private lista_de_habitats: Array<Habitat>;
    
    constructor(_nome: string, lista_de_habitats: Array<Habitat>){
    this.nome= _nome;
    this.lista_de_habitats= lista_de_habitats;
    }

    public getNome() {
        return this.nome;
    }
    public setNome(_nome: string) {
        this.nome = _nome;
    }

    public getLista_de_habitats(): Array<Habitat> {
        return this.lista_de_habitats;
    }
    public setLista_de_habitats(_lista_de_habitats: Habitat) {
        this.lista_de_habitats.push(_lista_de_habitats);
    }

}