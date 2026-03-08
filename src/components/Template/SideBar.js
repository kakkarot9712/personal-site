import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Vikalp Gandha</h2>
        <p>
          <a href="mailto:contact@vikalpg.in">contact@vikalpg.in</a>
        </p>
      </header>
    </section>
    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Vikalp. I am a{' '}
        Backend-focused Software Engineer with ~3.5 years of experience building scalable 
        backend services and full-stack web applications using Node.js, TypeScript, NestJS, 
        React, and Next.js. Experienced in designing REST APIs, microservice-oriented architectures, 
        and cloud-native applications using PostgreSQL, MongoDB, AWS, and Docker. 
        Skilled in building real-time systems, integrating third-party APIs, and designing scalable backend workflows.
        Currently exploring container orchestration and DevOps practices using Kubernetes and Helm.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Vikalp Gandha <Link to="/">vikalpg.in</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
