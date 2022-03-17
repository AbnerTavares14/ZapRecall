import reactDom from "react-dom";
import TelaInicial from "./TelaInicial";

function App(){
    
    return (
        <TelaInicial />
    )
}

reactDom.render(<App />,document.querySelector(".root"));