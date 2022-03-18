import Pergunta from "./Pergunta"
import { useState } from "react"

const perguntas = [
    { pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript", id: "1" },
    { pergunta: "O React é __", resposta: " uma biblioteca JavaScript para construção de interfaces", id: "2" },
    { pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula", id: "3" },
    { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões", id: "4" },
    { pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma", id: "5" },
    { pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências", id: "6" },
    { pergunta: " Usamos props para __ ", resposta: "passar diferentes informações para componentes", id: "7" },
    { pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", id: "8" }
]

export default function TelaDeck() {
    const [qtd, setQtd] = useState(0);
    const icones = [];
    const [icone, setIcone] = useState(icones);
    // const [respondido,setRespondido] = useState(false);


    function adicionaIcones(str) {
        // icones.push(str);
        // console.log(icones);
        // console.log(icone);
        setIcone([...icone, str]);
    }

    return (
        <>
            <header>
                <img src="logo-pequeno.png" alt="" />
                <h1>ZapRecall</h1>
            </header>
            <main>
                {
                    perguntas.map(question =>
                        <Pergunta key={question.id} pergunta={question.pergunta} resposta={question.resposta} id={question.id} adicionaIcones={adicionaIcones} callback={() => setQtd(qtd + 1)} />
                    )
                }
            </main>
            <footer>
                <h1>{qtd}/8 CONCLUÍDOS</h1>
                <div className="icones">
                    {icone.map((icon, index) =>
                        <ion-icon className={`${icon}` } key={icon + index} name={icon}></ion-icon>
                    )}
                </div>
            </footer>
        </>
    )
}