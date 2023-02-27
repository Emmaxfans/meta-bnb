import '../Assets/style/body.css'

// body Images
import fourpic from '../Assets/images/four-pic.png'
import mbtoken from '../Assets/images/mbtoken.png'
import metamask from '../Assets/images/metamaskbnb.png'
import openbnb from '../Assets/images/openbnb.png'
import frame1 from '../Assets/images/frame 1.png'
import frame2 from '../Assets/images/frame 2.png'
import frame3 from '../Assets/images/frame 3.png'
import frame4 from '../Assets/images/frame 4.png'
import frame5 from '../Assets/images/frame 5.png'
import frame6 from '../Assets/images/frame 6.png'
import frame7 from '../Assets/images/frame 7.png'
import frame8 from '../Assets/images/frame 8.png'
import threepic from '../Assets/images/three-pic.png'



const Body =() =>{
    return(
<div className='container-fluid font-body'>

<div className='row conx-1'>

    <div className="col-lg-6 md-6 sm-6 homex">
     <div className="home-heading">
       <h1 className="home-heading-h1">Rent a <span className="heading-text">Place</span> away from <span className="heading-text">Home</span> in the{" "}
         <span className="heading-text">Metaverse</span>
       </h1>
       <p className="home-heading-p">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone.</p>
     </div>

       <div className="search-bar">
         <input className="input-search" type="text" placeholder="Search for location" />
          <a href="/" className="search-bar-a"> Search </a>
        </div>

     </div> 


      <div className='col-lg-6 md-6 sm-6'>

      <img className='four-pic' src={fourpic} alt='four-pic' />
      </div> 
    </div>

    <div className='conx'>
        
            <img className='mb img-fluid' src={mbtoken} alt='mbtoken' />

            <img className='img-fluid' src={metamask} alt='metamask' />

            <img className='img-fluid' src={openbnb} alt='opensea' />
    </div>

    <div className=''>
        <h1 className='text-center mb-5'>Inspiration for your next Adventure</h1>
        
        <div className='container-fluid conxx'>
            
            <img className='mb' src={frame1} alt='frame1' />
                
            <img className='mb' src={frame2} alt='frame1' /> 
            
            <img className='mb' src={frame3} alt='frame1' />

            <img className='mb' src={frame4} alt='frame1' />
     </div>

     <div className='container-fluid conxx'>
          
<img className='mb' src={frame5} alt='frame1' />

<img className='mb' src={frame6} alt='frame1' />

<img className='mb' src={frame7} alt='frame1' />

<img className='mb' src={frame8} alt='frame1' />

</div>
    </div>


    <div className="metaxx home-end">

        <div className='metax'>
        <h1>Metabnb NFTs</h1>
      <p>
        Discover our NFT gift collection. Loyal customers gets amazing gift
        cards which are traded as NFTs. These NFTs gives our customer access
        to loads of our exclusive services.
      </p>
      <button className="home-end-button">Learn more</button>
        </div>

        <div className='con-pic'>
          <img className='three-pic img-fluid' src={threepic} alt='three-pic' />
        </div>

    </div>
  </div>


    )
};

export default Body