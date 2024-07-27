import React from 'react'
import Drone_Remote from '../assets/images/Drone-remote.png'

function Memories() {
  return (
    <>
    <section className='Memories' id='memories'>
       <div className='Memories-text'>
       <h1>Get special memories <br/> with drone videography</h1>
          <p>Drone videography allows you to capture videos from the <br/> air which is not possible by human beings. There are <br/> different types of drones sizes and designs with different <br/> features and uses.</p>
          <div className='button'>
             <a href="#" className='btn3'>More Option</a>
          </div>
       </div>

       <div className='Memories-img'>
         <img src={Drone_Remote} alt="" />
       </div>
    </section>
    </>
  )
}

export default Memories