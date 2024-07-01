
import { useState } from "react";
import { createContext } from "react"

export let InsideContentContext = createContext({
    insidecontent : [],
    setinsidecontent : ()=>{}
});

export let InsideContentProvider = ({children})=>{
    let [insidecontent ,setinsidecontent ] = useState([]);
    let value = {insidecontent , setinsidecontent};
    return <InsideContentContext.Provider value={value}>{children}</InsideContentContext.Provider>
}
