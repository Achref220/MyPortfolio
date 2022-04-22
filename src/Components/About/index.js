import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  
  useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={8} 
          />
        </h1>
        
        <p> &lt;p&gt; My name is Achref Najeh im a full stack web developer, 
          im very passionate and serious about taking new experiences and learing 
          new stuff in this field ...</p>
        <p>adept in stages of advanced web development. Knowledgeable in user interface, testing, 
          and debugging processes. Bringing forth expertise in design, 
          installation, testing and maintenance of web systems.</p>
        <p>Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, 
          including ReactJs, NodeJs, ExpressJs,  Redux, HTML, CSS, JS .  
          NoSQL Servers (MongoDB). Able to effectively self-manage during independent 
          projects, as well as collaborate in a team setting. &lt;/p&gt;</p>
      </div>

      <div className='stage-cube-cont'>
        <div className='spinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faReact} color="#0080FF"/>
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faJsSquare} color="#D7DF01"/>
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faNodeJs} color="#088A08"/>
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
          </div>
        </div>
      </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default About