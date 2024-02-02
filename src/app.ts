import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';
import { Habitat } from './model/Habitat';

const server = express();
const port = 3000;

server.use(express.json());
server.use(cors());

server.get(`/`, (req, res) => {
    let ave: Ave = new Ave(`Papagaio`, 30, `Masculino`, 10);
    let reptil: Reptil = new Reptil(`Largato`, 2, `Femea`, `Cicloides`);
    let mamifero: Mamifero = new Mamifero(`Doberman`, `Cachorro`, 102, `Femea`);
    let habitat: Habitat = new Habitat("Deserto", ave);
    res.json([ave, reptil, mamifero, habitat]);   
    //res.json(`Olá mundo!!`);
})

server.post(`/ave`, (req, res) => {
    const { nome, idade, genero, envergadura} = req.body;
    let ave: Ave= new Ave(nome, idade, genero, envergadura);
    res.json(["A nova ave do zoológico é: ", ave]);
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})