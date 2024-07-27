import React from 'react'
import Logo from '../assets/images/Logo.png'
import Logo_1 from '../assets/images/Logo-01.png'

function Companies_Logo() {
  return (
    <>
    <section className='Companies' id='companies'>  
          <div className='companies-img'> 
          <h1>Lorem Ipsum is simply dummy</h1>
            <img src={Logo_1} alt="" />
           <img src={Logo} alt="" />
           <img src={Logo_1} alt="" />
           <img src={Logo} alt="" />
         </div>
    </section>
    </>
  )
}

export default Companies_Logo