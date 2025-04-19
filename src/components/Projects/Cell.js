// 'jsx-closing-bracket-location': 1
// "operator-linebreak":0
import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs'; // Import dayjs

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBulletsVisible: false,
    };
    this.toggleBulletsVisibility = this.toggleBulletsVisibility.bind(this);
  }

  toggleBulletsVisibility() {
    this.setState((prevState) => ({
      isBulletsVisible: !prevState.isBulletsVisible,
    }));
  }

  render() {
    const { data } = this.props;
    const { isBulletsVisible } = this.state;
    return (
      <div className="cell-container">
        <article className="mini-post">
          <header>
            <h3>
              <a href={data.link}>{data.title}</a>
            </h3>
            <time className="published">
              {dayjs(data.date).format('MMMM, YYYY')}
            </time>
          </header>
          {data.image && <a href={data.link} className="image"><img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} /></a>}
          <div className="description">
            <p>{data.desc}</p>
            {data.bullets?.length && (
              <div>
                <button type="button" onClick={this.toggleBulletsVisibility}>
                  {isBulletsVisible ? 'Hide Description' : 'Show Description'}
                </button>
                <div className="description-normal" style={{ display: isBulletsVisible ? 'block' : 'none' }}>
                  {data.bullets.map((b) => <p className="not-p">- {b}</p>)}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    );
  }
}

Cell.propTypes = { // propTypes outside the class
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    bullets: PropTypes.arrayOf(PropTypes.string),
    categories: PropTypes.arrayOf(PropTypes.string),
    languages: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}; // propTypes closing bracket

export default Cell;
