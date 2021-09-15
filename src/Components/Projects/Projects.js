import React from 'react';
import simpleThingsPic from '../../assets/simple-things-screen.png';
import hungreePic from '../../assets/hungree-screen.png';
import './Projects.css';

const Projects = () => {
    return (
        <section className='Projects'>
            <h3>Projects</h3>
            <section className='project-flex'>
                <img src={simpleThingsPic}
                    alt='The Simple Things Website'
                    className='project-pics' />
                <div className='project-info'>
                    <h4>The Simple Things</h4>
                    <p>A family recipes website, designed for searching, accessing, and commenting on individual family recipes! No more texting the entire family to try and remember a favorite childhood recipe.</p>
                    <div className='project-skills'>
                        <p>React</p>
                        <p>React Hooks</p>
                        <p>Redux</p>
                        <p>NodeJS</p>
                        <p>ExpressJS</p>
                        <p>Axios</p>
                        <p>Bcrypt</p>
                        <p>PostgreSQL</p>
                        <p>Massive</p>
                    </div>
                    <p>Open Source | Personal Project</p>
                    <div className='button-flex'>
                        {/* <a href='https://the-simple-things.mattjwoodruff.com/#/'
                            target='_blank'
                            rel='noreferrer'
                            className='project-btns'>Live Site</a> */}
                        <a href='https://github.com/mattwoodruff808/personal-project'
                            target='_blank'
                            rel='noreferrer'
                            className='project-btns'>GitHub Repo</a>
                    </div>
                </div>
            </section>
            <section className='project-flex'>
                <img src={hungreePic}
                    alt='Hungree Website'
                    className='project-pics' />
                <div className='project-info'>
                    <h4>Hungree</h4>
                    <p>Ever find you and your significant other arguing about where to eat? None of your co-workers want to choose where to eat today? Worry no more, Hungree is here to help facilitate that decision, ultimately avoiding hanger and hurt feelings!</p>
                    <div className='project-skills'>
                        <p>React</p>
                        <p>React Hooks</p>
                        <p>NodeJS</p>
                        <p>ExpressJS</p>
                        <p>PostgreSQL</p>
                        <p>SCSS</p>
                        <p>Amazon S3</p>
                        <p>Yelp API</p>
                        <p>Socket.io</p>
                    </div>
                    <p>Open Source | Collaboration</p>
                    <div className='button-flex'>
                        {/* <a href='https://hungree.netlify.app/#/'
                            target='_blank'
                            rel='noreferrer'
                            className='project-btns'>Live Site</a> */}
                        <a href='https://github.com/restaurant-tinder-WR8/reastaurant-tinder'
                            target='_blank'
                            rel='noreferrer'
                            className='project-btns'>GitHub Repo</a>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Projects;