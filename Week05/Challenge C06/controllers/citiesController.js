/* eslint-disable consistent-return */
const avaibleCities = ['Quito', 'Medellin', 'Cartagena'];

function checkCity(city) {
  avaibleCities.forEach((element) => {
    if (city === element) {
      return true;
    }
  });
  return false;
}

module.exports = {
  checkCity,
};
