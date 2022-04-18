import React from 'react';
import linkedinSvg from './linkedin.svg';
import githubSvg from './github.svg';
import pdf from './MattJWoodruff Resume (1).pdf';
import './Welcome.css';

const Welcome = () => {
    return (
        <section className='Welcome'>
            <h1>MATT WOODRUFF</h1>
            <h2>Software Engineer</h2>
            <nav>
                <a href='https://www.linkedin.com/in/matt-j-woodruff/' target='_blank' rel='noreferrer'>
                    <img src={linkedinSvg} 
                        alt='LinkedIn Icon' 
                        className='icons' />
                </a>
                <a href='https://github.com/mattwoodruff808' target='_blank' rel='noreferrer'>
                    <img src={githubSvg} 
                        alt='GitHub Icon' 
                        className='icons' />
                </a>
                <a href={pdf} 
                   target='_blank'
                   rel='noreferrer'
                   className='resume'>View My Resume</a>
            </nav>
        </section>
    )
}

export default Welcome;