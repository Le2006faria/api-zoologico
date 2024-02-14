import { Animal } from "./Animal";

/**
 * Representa uma ave, que é um tipo específico de animal.
 * Estende a classe Animal para herdar seus atributos e métodos.
 */
export class Ave extends Animal {
    // Atributo privado específico das aves.
    private envergadura: number; // Envergadura da ave.

    /**
     * Construtor da classe Ave.
     * @param _nome Nome da ave.
     * @param _idade Idade da ave.
     * @param _genero Gênero da ave.
     * @param _envergadura Envergadura da ave.
     */
    constructor(_nome: string, _idade: number, _genero: string, _envergadura: number) {
        // Chama o construtor da classe Animal passando nome, idade e gênero.
        super(_nome, _idade, _genero);

        // Inicializa o atributo específico da ave.
        this.envergadura = _envergadura;
    }

    /**
     * Método para obter a envergadura da ave.
     * @returns A envergadura da ave.
     */
    public getEnvergadura() {
        return this.envergadura;
    }

    /**
     * Método para definir a envergadura da ave.
     * @param _envergadura Nova envergadura da ave.
     */
    public setEnvergadura(_envergadura: number) {
        this.envergadura = _envergadura;
    }
}
