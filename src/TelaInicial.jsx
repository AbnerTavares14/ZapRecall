import { useState } from "react";
import TelaDeck from "./TelaDeck";

export default function TelaInicial() {
    const [escondido,setEscondido] = useState(false);

    if(escondido === false){
        return(
            <>
            <div className="tela-inicio">
                <img src="logo.png" alt="" />
                <h1>ZapRecall</h1>
                <button onClick={() => setEscondido(true)} className="iniciar">Iniciar Recall</button>
            </div>
        </>
        )
    }else{
        return(
            <TelaDeck />
        )
    }
}