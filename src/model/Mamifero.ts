class Mamifero extends Animal{
    private raca: string;

    constructor(_raca:string, _nome:string, _idade:number, _genero:string){
        super(_nome, _idade, _genero);

        this.raca= _raca;
    }

    public getRaca() {
        return this.raca;
    }
    public setRaca(_raca: string) {
        this.raca = _raca;
    }
    
}