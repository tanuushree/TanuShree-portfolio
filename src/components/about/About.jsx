import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquare, faCode, faBracketsCurly} from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify/react';
import './about.css';


function About(){
    return(
        <div className='about'>
            <div className='me'>
                <div className='title'>
                    <h4 style={{paddingTop:'4rem', fontFamily:'monospace'}}>Hi, I am Tanu. Nice to meet you.</h4>
                    <p className='greet'><FontAwesomeIcon icon={faSquare} style={{color:'#FF7545', paddingRight:'6px',width:'8px',height:'15px'}}></FontAwesomeIcon>in today's episode of knowing me <FontAwesomeIcon icon={faSquare} style={{color:'#FF7545', paddingLeft:'6px',width:'8px',height:'15px'}}></FontAwesomeIcon></p>
                </div>
                <div className="main">
                    
                    
                    <div className="content" >
                        <p>I'm a pre-final year Computer Science student with a passion for technology. My journey has led me to explore web development, machine learning, and most recently the world of Web3. I've been a finalist in Smart India Hackathon Grand Finale 2022 and and have participated in EthIndia TPG Hackerhouse 2022. I've also authored two research papers, with hopes of seeing them published someday. Explore my work and join me in co-creating projects.
                        </p>
                        <button class="button" type="button">
                            <span class="button__text">Get    CV</span>
                            <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                        </button>
                    </div>
                
                
            </div>
            <div className="section ">
                <div className="container">
                    {/* <div className="row"> */}
                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 cards" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s" style={{ minHeight: "300px" }}>
                                    <div className="features-small-item">
                                        <h4 className='text-[#FF7545] text-6xl font-semibold pt-4 font-serif' >Tech Stacks</h4>
                                        <div class="grid-container">
                                            <div class="grid-item"><Icon icon="teenyicons:c-solid" color="#11232f" height="100" /><h5 style={{color:'#FF7545', fontFamily:'initial'}}>C</h5></div>
                                            <div class="grid-item"><Icon className="icon" icon="mdi:language-cpp" color="#11232f" height="100" /><h5 style={{color:'#FF7545', fontFamily:'initial'}}>C++</h5></div>
                                            <div class="grid-item"><Icon className="icon" icon="bxl:java" color="#11232f" height="100" /><h5 style={{color:'#FF7545', fontFamily:'initial'}}>Java</h5></div>  
                                            <div class="grid-item"><Icon className="icon" icon="teenyicons:python-solid" color="#11232f" height="100"/><h5 style={{color:'#FF7545', fontFamily:'initial'}}>Python</h5></div>
                                            <div class="grid-item"><Icon className="icon" icon="ri:javascript-fill" color="#11232f" height="100" /><h5 style={{color:'#FF7545', fontFamily:'initial'}}>Javascript</h5></div>
                                            <div class="grid-item"><Icon className="icon" icon="simple-icons:solidity" color="#11232f" height="100" /><h5 style={{color:'#FF7545', fontFamily:'initial'}}>Solidity</h5></div>  
                                            <div class="grid-item"><Icon className="icon" icon="icomoon-free:html-five" color="#11232f" height="100" /><h5 style={{color:'#FF7545', fontFamily:'initial'}}>HTML</h5></div>
                                            <div class="grid-item"><Icon className="icon" icon="uiw:css3" color="#11232f" height="100" /><h5 style={{color:'#FF7545', fontFamily:'initial'}}>CSS</h5></div>
                                            <div class="grid-item"><Icon className="icon" icon="teenyicons:react-outline" color="#11232f" height="100"/><h5 style={{color:'#FF7545', fontFamily:'initial'}}>React.js</h5></div> 
                                            <div class="grid-item"><Icon icon="devicon-plain:mysql" color="#11232f" width="100" height="100" /><h5 style={{color:'#FF7545', fontFamily:'initial'}}>MySQL</h5></div>
                                            <div class="grid-item"><Icon icon="simple-icons:firebase" color="#11232f" width="100" height="100" /><h5 style={{color:'#FF7545', fontFamily:'initial'}}>Firebase</h5></div> 
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

    );

}

export default About;