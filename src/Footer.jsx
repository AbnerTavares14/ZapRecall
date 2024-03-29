import FooterFinalFeliz from "./FooterFinalFeliz";
import FooterFinalTriste from "./FooterFinalTriste";

export default function Footer(props){
    const {qtd,icone,callback, reinicio} = props;
    if(qtd < 8){
        return (
            <footer>
                <h1>{qtd}/8 CONCLUÍDOS</h1>
                <div className="icones">
                    {icone.map((icon, index) =>
                        <ion-icon className={icon} key={icon + index} name={icon} ></ion-icon>
                    )}
                </div>
            </footer>
        )
    }else{
        if(icone.find(callback) !== undefined){
            return(
                <FooterFinalTriste reinicio={reinicio} icone={icone}/>
            )
        }else{
            return(
                <FooterFinalFeliz reinicio={reinicio} icone={icone}/>
            )
        }
    }
}
