import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faYoutube } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook,faYoutube,faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
    <section className='Footer' id='footer'>
        <div className='contact-info'>
            <div className='first-info'>
            <a href="#" className='logo' id='footer-logo'>Pro<span>One.</span></a>
            <p className='phone'>+0245********</p>
            <p>www.dronetechnology.com</p>
            <p className='address'>Orangi Town Karachi <br/> Pakistan #7500</p>
            </div>

            <div className='sec-info'>
               <h4>Company</h4>
               <p>Process</p>
               <p>Quality</p>
               <p>Gallery</p>
               <p>Tutorial</p>
            </div>

            <div className='third-info'>
              <h4>Provides</h4>
              <p>Travel Nurcess</p>
               <p>Facilities</p>
               <p>Contact Us</p>
               <p>Providers</p>
            </div>

            <div className='four-info'>
              <h4>Life Well Travelled</h4>
              <p>The job you want. The pay <br/> you deserve</p>
               <a href="#">www.dronetechnology.com</a>
               <div className='icons'>
               <FontAwesomeIcon className='fb' icon={faSquareFacebook} size="2xl" />
               <FontAwesomeIcon className='icon' icon={faTwitter} size="2xl" />
               <FontAwesomeIcon className='icon' icon={faInstagram} size="2xl" />
               <FontAwesomeIcon className='icon' icon={faYoutube} size="2xl" />
               <FontAwesomeIcon className='icon' icon={faLinkedin} size="2xl"/>   
               </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer