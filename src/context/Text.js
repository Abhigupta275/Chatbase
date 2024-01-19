import { createContext,useState } from "react";

export const TextContext = createContext(null);

export const TextProvider = (props) =>{
    const [text, setText] = useState(null);
    return(
        <TextContext.Provider value={{text, setText}}>
           {props.children}
        </TextContext.Provider>
    )
}