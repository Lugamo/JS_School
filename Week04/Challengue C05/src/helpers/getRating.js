// Is used in the handlebar file to put the stars "x" numbers of stars
export default (rating, block) => {
  const stars = Math.floor(rating);
  let output = '';
  for (let i = 1; i <= stars; i += 1) {
    output += block.fn('<i class="fas fa-star"></i>');
  }
  if ((rating - stars) > 0) {
    output += block.fn('<i class="fas fa-star-half-alt"></i>');
    for (let i = (stars + 1); i < 5; i += 1) {
      output += block.fn('<i class="far fa-star"></i>');
    }
  } else {
    for (let i = stars; i < 5; i += 1) {
      output += block.fn('<i class="far fa-star"></i>');
    }
  }

  return output;
};
