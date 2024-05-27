import axios from 'axios';
// import React from 'react'
import React, { useState, useEffect } from 'react';



function Home() {
  const [card, setcard] = useState([]);
  useEffect(() => {
    async function getDatacard() {
      const response = await axios.get('http://localhost:3000/card');
      setcard(response.data);
    }
    getDatacard();
  }, []);
  return (
    <>
    <div className="container">
    <div className='slide'>
      <img src="https://preview.colorlib.com/theme/pato/images/master-slides-02.jpg.webp" alt=" acfadvfdf" />
    </div>
    <div className="row">
      <div className="col-lg-6 aling">
        <h2><i>Itailan Restaurant</i></h2>
        <h1 className='welcome'>Welcome</h1>
        <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
      </div>
      <div className="col-lg-6 .d-md-none .d-lg-block">
        <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" alt="" />
      </div>
    </div>
    <div className="row">
    {card.map(x => (
            <div className='col-lg-4 card' key={x.id}>
              <div><img  src={x.img} alt={x.title} width="50"/></div>
              <h>{x.title}</h>
              <p>{x.para}</p>
            </div>
          ))}
        </div>
    </div>
      
    </>
  )
}

export default Home
