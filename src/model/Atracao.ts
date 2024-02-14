import { Habitat } from "./Habitat";

/**
 * Representa uma atração dentro do zoológico, que pode conter uma lista de habitats.
 */
export class Atracao {
    // Atributos privados que armazenam informações sobre a atração.
    private nome: string;                        // Nome da atração.
    private lista_de_habitats: Array<Habitat>;   // Lista de habitats presentes na atração.

    /**
     * Construtor da classe Atracao.
     * @param _nome Nome da atração.
     * @param lista_de_habitats Lista de habitats associados à atração.
     */
    constructor(_nome: string, lista_de_habitats: Array<Habitat>) {
        // Inicializa os atributos com os valores passados como parâmetro.
        this.nome = _nome;
        this.lista_de_habitats = lista_de_habitats;
    }

    /**
     * Método para obter o nome da atração.
     * @returns O nome da atração.
     */
    public getNome() {
        return this.nome;
    }

    /**
     * Método para definir o nome da atração.
     * @param _nome Novo nome da atração.
     */
    public setNome(_nome: string) {
        this.nome = _nome;
    }

    /**
     * Método para obter a lista de habitats da atração.
     * @returns A lista de habitats da atração.
     */
    public getLista_de_habitats(): Array<Habitat> {
        return this.lista_de_habitats;
    }

    /**
     * Método para adicionar um habitat à lista de habitats da atração.
     * @param _lista_de_habitats Novo habitat a ser adicionado à lista.
     */
    public setLista_de_habitats(_lista_de_habitats: Habitat) {
        this.lista_de_habitats.push(_lista_de_habitats);
    }
}
