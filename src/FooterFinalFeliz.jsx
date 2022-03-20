export default function FooterFinalFeliz(props){
    const { icone } = props;
    return (
        <footer className="final">
            <div className="fim">
                <img src="party.png" alt="" />
                <h1>Parabéns</h1>
            </div>
            <p>Você não esqueceu de nenhum flashcard!</p>
            <div className="icones">
                {icone.map((icon, index) =>
                    <ion-icon className={`${icon}`} key={icon + index} name={icon}></ion-icon>
                )}
            </div>
        </footer>
    )
}