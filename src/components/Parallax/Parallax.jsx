import React, { useEffect, useState } from 'react';
import './Parallax.scss'

const Parallax = () => {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = ()=> setOffsetY(window.scrollY)
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    
    <div className="parallax">

        <div className="mountains" style={{transform: `translateY(-${offsetY * 0.5}px)`}}>
            <div className="texto">
                <p style={{transform: `translateY(-${offsetY * 0.6}px)`}}>NESMA ABDEL-AZEEM</p>
                <h2 style={{transform: `translateY(-${offsetY * 0.5}px)`}}>Web developer</h2>
            </div> 
        </div>
        <div className='planets' style={{transform: `translateY(${offsetY * 0.5}px)`}}></div>
        <div className='astro'style={{transform: `translateY(${offsetY * 0.5}px)`}}></div>
    </div>
  )
}

export default Parallax