import "../component/navbar.css"
const Connect =() =>{
    return(

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
</div>

    )
};

export default Connect

