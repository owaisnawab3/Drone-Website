import React from 'react'
// import Features_img from '../assets/images/Features-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp,faCamera,faMicrochip,faIcons} from '@fortawesome/free-solid-svg-icons'
import Drone_Feature from '../assets/images/drone-feature.png'


function Features() {
  return (
    <>
    <section className='Features' id='features'>
         <div className='Features-text'>
             <h1>Our Quadron Progress Excellent of Features</h1>
             <p>Drones can be a huge advantage to agencies fighting <br/> natural disasters.</p>
         </div>

         <div className='Features-img'> 
            <div className='quality-box'>
                <div className='qaulity-feature1'>
                  <FontAwesomeIcon className='orange' icon={faThumbsUp} size="2xl" />
                    <h4>High Quality</h4>
                    <p>Lorem ipsum dolor, sit amet <br/> consectetur adipisicing elit. <br/> Quod do!</p>
                </div>
                <div className='qaulity-feature2'>
                <FontAwesomeIcon className='grey' icon={faMicrochip} size="2xl" />
                    <h4>Latest Technology</h4>
                    <p>Lorem ipsum dolor, sit amet <br/> consectetur adipisicing</p>
                </div>
            </div>
            <div className='box-img'>
                <img src={Drone_Feature} alt="" />
            </div>
            <div className='quality-box'>
                <div className='qaulity-feature3'>
                <FontAwesomeIcon className='grey' icon={faCamera} size="2xl" />
                    <h4>Camera Quality</h4>
                    <p>Lorem ipsum dolor, sit amet <br/> consectetur adipisicing</p>
                </div>
                <div className='qaulity-feature4'>
                <FontAwesomeIcon className='orange' icon={faIcons} size="2xl" />
                    <h4>User Friendly</h4>
                    <p>Lorem ipsum dolor, sit amet <br/> consectetur adipisicing elit. <br/> Quod do!</p>
                </div>
            </div>
         </div>
    </section>
    </>
  )
}

export default Features