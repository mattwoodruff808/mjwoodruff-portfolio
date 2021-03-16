import React from 'react';
import mjwPic from './portfolio-picture-mjw.jpg';
import jsLogo from '../../assets/javascript-logo.png';
import reactLogo from '../../assets/react-logo.png';
import reduxLogo from '../../assets/redux-logo.png';
import nodeLogo from '../../assets/node-logo.png';
import expressLogo from '../../assets/express-logo.png';
import postgresqlLogo from '../../assets/postgresql-logo.png';
import cssLogo from '../../assets/css-logo.png';
import htmlLogo from '../../assets/html-logo.png';
import gitLogo from '../../assets/git-logo.png';
import './Skills.css';

const Skills = () => {
    return (
        <section className='Skills'>
            <div className='blurb'>
                <img src={mjwPic}
                    alt='Matt J. Woodruff'
                    className='pic' />
                <div className='blurb-text'>
                    <p>Hi! My name is Matt Woodruff, and as a Software Engineer I bring a unique blend of soft skills and technical abilities to the table. My extensive experience in Sales and Client Retention has molded me to always think of my User. My experience coding in various languages and frameworks makes it possible to build exceptional dynamic projects from front to back. Please see my resume above for a complete list of my skills.</p>
                    <p>When I am not coding, I love spending time with my family, cooking, and road-tripping to new places. If you would like to collaborate on a project together or have a job proposition, please reach out to me! If you would simply like to debate which is the best TV series ever, and why it is Avatar: The Last Airbender, then don't hesitate to contact!</p>
                </div>
            </div>
            <div className='skills-box'>
                <h3>My Skills</h3>
                <section className='skills-list'>
                    <div>
                        <img src={jsLogo} 
                             alt='js-logo' 
                             className='skill-logos' />
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <img src={reactLogo} 
                             alt='react-logo' 
                             className='skill-logos' />
                        <p>React</p>
                    </div>
                    <div>
                        <img src={reduxLogo} 
                             alt='redux-logo' 
                             className='skill-logos' />
                        <p>Redux</p>
                    </div>
                    <div>
                        <img src={nodeLogo} 
                             alt='node-logo' 
                             className='skill-logos' />
                        <p>NodeJS</p>
                    </div>
                    <div>
                        <img src={expressLogo} 
                             alt='express-logo' 
                             className='skill-logos' />
                        <p>ExpressJS</p>
                    </div>
                    <div>
                        <img src={postgresqlLogo} 
                             alt='postgresql-logo' 
                             className='skill-logos' />
                        <p>PostgreSQL</p>
                    </div>
                    <div>
                        <img src={cssLogo} 
                             alt='css-logo' 
                             className='skill-logos' />
                        <p>CSS</p>
                    </div>
                    <div>
                        <img src={htmlLogo} 
                             alt='html-logo' 
                             className='skill-logos' />
                        <p>HTML</p>
                    </div>
                    <div>
                        <img src={gitLogo} 
                             alt='git-logo' 
                             className='skill-logos' />
                        <p>Git</p>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Skills;