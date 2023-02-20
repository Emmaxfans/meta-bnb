import '../pages/body.css'

const Body =() =>{

  // window.addEventListener('load', function() {
  //   document.body.style.opacity = 0.5;
  // })
    return(
<div className='container-fluid font-body'>

<div className='row conx-1'>

    <div className="col-lg-6 md-3 sm-6 homex">
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


      <div className='col-lg-6 md-3 sm-6'>

      <img className='four-pic' src='../images/four-pic.png' alt='four-pic' />
      </div> 
    </div>

    <div className='conx'>
        
            <img className='mb img-fluid' src='../images/mbtoken.png' alt='mbtoken' />

            <img className='img-fluid' src='../images/metamaskbnb.png' alt='metamask' />

            <img className='img-fluid' src='../images/openbnb.png' alt='opensea' />
    </div>

    <div className=''>
        <h1 className='text-center mb-5'>Inspiration for your next Adventure</h1>
        
        <div className='container-fluid conxx'>
            
            <img className='mb' src='../images/frame 1.png' alt='frame1' />
                
            <img className='mb' src='../images/frame 2.png' alt='frame1' /> 
            
            <img className='mb' src='../images/frame 3.png' alt='frame1' />

            <img className='mb' src='../images/frame 4.png' alt='frame1' />
     </div>

     <div className='container-fluid conxx'>
          
<img className='mb' src='../images/frame 5.png' alt='frame1' />

<img className='mb' src='../images/frame 6.png' alt='frame1' />

<img className='mb' src='../images/frame 7.png' alt='frame1' />

<img className='mb' src='../images/frame 8.png' alt='frame1' />

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
      <a className="home-end-button" href="/#"> Learn more </a>
        </div>

    </div>

    <div className=''>

        <img className='three-pic' src='../images/three-pic.png' alt='three-pic' />

    </div>
  </div>


    )
};

export default Body