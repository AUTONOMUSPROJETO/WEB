import { container, input } from "./InputCadastro.module.css"

function InputText({ placeholder, tipo, width }) {
    return (
        <div
            className={container}
           
        >


            <input className={input} type={tipo} placeholder={placeholder}  style={{ paddingRight: width }}/>
        </div>
    )
}

export default InputText