import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import profile from '../../profile.svg';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';


function Home(){
    const el = React.useRef(null);
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Frontend Developer', 'ML Enthusiast', 'Web3 Afficiando', 'Writer'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  
    return(
        <div>
            <div className='first-page' id="home">
                <div className='image '>
                    <img  src={profile} alt= "about"/>
                </div>
                <div className='intro'>
                    <h6 style={{fontSize : '3vw', lineHeight:'4px'}}>Namaste! I Am</h6>
                    <h1 style={{fontSize : '7vw', }}>Tanu Shree</h1>
                    <div className="wrapper">
                            <div className="static-txt" >A <span className='dynamic-txt' style={{color:'#FC6D6D'}} ref={el} /></div>
                    </div>
                    <p style={{color:'black', fontSize : '1vw', lineHeight:'2px'}}>Cochin University of Science and Technology, Kochi</p>
                    <div className='social-media-icon ' style={{color:'rgb(17, 35, 47)'}}>
                        <a href='https://www.linkedin.com/in/tanuushree/'>
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <a href='https://twitter.com/tanuu_82'>
                            <FontAwesomeIcon icon={faXTwitter}/>
                        </a>
                        <a href='https://github.com/tanuushree'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        

    );

}

export default Home;