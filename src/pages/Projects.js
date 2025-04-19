import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';
import CategoryFilters from '../components/Projects/CategoryFilters';
import SkillFilters from '../components/Projects/SkillFilters';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSkill, setActiveSkill] = useState('All');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleSkillClick = (skill) => {
    setActiveSkill(skill);
  };

  const projectsToShow = data
    .filter(
      (project) => activeCategory === 'All'
           || project.categories.includes(activeCategory),
    )
    .filter(
      (project) => activeSkill === 'All'
           || (project.languages && project.languages.includes(activeSkill)),
    );
  return (
    <Main
      title="Projects"
      description="Learn about Vikalp Gandha's projects."
    >
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2 data-testid="heading">
              <Link to="/projects">Projects</Link>
            </h2>
            <p>
              A selection of projects that I’m not too ashamed of
            </p>
          </div>
        </header>
        <h3 style={{ fontSize: '0.9em' }}>Categories:</h3>
        <CategoryFilters
          activeCategory={activeCategory}
          handleClick={handleCategoryClick}
        />
        <div style={{ marginTop: '20px' }} /> {/* Add some space */}
        <h3 style={{ fontSize: '0.9em' }}>Skills:</h3>
        <SkillFilters
          activeSkill={activeSkill}
          handleClick={handleSkillClick}
        />
        {projectsToShow.map((project) => (
          <Cell data={project} key={project.title} />
        ))}
      </article>
    </Main>
  );
};

export default Projects;
