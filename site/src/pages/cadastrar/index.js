import { useState } from "react";
import { cadastrarPet, consultarPet } from "../../api/petsApi";


export default function Index(){
    const [nome, setNome] = useState([]);

    async function salvarClick() {
        const resp = await cadastrarPet(nome);
    }
    
    async export default function consultar() {
        const resp = await consultarPet()
        setNome(resp);

    }
    return(

        <main>

            <div>
                <h1>Cadastrar</h1>
                <input type ='text' placeholder = 'cadastrar pet' value = {nome} onChange={ e => setNome(e.currentTarget.value)} />
            
                <button onClick={salvarClick}>Cadastrar</button>
            </div>

                <h1>consultar</h1>

                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>nome</td>
                        </tr>
                    </thead>
                    
                    <tbody>
                    {nome.map(item=>
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                    </tr>)}
                        
                    </tbody>
                </table>




        </main>


    )
}