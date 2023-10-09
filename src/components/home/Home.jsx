import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import profile from '../../profile.svg';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';


// ... (previous imports)

function Home() {
    const el = React.useRef(null);
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Frontend Developer', 'ML Enthusiast', 'Web3 Aficionado', 'Writer'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  
    return (
      <div>
        <div className='first-page' id="home">
          <img className='girl-img' src={profile} alt="about" />
         
          <div className='intro'>
            <h6>Namaste! I Am</h6>
            <h1>Tanu Shree</h1>
            <div className="wrapper">
              <div className="static-txt">A <span className='dynamic-txt' style={{ color: '#FC6D6D' }} ref={el} /></div>
            </div>
            <p>Cochin University of Science and Technology, Kochi</p>
            <div className='social-media-icon'>
              <a href='https://www.linkedin.com/in/tanuushree/'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href='https://twitter.com/tanuu_82'>
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href='https://github.com/tanuushree'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  