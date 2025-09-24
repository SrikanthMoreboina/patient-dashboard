import { useState } from "react";
import "../styles/Input.css"

function Input({placeholder,value,onChange}){
    const [isFocus,setisFocus]=useState(false)
     return (
        <div className="input-container">  
        <input
             type="text"
            //  placeholder={placeholder}
             value={value}
             onChange={onChange}
             onFocus={() => setisFocus(true)}
             onBlur={()=>setisFocus(value!==""?true:false)}
             className="custom-input" />
             
             <label
                className={`floating-label ${
                isFocus || value ? "label-active":""}` }>{placeholder}
            </label>
        </div>
     )
}

export default Input;
