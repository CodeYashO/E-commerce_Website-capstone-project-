import { useState , createContext } from "react";

export const GoogleContext = createContext({
    currentUser : null,
    setcurrentUser : ()=>{}
});

export const Googleprovider = ({children})=>{
    const [currentUser , setcurrentUser] = useState(null);
    const value = {currentUser , setcurrentUser};
    return <GoogleContext.Provider value={value}> {children} </GoogleContext.Provider>
};