import { useState } from "react";
import TelaDeck from "./TelaDeck";

export default function TelaInicial() {
    const [escondido,setEscondido] = useState(false);
    const [opcao,setOpcao] = useState('Deck 1');
    if(escondido === false){
        return(
            <>
            <div className="tela-inicio">
                <img src="logo.png" alt="" />
                <h1>ZapRecall</h1>
                <select className="select" name="Deck" onChange={opt => setOpcao(opt.target.value)}>
                    <option disabled selected>Escolha seu deck</option>
                    <option value="Deck 1">Conceitos de JSX</option>
                    <option value="Deck 2">Conceitos de Japonês</option>
                    <option value="Deck 3">Conhecimento geral</option> 
                </select>
                <button onClick={() => setEscondido(true)} className="iniciar">Iniciar Recall</button>
            </div>
        </>
        )
    }else{
        console.log(opcao);
        return(
            <TelaDeck opcao={opcao}/>
        )
    }
}