import { Animal } from "./Animal";

/**
 * Representa um habitat dentro do zoológico, que pode conter uma lista de animais.
 */
export class Habitat {
    // Atributos privados que armazenam informações sobre o habitat.
    private nome: string;                        // Nome do habitat.
    private lista_de_animais: Array<Animal>;     // Lista de animais presentes no habitat.

    /**
     * Construtor da classe Habitat.
     * @param _nome Nome do habitat.
     * @param lista_de_animais Lista de animais associados ao habitat.
     */
    constructor(_nome: string, lista_de_animais: Array<Animal>) {
        // Inicializa os atributos com os valores passados como parâmetro.
        this.nome = _nome;
        this.lista_de_animais = lista_de_animais;
    }

    /**
     * Método para obter o nome do habitat.
     * @returns O nome do habitat.
     */
    public getNome() {
        return this.nome;
    }

    /**
     * Método para definir o nome do habitat.
     * @param _nome Novo nome do habitat.
     */
    public setNome(_nome: string) {
        this.nome = _nome;
    }

    /**
     * Método para obter a lista de animais do habitat.
     * @returns A lista de animais do habitat.
     */
    public getLista_de_animais(): Array<Animal> {
        return this.lista_de_animais;
    }

    /**
     * Método para adicionar um animal à lista de animais do habitat.
     * @param _lista_de_animais Novo animal a ser adicionado à lista.
     */
    public setLista_de_animais(_lista_de_animais: Animal) {
        this.lista_de_animais.push(_lista_de_animais);
    }
}
