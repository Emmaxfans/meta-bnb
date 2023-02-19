import '../component/navbar.css';
import Connect from '../component/Connect';
import { Link } from 'react-router-dom'

const Navbar = () =>{
    return(
<div className='container-fluid navx'>
<div>
<nav className="navbar navbar-expand-lg navbar-light">
<div className="container-fluid">
<a className="navbar-brand text-white" href="/#">   
<img className='img1a img-fluid' src='./images/meta-nav.png' alt='Metabnb-nav'/>
{/* <img className='meta-pic' src="./images/metabnb.png" alt="metabnb" /> */}
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
{/* <!-- Modal --> */}

{/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Connect Wallet</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Choose your preferred wallet</p>
      <a href="/#" className="btn-popup1"><img src='../images/metamask-connect.png' alt="texting" /></a>
        <a href="/#" className="btn-popup1"><img src='../images/walletconnect.png' alt="texting" /></a>
      </div>
    </div>
  </div>
</div> */}

  </li>

 
</ul>
</div>

</div>
</nav>

</div>

</div>
    )
};

export default Navbar