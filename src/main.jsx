import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Smartphone,
  Cloud
} from 'lucide-react';

import flashStudyImage from './assets/FLASHSTUDY.png';
import auraQuotesImage from './assets/AURA_Quotes.png';

import './style.css';

const projects = [
  {
    number: '01',
    title: 'Flash Study',
    category: 'MOBILE APP · CODEALPHA',
    description: 'A flashcard-based learning app designed to help users review concepts through questions and answers.',
    stack: ['Flutter', 'Android Studio'],
    image: flashStudyImage,
    github: 'https://github.com/nikitha2007-byte/CodeAlpha_Flashcard_Quiz',
  },
  {
    number: '02',
    title: 'Aura Quotes',
    category: 'MOBILE APP · CODEALPHA',
    description: 'A quote application with a clean interface for discovering and saving inspirational quotes.',
    stack: ['Flutter', 'REST API'],
    image: auraQuotesImage,
    github: 'https://github.com/nikitha2007-byte/Random_quote_generator',
  },
];

function App() {
  return <>
    <header className="nav wrap">
      <a className="brand" href="#home"><span className="brand-mark">N</span><span>NIKITHA SUNKARA<span className="brand-sub">PORTFOLIO · 2026</span></span></a>
      <nav><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact" className="nav-cta">Let's connect <ArrowUpRight size={15}/></a></nav>
    </header>

    <main>
      <section className="hero wrap" id="home">
        <div className="hero-copy" style={{ width: "100%", margin: "0 auto" }}>
          <div className="eyebrow"><span className="status-dot"/> COMPUTER SCIENCE & IT STUDENT</div>
          
          <h1 style={{ fontSize: "6rem", fontWeight: "900", lineHeight: "1.1", marginBottom: "20px" }}>
            Naga <br/> Nikitha
          </h1>
          
          <p className="hero-intro">A student exploring software development, mobile apps, and cloud technology. I'm learning by building, experimenting, and improving one project at a time.</p>
          <div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="text-link" href="mailto:nikithasunkara2007@gmail.com">Get in touch <ArrowUpRight size={15}/></a></div>
          <div className="hero-meta"><span>BASED IN, INDIA</span><span>OPEN TO LEARNING OPPORTUNITIES</span></div>
        </div>
      </section>

      <section className="ticker"><div>LEARN BY DOING <span>✳</span> STAY CURIOUS <span>✳</span> BUILD WITH PURPOSE <span>✳</span> LEARN BY DOING <span>✳</span> STAY CURIOUS <span>✳</span></div></section>

      <section className="about section wrap" id="about">
        <div className="section-label"><span>01</span> / A LITTLE ABOUT ME</div>
        <div className="about-grid"><h2>I'm here to<br/>Build practical solutions <em>through clean code.</em></h2><div className="about-body"><p>I am a 3rd-year B.Tech student in Computer Science & IT at KL University. Through my academic projects and internships, I have gained hands-on experience in mobile app development, web basics, databases, and cloud computing.</p><p>I am always trying to learn new technologies. I like asking questions, figuring out how things work behind the scenes, and getting better at coding every day.</p><div className="education"><span className="education-icon"><Code2 size={20}/></span><div><strong>KL University</strong><span>B.Tech · Computer Science & Information Technology · 2024–2028</span></div></div></div></div>
      </section>

      <section className="skills-band"><div className="wrap skills-inner"><div><span className="section-label light-label">WHAT I'M EXPLORING</span><h2>Tools I've been<br/><em>working with.</em></h2></div><div className="skill-list"><div><Code2/><span><strong>Programming</strong><small>C · Java · Python </small></span></div><div><Smartphone/><span><strong>App & Web</strong><small>Flutter · HTML · CSS · JavaScript</small></span></div><div><Cloud/><span><strong>Tools & Cloud</strong><small>Git · GitHub · SQL · AWS fundamentals</small></span></div></div></div></section>

      <section className="projects section wrap" id="projects">
        <div className="section-label"><span>02</span> / SELECTED PROJECTS</div>
        <div className="projects-heading"><h2>Some things I've<br/><em>worked on.</em></h2><p>A few projects from my learning journey. Open the repositories to explore the code and implementation.</p></div>
        <div className="project-grid">{projects.map(p => <article className="project-card" key={p.number}>
          <div className="project-image"><img src={p.image} alt={`${p.title} project preview`}/><span className="project-number">{p.number}</span></div>
          <div className="project-info"><div className="project-category">{p.category}</div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div><div className="project-footer"><span className="preview-note">{p.note}</span><a href={p.github} target="_blank" rel="noreferrer" aria-label={`View ${p.title} on GitHub`}><Github size={17}/> View code <ArrowUpRight size={15}/></a></div></div>
        </article>)}</div>
      </section>

      <section className="experience section wrap"><div className="section-label"><span>03</span> / LEARNING & EXPERIENCE</div><div className="experience-grid"><h2>Learning beyond<br/><em>the classroom.</em></h2><div className="timeline"><article><div className="timeline-date">JUN — JUL 2026</div><div><h3>APSSDC · AWS Cloud Computing & DevOps</h3><p>Learned about AWS cloud services, cloud computing fundamentals, and cloud deployment concepts.</p></div></article><article><div className="timeline-date">JUN 2026</div><div><h3>CodeAlpha · App Development Intern</h3><p>Developed Flash Study and Aura Quotes using Flutter and Dart, and used Git and GitHub during development.</p></div></article></div></div></section>

      <section className="contact" id="contact"><div className="wrap contact-inner"><div className="section-label light-label"><span>04</span> / CONTACT</div><h2>Let's make something<br/><em>meaningful.</em></h2><p>I'm open to learning opportunities, collaboration, and connecting with people who love building things.</p><a className="button button-light" href="mailto:nikithasunkara2007@gmail.com">Say hello <Mail size={17}/></a><div className="contact-links"><a href="https://github.com/nikitha2007-byte" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/in/nikitha-sunkara-bbb68736a/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href="mailto:nikithasunkara2007@gmail.com"><Mail size={17}/> Email <ArrowUpRight size={14}/></a></div></div></section>
    </main>
    <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">N</span><span>NIKITHA SUNKARA<span className="brand-sub">MADE WITH CURIOSITY</span></span></a><span>© 2026 NIKITHA SUNKARA</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);