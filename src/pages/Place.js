import '../pages/stay.css'
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const Place =() =>{
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
            
            <img className='mbx' src='../images/frame 1.png' alt='frame1' />
                
            <img className='mbx' src='../images/frame 2.png' alt='frame1' /> 
            
            <img className='mbx' src='../images/frame 3.png' alt='frame1' />

            <img className='mbx' src='../images/frame 4.png' alt='frame1' />
     </div>

     <div className='conx2'>        
       <img className='mbx' src='../images/frame 5.png' alt='frame1' />

        <img className='mbx' src='../images/frame 6.png' alt='frame1' />

        <img className='mbx' src='../images/frame 7.png' alt='frame1' />

        <img className='mbx' src='../images/frame 8.png' alt='frame1' />
        
    </div>

    <div className='conx2'>        
       <img className='mbx' src='../images/frame 5.png' alt='frame1' />

        <img className='mbx' src='../images/frame 6.png' alt='frame1' />

        <img className='mbx' src='../images/frame 7.png' alt='frame1' />

        <img className='mbx' src='../images/frame 8.png' alt='frame1' />
        
    </div>

    <div className='conx2 mbxx1'>        
       <img className='mbx' src='../images/frame 5.png' alt='frame1' />

        <img className='mbx' src='../images/frame 6.png' alt='frame1' />

        <img className='mbx' src='../images/frame 7.png' alt='frame1' />

        <img className='mbx' src='../images/frame 8.png' alt='frame1' />
        
    </div>
    
            <Footer/>
        </div>

    )
};

export default Place