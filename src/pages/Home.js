import Footer from "./Footer";
import Navbar from "./Navbar";
import Body from './Body';
import "../pages/Home.css"


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