import "../components-item/formInput/forminput.scss";
// import { logGoogleUser } from "../../routes/sign/sign";

const FormInput = (props)=>{
    const {onhandleSubmit , onhandlechange , logGoogleUser} = props;
    return(
        <div className="group">
        <form onSubmit={onhandleSubmit}>

                {/* <label >DisplayName</label>
                <input className="form-input" type="text" required name="displayName" onChange={onhandlechange}/> */}

                <label >EMAIL</label>
                <input className="form-input" type="email" required name="email" onChange={onhandlechange}/>

                <label >Password</label>
                <input className="form-input" type="password" required name="Password" onChange={onhandlechange} />

                {/* <label >Confirm-Password</label>
                <input className="form-input" type="password" required name="ConfirmPassword" onChange={onhandlechange}/> */}

                <button type="submit">SIGN IN</button>

            <button onClick={logGoogleUser}>
            <p>sign in with Google</p>
            </button>
        </form>
        </div>
    )
}

export default FormInput;