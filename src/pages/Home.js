import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Body from './Body';
import "../Assets/style/body.css"


const Home =() =>{
    return(
        <div className='home'>
            <Navbar/>
            <Body/>
            <Footer/>

        </div>
    )
    
};

export default Home