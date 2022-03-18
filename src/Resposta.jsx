export default function Resposta(props) {
    const {resposta,selecionaMemoria,adicionaIcones} = props;

    return (
        <>
        <div className="resposta">
            <h2>{resposta}</h2>
            <div className="memoria">
                <div className="nao-lembro" onClick={() => {
                        selecionaMemoria("Não lembro");
                        adicionaIcones("close-circle-sharp")
                    }}>
                    <p>Não lembrei</p>
                </div>
                <div className="quase-n-lembro" onClick={() => {
                    selecionaMemoria("quase não lembro");
                    adicionaIcones("help-circle-sharp")}}>
                    <p>Quase não lembrei</p>
                </div>
                <div className="zap" onClick={() => {
                    selecionaMemoria("zap");
                    adicionaIcones("checkmark-circle-sharp")}}>
                    <p>Zap!</p>
                </div>
            </div>
        </div>
        </>
    )
}