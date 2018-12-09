import React from 'react';

// get the rating number and return the corresponding icons star tags
const Stars = (value, id, type) => {
  const stars = Math.floor(value);
  const output = [];
  for (let i = 1; i <= stars; i += 1) {
    output.push(<i className="fas fa-star" key={`${id}-${output.length}-${type}`} />);
  }
  if ((value - stars) > 0) {
    output.push(<i className="fas fa-star-half-alt" key={`${id}-${output.length}-${type}`} />);
    for (let i = (stars + 1); i < 5; i += 1) {
      output.push(<i className="far fa-star" key={`${id}-${output.length}-${type}`} />);
    }
  } else {
    for (let i = stars; i < 5; i += 1) {
      output.push(<i className="far fa-star" key={`${id}-${output.length}-${type}`} />);
    }
  }
  return (output);
};

export default Stars;
