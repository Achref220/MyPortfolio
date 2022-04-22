import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify';
import AnimatedLetters from '../AnimatedLetters';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';



const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    const refForm = useRef()
    const notify1 = () => toast.success("Form sent successfully", { autoClose: 8000 });

    const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_n6uoi14', 'template_bj71mhd', refForm.current, 'user_cXrxoulOrzG3kAmHG1Txm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        notify1()
    };
    return (
        <>
        <ToastContainer />
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                    letterClass={letterClass}
                    />
                </h1>
                <p>
                    I am interested in jobs opportunities - freelancing, especially abmbitious or large projects,
                    However, if you have other request or question , dont hesitate to contact me using below 
                    form either .
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type="email" name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input placeholder='Subject' type="text" name='subject' required/>
                            </li>
                            <li>
                                <textarea name="message" placeholder='Message' required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Achref Najeh,
                <br />
                Tunisia,
                <br />
                rafeha city, aryanah 
                <span>achrefnajeh5@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[36.845368257475805, 10.117321542328908]} zoom={10}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/> 
                    <Marker position={[36.845368257475805, 10.117321542328908]}>
                        <Popup>Achref lives here</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}





export default Contact