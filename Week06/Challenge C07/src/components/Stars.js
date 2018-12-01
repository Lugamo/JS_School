import React from 'react';
import '../styles/mainContent.scss';

// get the rating number and return the corresponding icons star tags
const Stars = (value) => {
  const stars = Math.floor(value);
  const output = [];
  for (let i = 1; i <= stars; i += 1) {
    output.push(<i className="fas fa-star" key={output.length} />);
  }
  if ((value - stars) > 0) {
    output.push(<i className="fas fa-star-half-alt" />);
    for (let i = (stars + 1); i < 5; i += 1) {
      output.push(<i className="far fa-star" key={output.length} />);
    }
  } else {
    for (let i = stars; i < 5; i += 1) {
      output.push(<i className="far fa-star" key={output.length} />);
    }
  }
  return (output);
};

export default Stars;
