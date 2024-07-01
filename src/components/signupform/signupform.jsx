import { useState , useContext } from "react";
import { createAuthUserWithEmailAndPassword ,createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import FormInput from "../components-item/formInput/forminput";
import { UserContext } from "../../contexts/usercontext";

const displayFormfield = {
    displayName : "",
    email : "",
    Password : "",
    ConfirmPassword : ""
}

const SignUpForm = ()=>{    

const {dispatch} = useContext(UserContext);

const [formfield , setformfield] = useState(displayFormfield);
const {displayName , email , Password , ConfirmPassword} = formfield;

const onhandlechange = (event)=>{
    console.log(event);
    const {name , value} = event.target;
    console.log(name , value);
    setformfield({ ...formfield , [name] : value});
}

const onhandleSubmit = async (event)=>{
    event.preventDefault();
    if(Password != ConfirmPassword){ 
        alert("not same");
        return;
    }

    try{
        const {user} = await createAuthUserWithEmailAndPassword(email , Password);// IT GIVES OBJECT IN WHICH USER OBJECT IS ALSO PRESENT(FOR TAKING USER OBJECT)
        // setcurrentUser(user);
        dispatch({ type : "SET_CURRENT_USER" , data : user});

        await createUserDocumentFromAuth(user , 
            {
                displayName : displayName,
                Password: Password
            }); /// FOR SAVING DATA IN DOCUMENT

        setformfield(displayFormfield);

    } catch (error) {
        console.log(`ohhhhhh ${error}`)
    }
}

console.log(formfield);
    return(
        <div>
            <h1> DON'T HAVE A ACCOUNT?</h1>
        <FormInput onhandleSubmit={onhandleSubmit} onhandlechange = {onhandlechange} />
        </div>
    )
}

export default SignUpForm;