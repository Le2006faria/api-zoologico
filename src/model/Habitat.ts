import { Animal } from "./Animal";

export class Habitat{
    private nome: string;
    private lista_de_animais: Array<Animal>;
    
    constructor(_nome: string, lista_de_animais: Array<Animal>){
    this.nome= _nome;
    this.lista_de_animais= lista_de_animais;
    }

    public getNome() {
        return this.nome;
    }
    public setNome(_nome: string) {
        this.nome = _nome;
    }

    public getLista_de_animais(): Array<Animal> {
        return this.lista_de_animais;
    }
    public setLista_de_animais(_lista_de_animais: Animal) {
        this.lista_de_animais.push(_lista_de_animais);
    }

}
