class Ave extends Animal{
    private envergadura: number;

    constructor(_envergadura:number, _nome:string, _idade:number, _genero:string){
        super(_nome, _idade, _genero);

        this.envergadura= _envergadura;
    }

    public getEnvergadura() {
        return this.envergadura;
    }
    public setEnvergadura(_envergadura: number) {
        this.envergadura = _envergadura;
    }
    
}