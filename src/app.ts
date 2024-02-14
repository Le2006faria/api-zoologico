import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/atracao';
import { Zoologico } from './model/Zoologico';

const server = express();
const port = 3000;

server.use(express.json());
server.use(cors());

server.get(`/`, (req, res) => {
    let ave: Ave = new Ave(`Papagaio`, 30, `Masculino`, 10);
    let reptil: Reptil = new Reptil(`Largato`, 2, `Femea`, `Cicloides`);
    let mamifero: Mamifero = new Mamifero(`Doberman`, `Cachorro`, 102, `Femea`);
    res.json([ave, reptil, mamifero]);   
    //res.json(`Olá mundo!!`);
})

server.post(`/ave`, (req, res) => {
    const { nome, idade, genero, envergadura} = req.body;
    let ave: Ave= new Ave(nome, idade, genero, envergadura);
    res.json(["A nova ave do zoológico é: ", ave]);
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

server.post('/habitat', (req, res) => {
    const { nome, animais } = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('Habitat criado!');
});

server.post('/atracao', (req, res) => {
    const { nome, habitat } = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('Atração criada!');
});

server.post('/zoologico', (req, res) => {
    const { nome, atracao } = req.body;
    const zoo= new Zoologico(nome, atracao);
    console.log(zoo);
    res.status(200).json('Zoológico criado!');
});
