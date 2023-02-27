import "../Assets/style/NFT.css"
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

// nft images

import frame1 from '../Assets/images/frame 1.png'
import frame2 from '../Assets/images/frame 2.png'
import frame3 from '../Assets/images/frame 3.png'
import frame4 from '../Assets/images/frame 4.png'
import frame5 from '../Assets/images/frame 5.png'
import frame6 from '../Assets/images/frame 6.png'
import frame7 from '../Assets/images/frame 7.png'
import frame8 from '../Assets/images/frame 8.png'

const NFT =() =>{
    return(
        <div classname='container-fluid'>
            <Navbar/>
            <div className='conx1'>
                    <p>Resturant</p>
                    <p>cottage</p>
                    <p>Castle</p>
                    <p>fantasy city</p>
                    <p>Beach</p>
                    <p>cabins</p>
                    <p>Off-grid</p>
                    <p>Farm</p>
                    {/* <p>Resturant</p> */}
                    <button type="submit" class="location-btn">Location <img src='../images/btn.png' alt='setting' /></button>
                   
            </div>
            <div className='conx2'>
            
            <img className='mbx' src={frame1} alt='frame1' />
                
            <img className='mbx' src={frame2} alt='frame1' /> 
            
            <img className='mbx' src={frame3} alt='frame1' />

            <img className='mbx' src={frame4} alt='frame1' />
     </div>

     <div className='conx2'>        
       <img className='mbx' src={frame5} alt='frame1' />

        <img className='mbx' src={frame6} alt='frame1' />

        <img className='mbx' src={frame7} alt='frame1' />

        <img className='mbx' src={frame8} alt='frame1' />
        
    </div>

    <div className='conx2'>        
       <img className='mbx' src={frame1} alt='frame1' />

        <img className='mbx' src={frame2} alt='frame1' />

        <img className='mbx' src={frame3} alt='frame1' />

        <img className='mbx' src={frame4} alt='frame1' />
        
    </div>

    <div className='conx2 mbxx1'>        
       <img className='mbx' src={frame5} alt='frame1' />

        <img className='mbx' src={frame6} alt='frame1' />

        <img className='mbx' src={frame7} alt='frame1' />

        <img className='mbx' src={frame8} alt='frame1' />
        
    </div>
    
            <Footer/>
        </div>

    )
};

export default NFT