import React from 'react'
import Button from '../assets/images/Drone.png'

function Home() {
  return (
    <>
    <section className='Home' id='home'>
      <div className='Home-text'>
          <h1>The Ultraportable <br/> Drone for the <br/> Best Video</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit.Quos id corporis ex necessitatibus. Error <br/> ab neque esse alias, recusandae nihil</p>
          <div className='button'>
             <a href="#" className='btn1'>Buy Now</a>
          </div>
      </div>

      <div className='Home-img'>
         <img src={Button} alt="" />
      </div>

    </section>
    </>
  )
}

export default Home