import '../component/navbar.css';
import Connect from '../component/Connect';
import { Link } from 'react-router-dom'

const Navbar = () =>{
    return(
<div className='container-fluid navx'>
<nav className="navbar navbar-expand-lg navbar-light">
<div className="container-fluid">
<a className="navbar-brand text-white" href="/#">   
<img className='img1a img-fluid' src='./images/meta-nav.png' alt='Metabnb-nav'/>
</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse nav-float" id="navbarNav">
<ul className="navbar-nav">
  <li className="nav-item px-3">
    <Link to='/' className="nav-link active text-dark fs-font" aria-current="page">Home</Link>
  </li>
  <li className="nav-item px-3">
    <Link to='/place-to-stay' className="nav-link fs-font text-dark">Place to stay</Link>
  </li>

  <li className="nav-item px-3 signup2">
  <a  href='/#' className="nav-link fs-font text-dark">NFTs</a>

  </li>

  <li className="nav-item px-3">
    <Link to='/#' className="nav-link text-dark">Community</Link>
  </li>

  <li className="nav-item  btn-conx">


  {/* <!-- Button trigger modal */}

<button type="button" class="btn btn-connect" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Connect wallet
</button>
<Connect/>
  </li>
 
</ul>
</div>

</div>
</nav>

</div>
 )};

export default Navbar