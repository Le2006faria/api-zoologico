import { Animal } from "./Animal";

/**
 * Representa um réptil, que é um tipo específico de animal.
 * Estende a classe Animal para herdar seus atributos e métodos.
 */
export class Reptil extends Animal {
    // Atributo privado específico dos répteis.
    private tipo_de_escamas: string; // Tipo de escamas do réptil.

    /**
     * Construtor da classe Reptil.
     * @param _nome Nome do réptil.
     * @param _idade Idade do réptil.
     * @param _genero Gênero do réptil.
     * @param _tipo_de_escamas Tipo de escamas do réptil.
     */
    constructor(_nome: string, _idade: number, _genero: string, _tipo_de_escamas: string) {
        // Chama o construtor da classe Animal passando nome, idade e gênero.
        super(_nome, _idade, _genero);

        // Inicializa o atributo específico dos répteis.
        this.tipo_de_escamas = _tipo_de_escamas;
    }

    /**
     * Método para obter o tipo de escamas do réptil.
     * @returns O tipo de escamas do réptil.
     */
    public getTipo_de_escamas() {
        return this.tipo_de_escamas;
    }

    /**
     * Método para definir o tipo de escamas do réptil.
     * @param _tipo_de_escamas Novo tipo de escamas do réptil.
     */
    public setTipo_de_escamas(_tipo_de_escamas: string) {
        this.tipo_de_escamas = _tipo_de_escamas;
    }
}
