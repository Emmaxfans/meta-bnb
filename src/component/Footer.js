import '../component/footer.css';

// Footer images
import meta2 from '../Assets/images/meta.png'
import fb from '../Assets/images/fb.png'
import ig from '../Assets/images/ig.png'
import twitter from '../Assets/images/twitter.png'

const Footer =() =>{
    return(
<div className='container-fluid footerxx'>

        
    <div className='bg-footer'>
    <div className='row pt-5'>
        <div className='col-lg-6 md-6 sm-6 footer-con1'>
            <div className='container meta-margin'>
            <img className='meta-footer1' src={meta2} alt='footer-meta'/>
            </div>

            <div className='container mt-5 meta-margin'>
            <img className='fb1' src={fb} alt='fb'/>
            <img className='fb' src={ig} alt='fb'/>
            <img className='fb' src={twitter} alt='fb'/>
            </div>   

        </div>

        <div className='col-lg-6 md-6 sm-6 footer-con2'>
        <table className="table table table-borderless  text-white">
        <thead className="">
<tr>
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
        <p className=' meta-margin'>© 2022 Metabnb</p>
    </div>

      
</div>

</div>

    )
};

export default Footer