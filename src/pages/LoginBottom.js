import '../pages/Login.css'
import facebook_login from '../picture/facebook (2).png';
import google_login from '../picture/google.png';
import { Link } from 'react-router-dom';

const LoginBottom = () =>{
    return(

        <div className='section-bg'>

            <div className='social_div'>
             <span className='login_span'>
              <hr className='login_hr'/>
              <p className='login_p'>Or Continue with</p>
              <hr className='login_hr' /> 
             </span>

             <div className='login_social_img'>
              <Link to='/#google'><img className='google_login_img' src={google_login} alt='Google-account'/></Link>
              <Link to='/#facebook'><img className='facebook_login_img' src={facebook_login} alt='facebook-account'/></Link>
             </div>
           </div>

            <div className='login_signup_bottom'>
              <p>Don't have an account?<Link to='/#sign-up' className='sign_link'> Sign up</Link></p>
            </div>

            </div>

    )
};

export default LoginBottom