import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { signAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";
import FormInput from "../signinform/signInformInput";
import { UserContext } from "../../contexts/usercontext";

const displayFormfield = {
    // displayName : "",
    email : "",
    Password : "",
    // ConfirmPassword : "" 
}
// console.log("***");

const SignInForm = (props)=>{    

const {currentUser , dispatch} = useContext(UserContext);
const {logGoogleUser} = props;

const [formfield , setformfield] = useState(displayFormfield);
const { email , Password} = formfield;

const onhandlechange = (event)=>{
    console.log(event);
    const {name , value} = event.target;
    console.log(name , value);
    setformfield({ ...formfield , [name] : value});
}
const navigate = useNavigate();

const onhandleSubmit = async (event)=>{
    event.preventDefault();
    try{
        const {user} = await signAuthUserWithEmailAndPassword(email , Password);
        console.log(user);
        dispatch({ type : "SET_CURRENT_USER" , data : user});
        console.log(currentUser)
        navigate("/");
        setformfield(displayFormfield);
    } catch (error) {
        console.log(`ohhhhhh ${error}`);
    }
}

console.log(formfield);
    return(
        <div>
            <FormInput onhandleSubmit={onhandleSubmit} onhandlechange = {onhandlechange} logGoogleUser={logGoogleUser} />
        </div>
    )
}

export default SignInForm;