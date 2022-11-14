

import '../pages/Footer.css';
// import fb from "../images/fb.png";

const Footer =() =>{
    return(
<div className='container-fluid'>

        
    <div className='bg-footer'>
    <div className='row pt-5'>
        <div className='col-lg-6 md-6 sm-6 footer-con1'>
            <div className='container meta-margin'>
            <img className='meta-footer1' src='../images/meta.png' alt='footer-meta'/>
            {/* <img className='footer-meta1' src='../images/footer-meta1.png' alt='footer-meta'/> */}
            </div>

            <div className='container mt-5 meta-margin'>
            <img className='fb1' src='../images/fb.png' alt='fb'/>
            <img className='fb' src='../images/ig1.png' alt='fb'/>
            <img className='fb' src='../images/twitter.png' alt='fb'/>
            </div>   

        </div>

        <div className='col-lg-6 md-6 sm-6 footer-con2'>
        <table className="table table table-borderless  text-white">
        <thead className="">
<tr cl>
<th scope="col" className=''>Community</th>
<th scope="col">Places</th>
<th scope="col">About Us</th>
</tr>
</thead>

<tbody>
<tr className='td-fontsize' >
<td>NFT</td>
<td>Castle</td>
<td>Roadmap</td>
</tr>

<tr className='td-fontsize'>
<td>Token</td>
<td>Farms</td>
<td>Creator</td>
</tr>

<tr className='td-fontsize'>
<td>Landlord</td>
<td>Beach</td>
<td>Career</td>
</tr>

<tr className='td-fontsize'>
<td>Discord</td>
<td>Learn More</td>
<td>Contact us</td>
</tr>

</tbody>
</table>

        </div>
        <p className=' meta-margin'>@ 2022 Metabnb</p>
    </div>

      
</div>

</div>

    )
};

export default Footer