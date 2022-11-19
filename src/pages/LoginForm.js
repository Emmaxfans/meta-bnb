import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Login.css'

const LoginForm = () =>{

    // Usestate for the login form

    const{useState}=React;
    const[inputtext,setinputtext]=useState({
    email:"",
    password:""
    });
    
    const[warnemail,setwarnemail]=useState(false);
    const[warnpassword,setwarnpassword]=useState(false);
    
    const[eye,seteye]=useState(true);
    const[password,setpassword]=useState("password");
    const[type,settype]=useState(false);
    
    const inputEvent=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputtext((lastValue)=>{
    return{
    ...lastValue,
    [name]:value
    }
    });
    
    }
    
    
    
    const submitForm=(e)=>{   
    e.preventDefault();
    setwarnemail(false);
    setwarnpassword(false);
    if(inputtext.email===""){
    setwarnemail(true);
    }
    else if(inputtext.password===""){
    setwarnpassword(true);
    } 
    else{
    alert("form submitted"); 
    }
    
    }
    
    const Eye=()=>{
        if(password==="password"){
            setpassword("text");
            seteye(false);
            settype(true);
        }
        else{
            setpassword("password");
            seteye(true);
            settype(false);
        }
    }
    
    return(

        <div className='form_login_1'>

<h1 id="signin-header" className="header-text">Sign in</h1>

<form onSubmit={submitForm} className='form-login'>


<div className="input-text">
  <label>Email</label>
    <input type="text" className={` ${warnemail ? "warning active-input1" : "" }`} placeholder="Enter your email" value={inputtext.email} onChange={inputEvent} name="email" />
    {/* <i className="fa fa-envelope"></i> */}

</div>
<div className="input-text">
  <label>Password</label>
    <input type={password} className={` ${warnpassword ? "warning" : "" } ${type ? "type_password" : "" }`} placeholder="Enter your password" value={inputtext.password} onChange={inputEvent} name="password" />
    {/* <i className="fa fa-lock"></i> */}
    <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
</div>

<div className="forgot">
    <span>
     <input type={'checkbox'}/><span className='checkbox_p'>Remember me</span>
     </span>
     <Link className='login_password_reset' to="/#">Forgot Password?</Link>
</div>

<div className="buttons">
    <button type="submit" className='submit-sign'>Sign in</button>
</div>
</form>

        </div>

    )
};

export default LoginForm