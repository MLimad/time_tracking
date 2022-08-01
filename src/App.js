import React, { useState } from 'react';
import './App.css';
import Boxes from './components/Boxes';
import Nav from './components/Nav';
import User from './components/User';
import data from './data.json'

function App() {
  const [value,setValue] = useState(0);

  const navIndex = (index) =>{
    setValue(index)
  }


 
  return (
    
    <div className="App">
     <main>
        <div className="container">
        <div className="row">
          <div className="col-md-3">
              <User Username="Jeremy Robson" />
              <Nav navIndex={navIndex} value={value}/>
          </div>
            <div className="col-md-9">
              <div className="row">
                  <Boxes data={data} value={value} />
              </div>
            </div>
          </div>
        </div>
     </main>
    </div>
  );
}

export default App;
