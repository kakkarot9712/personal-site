import React from 'react';
import PropTypes from 'prop-types';

import { skills as skillData } from '../../data/resume/skills';

const SkillFilters = ({ activeSkill, handleClick }) => {
  const skills = skillData.filter((skill) => skill.displayInProject);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 0',
      flexWrap: 'wrap', // Add this line
      gap: '10px', // Add some spacing between buttons
    }}
    >
      {skills.map((skill) => (
        <button
          key={skill.title}
          className={`skillbutton ${
            activeSkill === skill.title ? 'skillbutton-active' : ''
          }`}
          type="button"
          onClick={() => handleClick(activeSkill === skill.title ? 'All' : skill.title)}
          title={activeSkill === skill.title ? 'Deselect' : 'Select'}
        >
          {skill.title}
        </button>
      ))}
    </div>
  );
};

SkillFilters.propTypes = {
  activeSkill: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SkillFilters;
