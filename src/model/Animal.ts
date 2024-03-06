/**
 * Representa um animal com suas características básicas.
 */
export class Animal {
    // Atributos privados que armazenam informações sobre o animal.
    private nome: string;    // Representa o nome do animal.
    private idade: number;   // Representa a idade do animal.
    private genero: string;  // Representa o gênero do animal.

    /**
     * Construtor da classe Animal.
     * @param _nome Nome do animal.
     * @param _idade Idade do animal.
     * @param _genero Gênero do animal.
     */
    constructor(_nome: string, _idade: number, _genero: string) {
        // Inicializa os atributos com os valores passados como parâmetro.
        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero;
    }

    /**
     * Método para obter o nome do animal.
     * @returns O nome do animal.
     */
    public getNome() {
        return this.nome;
    }

    /**
     * Método para definir o nome do animal.
     * @param _nome Novo nome do animal.
     */
    public setNome(_nome: string) {
        this.nome = _nome;
    }

    /**
     * Método para obter a idade do animal.
     * @returns A idade do animal.
     */
    public getIdade() {
        return this.idade;
    }

    /**
     * Método para definir a idade do animal.
     * @param _idade Nova idade do animal.
     */
    public setIdade(_idade: number) {
        this.idade = _idade;
    }

    /**
     * Método para obter o gênero do animal.
     * @returns O gênero do animal.
     */
    public getGenero() {
        return this.genero;
    }

    /**
     * Método para definir o gênero do animal.
     * @param _genero Novo gênero do animal.
     */ 
    public setGenero(_genero: string) {
        this.genero = _genero;
    }

}
