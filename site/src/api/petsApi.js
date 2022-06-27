import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarPet (nome){
    const resp = await api.post('/pets', {
        nome: nome
    });
    return resp.data;
}

export async function consultarPet() {
    const resp = await api.get('/pet');
    return resp.data;
}

