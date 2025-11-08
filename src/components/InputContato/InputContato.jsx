import { container, input } from "./InputContato.module.css"

function InputText({ placeholder, tipo, width, paddingBottom }) {
    return (
        <div
            className={container}
            style={{ paddingBottom: paddingBottom }} >


            <input className={input} type={tipo} placeholder={placeholder} style={{ paddingRight: width }} />
        </div>
    )
}

export default InputText