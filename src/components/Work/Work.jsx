import React from 'react'
import './Work.scss'
import { Projects } from './Projects';
import ProjectsCarousel from './ProjectsCarousel';

const Work = () => {

  return (
    <div className="sec work" id="work">
        <h3>My Work</h3>
        <ProjectsCarousel projects={Projects}/>
    </div>
  )
}

export default Work