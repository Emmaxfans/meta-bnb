import '../pages/Navbar.css';
// import { link } from 'react-router-dom'

const Navbar = () =>{
    return(
        <div>
<div>
<nav className="navbar navbar-expand-lg navbar-light">
<div className="container-fluid">
<a className="navbar-brand text-white" href="/#">   
<img className='img1a img-fluid' src='./images/Vector.png' alt='foodhub1'/>
<img className='meta-pic' src="./images/metabnb.png" alt="metabnb" />
</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse nav-float" id="navbarNav">
<ul className="navbar-nav">
  <li className="nav-item px-3">
    <a href='/' className="nav-link active text-dark fs-font" aria-current="page">Home</a>
  </li>
  <li className="nav-item px-3">
  <a  href='/Login' className="nav-link fs-font text-dark">Place to stay</a>
  </li>

  <li className="nav-item px-3 signup2">
  <a  href='/Sign-Up' className="nav-link fs-font text-dark">NFTs</a>

  </li>

  <li className="nav-item px-3">
    <a href='Sign-Up' className="nav-link text-dark">Community</a>
  </li>

  <li className="nav-item px-3 btn-mobile">
  <a href='Sign-Up' className="nav-link text-white"><button className='btn-connect'>Connect wallet</button></a>
  </li>

 
</ul>
</div>

<div className='navbar-collapse nav-float btn-float'>
    {/* <li className="nav-item px-3"> */}
    <a href='Sign-Up' className="nav-link text-white"><button className='btn-connect'>Connect wallet</button></a>
  {/* </li> */}
</div>

</div>
</nav>

</div>

</div>
    )
};

export default Navbar