import React from 'react';
import PropTypes from 'prop-types';

const getRows = (courses) => courses
  .sort((a, b) => {
    let ret = 0;
    if (a.university > b.university) ret = -1;
    else if (a.university < b.university) ret = 1;
    else if (a.number > b.number) ret = 1;
    else if (a.number < b.number) ret = -1;
    return ret;
  })
  .map((course) => (
    <article key={course.title} className="certidegree-container">
      <li style={{ listStyleType: 'square' }}>
        <a href={course.link}>{course.title} </a>by {course.university}
      </li>
    </article>
  ));

const Courses = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Certifications</h3>
    </div>
    <ul className="course-list">{getRows(data)}</ul>
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      number: PropTypes.string,
      link: PropTypes.string,
      university: PropTypes.string,
    }),
  ),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
