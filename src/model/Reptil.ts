import { Animal } from "./Animal";

export class Reptil extends Animal{
    private tipo_de_escasmas: string;

    constructor(_nome:string, _idade:number, _genero:string, _tipo_de_escasmas:string){
        super(_nome, _idade, _genero);

        this.tipo_de_escasmas= _tipo_de_escasmas;
    }

    public getTipo_de_escasmas() {
        return this.tipo_de_escasmas;
    }
    public setTipo_de_escasmas(_tipo_de_escasmas: string) {
        this.tipo_de_escasmas = _tipo_de_escasmas;
    }
    
}