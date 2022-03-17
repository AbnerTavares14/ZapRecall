import Pergunta from "./Pergunta"


const perguntas = [
    { pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript", id: 1 },
    { pergunta: "O React é __", resposta: " uma biblioteca JavaScript para construção de interfaces", id: 2 },
    { pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula", id: 3 },
    { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões", id: 4 },
    { pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma", id: 5 },
    { pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências", id: 6 },
    { pergunta: " Usamos props para __ ", resposta: "passar diferentes informações para componentes", id: 7 },
    { pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", id: 8 }
]

export default function TelaDeck() {
    return (
        <>
            <header>
                <img src="logo-pequeno.png" alt="" />
                <h1>ZapRecall</h1>
            </header>
            <main>
                {
                    perguntas.map(question =>
                        <Pergunta key={question.id} h1={question.pergunta} h2={question.resposta} />
                    )
                }
            </main>
        </>
    )
}