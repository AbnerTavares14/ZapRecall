export default function PerguntaTaxada(props){
    const {estado,icons,id} = props;
    const css = `carta-virada-${estado}`
    return (
        <div className={css}>
            <p>Pergunta {id}</p>
            <ion-icon name={icons}></ion-icon>
        </div>
    )
}