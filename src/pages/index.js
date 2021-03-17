import React from "react"
import Welcome from '../Components/Welcome/Welcome';
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import Seo from '../Components/Seo';
import './index.css';

export default function Home() {
  return (
    <section className='App'>
      <Seo />
      <Welcome />
      <Skills />
      <Projects />
      <Contact />
    </section>
  )
}
