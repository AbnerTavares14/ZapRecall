import Pergunta from "./Pergunta"
import { useState } from "react"
import Footer from "./Footer";
import TelaInicial from "./TelaInicial";


const deck1 = [
    { pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript", id: "1" },
    { pergunta: "O React é __", resposta: " uma biblioteca JavaScript para construção de interfaces", id: "2" },
    { pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula", id: "3" },
    { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões", id: "4" },
    { pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma", id: "5" },
    { pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências", id: "6" },
    { pergunta: " Usamos props para __ ", resposta: "passar diferentes informações para componentes", id: "7" },
    { pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", id: "8" }
]

const deck2 = [
    { pergunta: "Para que serve a partícula は?" , resposta: "Para indicar o tópico da frase"},
    { pergunta: "Para que serve a partícula の?", resposta: "Para indicar posse"},
    { pergunta: "Qual partícula é usada para indicar o objeto de um verbo?", resposta: "A partícula を"},
    { pergunta: "Traduza '私の名前は。。。' ", resposta: "Meu nome é..."},
    { pergunta: "Traduza 'おはようございます、お元気ですか' é", resposta: "Bom dia, tudo bom?"},
    { pergunta: "Traduza 'あなたは何歳ですか'", resposta: "Quantos anos você tem?"},
    { pergunta: "A particula か serve para", resposta: "Como ponto de interrogação"},
    { pergunta: "Traduza: '今日はテストの日です'", resposta: "Hoje é o dia da prova"}
]

const deck3 = [
    { pergunta: "A definição de log é:", resposta: "log de B na base A <=> a elevado x = b "},
    { pergunta: "A definição de um número impar é:", resposta: "N * 2 + 1, sendo N um número qualquer"},
    { pergunta: "O que é um prefixo?", resposta: "São afixos que aparecem antes do radical de uma palavra"},
    { pergunta: "O que é anacronismo?", resposta: "Erro de cronologia ao atribuir em uma época idéias e/ou sentimentos que são de outra época"},
    { pergunta: "O que é trabalho na Física?", resposta: "É uma medida da energia transferida pela aplicação de uma força ao longo de um deslocamento."},
    { pergunta: "A distância entre a Terra e a lua é de________", resposta: "384.000 km"},
    { pergunta: "Em química, a fórmula química da sacarose(açucar) é", resposta: "C12H22011"},
    { pergunta: "O segundo país com a maior população do mundo é o(a) ______", resposta: "Índia"}
]

function embaralhar() { 
    return Math.random() - 0.5; 
}
deck1.sort(embaralhar);
deck2.sort(embaralhar);
deck3.sort(embaralhar);

export default function TelaDeck(props) {
    const {opcao} = props;
    let perguntas;
    const [qtd, setQtd] = useState(0);
    const icones = [];
    const [icone, setIcone] = useState(icones);
    const [reinicio, setReinicio] = useState(false);
    function NãoLembrei(icone){
        return icone === "close-circle-sharp";
    }

    if(opcao === "Deck 1"){
        perguntas = deck1;
    }else if(opcao === "Deck 2"){
        perguntas = deck2;
    }else if(opcao === "Deck 3"){
        perguntas = deck3;
    }

    function adicionaIcones(str) {
        setIcone([...icone, str]);
    }
    if(reinicio === false){
    return (
        <>
            <header>
                <img src="logo-pequeno.png" alt="" />
                <h1>ZapRecall</h1>
            </header>
            <main>
                {
                    perguntas.map((question, index) =>
                        <Pergunta key={index} pergunta={question.pergunta} resposta={question.resposta} id={index+1} adicionaIcones={adicionaIcones} callback={() => setQtd(qtd + 1)} />
                    )
                }
            </main>
            <Footer icone={icone} qtd={qtd} callback={NãoLembrei} reinicio={() => setReinicio(true)}/>
        </>
    )
    }else{
        return(
            <TelaInicial />
        )
    }
}