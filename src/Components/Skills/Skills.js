import React from 'react';
import mjwPic from './portfolio-picture-mjw.jpg';
import jsLogo from '../../assets/javascript-logo.png';
import './Skills.css';

const Skills = () => {
    return (
        <section className='Skills'>
            <div className='blurb'>
                <img src={mjwPic} 
                    alt='Matt J. Woodruff' 
                    className='pic' />
                <p>Hi! My name is Matt Woodruff, and as a Software Engineer I bring a unique blend of soft skills and technical abilities to the table. My extensive experience in Sales and Client Retention has molded me to always think of my User. My experience coding in various languages and frameworks makes it possible to build exceptional dynamic projects from front to back.</p>
                <p>When I am not coding, I love spending time with my family, cooking, and road tripping to new places. If you would like to collaborate on a project together or have a job proposition, please reach out to me! If you would simply like to debate which is the best TV series ever, and why it is Avatar: The Last Airbender, then don't hesitate to contact!</p>
            </div>
            <div className='skills-list'>
                <h3>My Skills</h3>
                <ul>
                    <div className='flex-list'>
                        <img src={jsLogo} alt='js-logo' className='skill-logos'/>
                        <li>JavaScript</li>
                    </div>
                    <li>React</li>
                    <li>Redux</li>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>Axios</li>
                    <li>BcryptJS</li>
                    <li>PostgreSQL</li>
                    <li>Massive</li>
                    <li>CSS</li>
                    <li>HTML5</li>
                    <li>REST</li>
                    <li>Git</li>
                </ul>
            </div>
        </section>
    )
}

export default Skills;