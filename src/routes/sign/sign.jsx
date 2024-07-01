import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import { UserContext } from "../../contexts/usercontext";
import SignInForm from "../../components/signinform/signinform";
import SignUpForm from "../../components/signupform/signupform";
import { useNavigate } from "react-router-dom";
import { GoogleContext } from "../../contexts/googleContext";
import { useContext } from "react";


const SignIn = () => {
  const { currentUser, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const logGoogleUser = async (e) => {
    const { user } = await signInWithGooglePopup();
    const userData = await createUserDocumentFromAuth(user);
    // setcurrentUser(user);
    dispatch({ type : "SET_CURRENT_USER" , data : user})
    navigate("/");
  };

  return (
    <div>
      <SignInForm logGoogleUser={logGoogleUser} /> <SignUpForm />
    </div>
  );
};

export default SignIn;
