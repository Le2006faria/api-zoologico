export class Animal {
    public nome: string;
    public idade: number;
    public genero: string;

    constructor(_nome: string, _idade: number, _genero: string) {
        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero;
    }

    public getNome() {
        return this.nome;
    }
    public setNome(_nome: string) {
        this.nome = _nome;
    }

    public getIdade() {
        return this.idade;
    }
    public setIdade(_idade: number) {
        this.idade = _idade;
    }

    public getGenero() {
        return this.genero;
    }
    public setGenero(_genero: string) {
        this.genero = _genero;
    }

}