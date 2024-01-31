class Reptil extends Animal{
    private tipo_de_escasmas: string;

    constructor(_tipo_de_escasmas:string, _nome:string, _idade:number, _genero:string){
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