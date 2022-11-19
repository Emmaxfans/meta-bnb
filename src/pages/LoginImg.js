import '../pages/Login.css'
import Ellipse8 from '../picture/Ellipse 8.png';
import Ellipse9 from '../picture/Ellipse 9.png';
import Ellipse10 from '../picture/Hand coding-amico.png'


const LoginImg = () =>{
    return(

        <div className='login-section2'>
        <div>
         <img className='ellipse8' src={Ellipse8} alt='sign-in__img'/>
         <img className='ellipse10' src={Ellipse10} alt='sign-in__img'/>
         <img className='ellipse9' src={Ellipse9} alt='sign-in__img'/>
        </div>
      </div>

    )
};

export default LoginImg