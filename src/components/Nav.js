import React, { useState } from 'react'

function Nav({navIndex,value}) {

  const navList = ["Daily","Weekly","Monthly"]

  return (
    <section id='nav'>
                    <ul>
                      {
                        navList.map((nav,index)=>(
                          <li key={index}><button  className={value === index ? "active" : null} onClick={()=>navIndex(index)}>{nav}</button></li>
                        ))
                      }
                    </ul>
     </section>
  )
}

export default Nav