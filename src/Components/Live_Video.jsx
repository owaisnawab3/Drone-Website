import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import Video from '../assets/Video/Drone-Video.mp4'
// import Drone_Image from '../assets/images/Drone-img.jpg'
import Drone_Image1 from '../assets/images/Drone-img-01.jpg'


function Live_Video() {
  return (
    <>
    <section className='Video' id='video'>
        <div className='text-contant'>
           <h1>Live streaming View</h1>
           <p>Many things interpresed as video</p>
        </div>
      
        <div className='video'>
        {/* <FontAwesomeIcon className='play_btn' icon={faCirclePlay} size="2xl" /> */}
           <img src={Drone_Image1} alt="" />
        </div>
        <div className='play_btn'>
        <a href={Video}><FontAwesomeIcon icon={faCirclePlay} size="2xl" /></a>
        </div>

    </section>
    </>
  )
}

export default Live_Video