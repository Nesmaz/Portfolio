

// function Main() {
//   // const gradientStyle = {
//   //   background: '#12c2e9',
//   //   background: '-webkit-linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',
//   //   backgroundImage: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',

//   // };
//     gsap.to(".mainImg", { y:-15, duration:4, ease:Back.inout, repeat:-1});
//     const tl = gsap.timeline;

//     gsap.to("#letters .letter", {
//       y:-20,
//        color:'#f4caff',
//         duration:1,
//          stagger:.2,
//           // repeat:1,
//            ease:Bounce
//            });

//   gsap.fromTo(".me", {y:-100, duration:2, repeat:1}, {y:5});

//     return (
//       <main className="sec main" >
//             <div className="wrapper">
//                 <div className="left">
//                 <p className='me' style={{ color: '#0dd438' }}>NESMA ABDEL-AZEEM</p>
//                   <div className="separat"></div>
//                   <div id='letters'>
//                     <div className='letter' >W</div>
//                     <div className='letter' >e</div>
//                     <div className='letter' >b </div>
//                     <span> </span>
//                     {/* <div style={{ width: 5 }}> </div> */}
//                     <div className='letter' >d</div>
//                     <div className='letter' >e</div>
//                     <div className='letter'>v</div>
//                     <div className='letter' >e</div>
//                     <div className='letter' >l</div>
//                     <div className='letter' >o</div>
//                     <div className='letter' >p</div>
//                     <div className='letter' >e</div>
//                     <div className='letter' >r</div>

//                   </div>
//                   {/* <h2>Web developer</h2> */}
//                   <div className="buttons">
//                     <button className='btn1'>Explore my work</button>
//                     <button className='btn2' >Contact me</button>
//                   </div>
//                  {/* <img src='./pngwing.com1.png'/> */}
//               </div>
//               <div className="right">
//                   <img className='mainImg' src="./1.png"/>
                  
                
//               </div>
//           </div>
//       </main>
//     )
//   }
  
//   export default Main;


//   ------------------------


//   import React from 'react';
// import './Parallax.scss';


// const Parallax = ({type}) => {
//   return (

//     <div className='parallax'>
//         {/* <p className='me' style={{ color: '#0dd438' }}>NESMA ABDEL-AZEEM</p>
//         <div className="separator"></div>
//         <div id='letters'>
//         <div className='letter' >N</div>
//         <div className='letter' >E</div>
//         <div className='letter' >S</div>
//         <div className='letter' >M</div>
//         <div className='letter' >A</div>
//         <span> </span>
//         <div className='letter'>A</div>
//         <div className='letter' >B</div>
//         <div className='letter' >D</div>
//         <div className='letter' >E</div>
//         <div className='letter' >L</div>
//         <div className='letter' >-</div>
//         <div className='letter' >A</div>
//         <div className='letter' >Z</div>
//         <div className='letter' >E</div>
//         <div className='letter' >E</div>
//         <div className='letter' >M</div>
//         </div>
//         {/* <h2></h2> */}
//         <div className="mountains"></div>
//         <div className="planets"></div>
//         <div className="stars"></div> 
//     </div>
//   )
// }

// export default Parallax