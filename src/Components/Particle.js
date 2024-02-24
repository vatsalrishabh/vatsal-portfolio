import React, { useState, useEffect } from 'react';
import './Particle.css'

const Particle = () => {
  // typewriter jsx starts
  
    
  return (
    <>
     <br/><br/><br/><br/><br/>
    <div className='Particle'>
   
    <div className='Particle-left'>
          <div className='Particle-autocomplete'>
              <h1>Hi,</h1>
              <div className='particle-h1-flex'>
                <h1> I'm </h1>
                <h1 className='h1red'> Vatsal </h1>
              </div>
              <div className='Particle-moving-text'>
              <h1 id='moving-text'> MERN Stack Developer </h1>
              </div>

          
          </div>
    </div>
    <div className='Particle-right'>
     <img src='https://media.istockphoto.com/id/518430830/photo/mr-nice-guy.jpg?s=1024x1024&w=is&k=20&c=-tmpE43koPiNHSRz0rJL4272E6G4Gg2iGXeUYXx0xyI=' alt='dpp'/>
    </div>
  </div>
    
    </>
    
  );
}

export default Particle;
