import "../formInput/forminput.scss"

const FormInput = (props)=>{
    const {onhandleSubmit , onhandlechange} = props;
    return(
        <div className="group">
        <form onSubmit={onhandleSubmit}>

                <label >DisplayName</label>
                <input className="form-input" type="text" required name="displayName" onChange={onhandlechange}/>

                <label >EMAIL</label>
                <input className="form-input" type="email" required name="email" onChange={onhandlechange}/>

                <label >Password</label>
                <input className="form-input" type="password" required name="Password" onChange={onhandlechange} />

                <label >Confirm-Password</label>
                <input className="form-input" type="password" required name="ConfirmPassword" onChange={onhandlechange}/>

                <button type="submit">SIGN UP</button>
        </form>
        </div>
    )
}

export default FormInput;