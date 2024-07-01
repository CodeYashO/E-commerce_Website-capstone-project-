import { useReducer, useState } from "react";
import { createContext } from "react";

// DEFAULT VALUE OF USERCONTEXT (DEFAULT VALUE CAN BE GIVEN INSIDE THE USERCONTEXT.)
export const UserContext = createContext({
    currentUser : null,
    setcurrentUser : ()=> null
});

const userReducer = (currentUser , action)=>{
    // console.log(currentUser , action);
    if(action.type === "SET_CURRENT_USER"){
        currentUser = action.data;
        // console.log(currentUser , action);
        return currentUser; 
    }else if( action.type === "REMOVE_CURRENT_USER"){
        currentUser = null;
        return currentUser;
    }
    return currentUser;
}


export const UserProvider = ({children})=>{

    // const [currentUser , setcurrentUser] = useState(null);
    const [currentUser , dispatch] = useReducer(userReducer , null);
    const value = {currentUser , dispatch} 

    return <UserContext.Provider value={value}> {children}</UserContext.Provider>
}