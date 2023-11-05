import React from 'react'
import { useState } from 'react'
import { Projects } from './Projects';
import './Work.scss'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';

const ProjectsCarousel = ({projects}) => {
const [activeIndex, setActiveIndex] = useState(0);
const length = projects.length;

const nextProject = () =>{
  setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1);
};

const prevProject = () =>{
  setActiveIndex(activeIndex === 0 ? length - 1 : activeIndex - 1);
};


  return (
    <div className='carousel'>
      <div className='pro-btn'>
      <FaArrowAltCircleLeft className="left-icon" onClick={prevProject} />
      <FaArrowAltCircleRight className="right-icon" onClick={nextProject} />
      </div>
    {Projects.map((project, index) =>{
            return (
              
              <div
                className={index === activeIndex ? "active" : "pro"}
                key={index} >  
                {index === activeIndex && (
                  <>
                <iframe  className="pro-img" src={project.src} title={project.title} allowFullScreen></iframe>
                <h5 className='pro-name'>{project.title}</h5>
                </>
                )}
              </div>
            ) 
            })}
    </div>

  );
};

export default ProjectsCarousel