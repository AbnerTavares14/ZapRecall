import { useState } from "react"
import PerguntaTaxada from "./PerguntaTaxada";
import Resposta from "./Resposta";
const icons = ["close-circle-sharp","help-circle-sharp","checkmark-circle-sharp"];


export default function Pergunta(props) {
    const {id, pergunta, resposta, callback, adicionaIcones} = props;
    const [ virada, setVirada ] = useState("virada");
    // const [memoria, setMemoria] = useState("");

    function selecionaMemoria(str){
        console.log(str);
        if(str === "Não lembro"){
            setVirada("NLembrei");
            callback();
        }else if(str === "quase não lembro"){
            setVirada("QNLembrei");
            callback();
        }else if(str === "zap"){
            setVirada("Zap");
            callback();
        }
    }

    if (virada === "virada") {
        return (
            <div onClick={() => setVirada("pergunta")} className="carta-virada">
                <p>Pergunta {id}</p>
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

        return(
            <Resposta selecionaMemoria={selecionaMemoria} resposta={resposta} adicionaIcones={adicionaIcones}/>
        )
    }else if(virada === "NLembrei"){
        return(
            <PerguntaTaxada estado="errado" icons={icons[0]} id={id}/>
        )
    } else if(virada === "QNLembrei"){
        return(
            <PerguntaTaxada estado="meio" icons={icons[1]} id={id}/>
        )
    } else if(virada === "Zap"){
        return (
            <PerguntaTaxada estado="zap" icons={icons[2]} id={id}/>
        )
    }
}