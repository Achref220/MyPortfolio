import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoA from '../../assets/images/logo-a.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faMailBulk, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function index() {
  return (
    <div className='nav-bar'>
        <Link className='logo' to="/" >
            <img src={LogoA} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                href="https://www.linkedin.com/in/achref-najeh-a742a6221/" 
                target="_blank" 
                rel='noreferrer'
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                href="https://github.com/Achref220" 
                target="_blank" 
                rel='noreferrer'
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                href="mailto:achrefnajeh5@gmail.com" 
                target="_blank" 
                rel='noreferrer'
                >
                    <FontAwesomeIcon icon={faMailBulk} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                href="https://www.codewars.com/users/Achref220" 
                target="_blank" 
                rel='noreferrer'
                >
                    <FontAwesomeIcon icon={faCodepen} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
  )
}
