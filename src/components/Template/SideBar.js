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
        fullstack Developer with over 1.5 years of experience in MERN Stack development,{' '}
        specializing in backend technologies.{' '}
        Proficient in ReactJS, Next.js, Node.js, Ethereum blockchain development,{' '}
        Solana Blockchain Development and GPT AI-related libraries such as
        Langchain.
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
