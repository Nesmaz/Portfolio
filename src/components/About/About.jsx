import React from 'react'
import './About.scss';
import js from '../../assets/js.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import sass from '../../assets/sass.png';
import c from '../../assets/c.png';
import react from '../../assets/science.png';
import wp from '../../assets/wordpress.png';
import git from '../../assets/git.png';
import gith from '../../assets/github.png';
import { FaDownload } from 'react-icons/fa';

const About = () => {

  return (
    <div className='sec about' id="about">

        <div className="text">
          <h3>Who Am I?</h3>
          <p>
          Hey,  my name is Nesma Abdel-azeem, I am a front-end web developer from Egypt.<br/> I am deeply passionate about web development, software engineering, cyber security, AI and technology in general.
          Beyond my technical pursuits, I have a profound love for languages.<br/>
          I love music, literature and poetry. I am fascinated by space and an animal lover.
          Iam always looking for new challenges and opportunities to grow as a web developer and as a person. 
          </p>
          <a href='https://docs.google.com/document/d/1gg2ch15LL5FJBHohVfgZsCjxgEz7rHV4_zmU3on8vdU/edit?usp=sharing'>
          <FaDownload className='dwn btn' />
          <button className='resume btn'> My resume</button>
          </a>
        </div>

        <h3 id="tec">Technologies</h3>
        
        <div className="skills">
          <div className="track">
          <div className="skill">
                <img src={js} alt="z" width={60}></img>
              </div>
              <div className="skill">
                <img src={html} alt="z" width={60}></img>
              </div>
              <div className="skill">
                <img src={css} alt="z" width={60}></img>
              </div>
              <div className="skill">
                <img src={sass} alt="z" width={60}></img>
              </div>
              <div className="skill">
                <img src={c} alt="z" width={60}></img>
              </div>
              <div className="skill">
                <img src={react} alt="z" width={60}></img>
              </div>
              <div className="skill">
                <img src={wp} alt="z" width={60}></img>
              </div>
              <div className="skill">
                <img src={git} alt="z" width={60}></img>
              </div>
              <div className="skill">
                <img src={gith} alt="z" width={60}></img>
              </div>

              <div className="skill">
                <img src={js} alt="z" width={60}></img>
              </div>
              <div className="skill">
                <img src={html} alt="z" width={60}></img>
              </div>
              <div className="skill">
                <img src={css} alt="z" width={60}></img>
              </div>
              <div className="skill">
                <img src={sass} alt="z" width={60}></img>
              </div>
              <div className="skill">
                <img src={c} alt="z" width={60}></img>
              </div>
              <div className="skill">
                <img src={react} alt="z" width={60}></img>
              </div>
              <div className="skill">
                <img src={wp} alt="z" width={60}></img>
              </div>
              <div className="skill">
                <img src={git} alt="z" width={60}></img>
              </div>
              <div className="skill">
                <img src={gith} alt="z" width={60}></img>
              </div>
          </div>
        </div>
    </div>
  )
}

export default About