import {container, input} from "./InputText.module.css"

function InputText({placeholder, icon}){
    return(
        <div className={container} >
            {icon}
           <input className={input} type="text" placeholder={placeholder} />
        </div>
    )
}

export default InputText