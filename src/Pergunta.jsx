import { useState } from "react"



export default function Pergunta(props) {
    const {id, pergunta, resposta} = props;
    const [ virada, setVirada ] = useState("virada");

    if (virada === "virada") {
        return (
            <div className="carta-virada">
                <p onClick={() => setVirada("pergunta")}>Pergunta {id}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        )
    } else if (virada === "pergunta") {
        return (
            <div className="pergunta">
                <h1>{pergunta}</h1>
                <img onClick={() => setVirada("resposta")} src="setinha.png" alt="" />
            </div>
        )
    } else if(virada === "resposta")  {
        return (
            <div className="resposta">
                <h2>{resposta}</h2>
                <div className="memoria">
                    <div className="nao-lembro">
                        Não lembrei
                    </div>
                    <div className="quase-n-lembro">
                        Quase não lembrei
                    </div>
                    <div className="zap">
                        Zap!
                    </div>
                </div>
            </div>
        )
    }
}