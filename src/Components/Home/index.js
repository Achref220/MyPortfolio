import React, { useEffect, useState } from 'react'
import './index.scss'
import logoTitle from "../../assets/images/logo-a.png"
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'


export default function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['c', 'h', 'r', 'e', 'f'];
    const jobArray = ['a','','w', 'e', 'b', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    
  return (
    <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br/>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={logoTitle} alt="dev" />
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15}/>
            <br />
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={21}/>
            <br />
            </h1>
            <h2>Full stack developer / MERN Expert</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}
