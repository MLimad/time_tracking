import React, { useState } from 'react'

function Box({data,value}) {

  return (
    <div className='col-md-4 col-sm-6'>
           <section id='box-data'>
                        <div className="logo-box" style={{backgroundColor:data.bgColor}}>
                          <img src={`./images/icon-${data.title}.svg`} alt={data.title}  />
                        </div>
                        <div className="data-content">
                          <div className="box-name">
                            <h6>{data.title}</h6>
                            <img src="./images/icon-ellipsis.svg" alt="ellipsis" />
                          </div>
                          <div className="hours-num">
                            <h1>{Object.values(data.timeframes)[value].current}hrs</h1>
                            <p>Last Week - {Object.values(data.timeframes)[value].previous}hrs</p>
                          </div>
                        </div>
                    </section>
    </div>
  )
}

export default Box