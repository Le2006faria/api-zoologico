import { Atracao } from "./Atracao";

/**
 * Representa um zoológico, que contém uma lista de atrações.
 */
export class Zoologico {
    // Atributos privados que armazenam informações sobre o zoológico.
    private nome: string;                    // Nome do zoológico.
    private lista_de_atracoes: Array<Atracao>;  // Lista de atrações presentes no zoológico.

    /**
     * Construtor da classe Zoologico.
     * @param _nome Nome do zoológico.
     * @param lista_de_atracoes Lista de atrações associadas ao zoológico.
     */
    constructor(_nome: string, lista_de_atracoes: Array<Atracao>) {
        // Inicializa os atributos com os valores passados como parâmetro.
        this.nome = _nome;
        this.lista_de_atracoes = lista_de_atracoes;
    }

    /**
     * Método para obter o nome do zoológico.
     * @returns O nome do zoológico.
     */
    public getNome() {
        return this.nome;
    }

    /**
     * Método para definir o nome do zoológico.
     * @param _nome Novo nome do zoológico.
     */
    public setNome(_nome: string) {
        this.nome = _nome;
    }

    /**
     * Método para obter a lista de atrações do zoológico.
     * @returns A lista de atrações do zoológico.
     */
    public getLista_de_atracoes(): Array<Atracao> {
        return this.lista_de_atracoes;
    }

    /**
     * Método para adicionar uma atração à lista de atrações do zoológico.
     * @param _lista_de_atracoes Nova atração a ser adicionada à lista.
     */
    public setLista_de_atracoes(_lista_de_atracoes: Atracao) {
        this.lista_de_atracoes.push(_lista_de_atracoes);
    }
}
