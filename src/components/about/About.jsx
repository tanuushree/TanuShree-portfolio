import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquare, faCode, faBracketsCurly} from '@fortawesome/free-solid-svg-icons';
import './about.css';


function About(){
    return(
        
            <div className='me'>
                <div className='title'>
                    <h4>About Me</h4>
                    <p className='greet'><FontAwesomeIcon icon={faSquare} style={{color:'#FF7545', paddingRight:'6px',width:'8px',height:'15px'}}></FontAwesomeIcon>in today's episode of knowing me <FontAwesomeIcon icon={faSquare} style={{color:'#FF7545', paddingLeft:'6px',width:'8px',height:'15px'}}></FontAwesomeIcon></p>
                </div>
                <div className="main">
                    <div className='skills'>
                    
                    <div className="content">
                        <p>Hey! I am Tanu Shree. At the moment, I am in the midst of pursuing my B.Tech degree in the field of Computer Science. Currently in my second year I am happy to state I have acquired few skills in the domain of Web Development although I still have a long list of skills to add to my assets. I have experience in Front-End Development and professional Content Writing. </p>
                    </div>
                </div>
                
            </div>
        
        </div>

    );

}

export default About;