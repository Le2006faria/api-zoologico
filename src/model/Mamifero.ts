import { Animal } from "./Animal";

/**
 * Representa um mamífero, que é um tipo específico de animal.
 * Estende a classe Animal para herdar seus atributos e métodos.
 */
export class Mamifero extends Animal {
    // Atributo privado específico dos mamíferos.
    private raca: string; // Raça do mamífero.

    /**
     * Construtor da classe Mamifero.
     * @param _raca Raça do mamífero.
     * @param _nome Nome do mamífero.
     * @param _idade Idade do mamífero.
     * @param _genero Gênero do mamífero.
     */
    constructor(_raca: string, _nome: string, _idade: number, _genero: string) {
        // Chama o construtor da classe Animal passando nome, idade e gênero.
        super(_nome, _idade, _genero);

        // Inicializa o atributo específico dos mamíferos.
        this.raca = _raca;
    }

    /**
     * Método para obter a raça do mamífero.
     * @returns A raça do mamífero.
     */
    public getRaca() {
        return this.raca;
    }

    /**
     * Método para definir a raça do mamífero.
     * @param _raca Nova raça do mamífero.
     */
    public setRaca(_raca: string) {
        this.raca = _raca;
    }
}
