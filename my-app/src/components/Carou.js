import React from 'react';
import { Carousel } from 'antd';
import './carou.css'

const items = [
  {
    key: '1',
    title: 'Find The Best Location To Relax',
    
  },
  {
  
    key: '2',
    title: ' Enjoy Your Holiday',
    
  },
  {
    key: '3',
    title: 'Search and Book Hotel',

    
  },
]

function Carou() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel >
        
            <section className="slide-form">
              <div className="container">
                <h2>Enjoy Your Holiday</h2>
                <span>Search and Book Hotel</span>

                <form action=''>
                  <input type={'text'} placeholder='Search City' ></input>
                  <div className='flex_space'>
                  <input type={'date'} placeholder='Check In '></input>
                  <input type={'date'} placeholder='Check Out'></input>
                <div className='flex_space'>
                  <input type={'number'} placeholder='Adult(s)'></input>
                  <input type={'number'} placeholder='Childreen(-12 years old)'></input>
                  <div className='flex_space'>
                  <input type={'number'} placeholder='Rooms'></input>
                  <button type="submit"  className='submit'> Submit </button>
                   </div>
                   </div>
                </div>
                </form>
              </div>
            </section>  
          
      </Carousel>
    </div>
  );
}


export default Carou
