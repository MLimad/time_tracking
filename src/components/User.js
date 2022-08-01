import React from 'react'

function User({Username}) {
  return (
    <section id='profile-user'>
                <div className="avatar">
                  <a href="./images/image-jeremy.png" target="_blank">
                  <img src="./images/image-jeremy.png" alt="avatar" /></a>
                </div>
                <div className="name-user">
                  <p>report for</p>
                  <h1>{Username}</h1>
                </div>
    </section>
  )
}

export default User