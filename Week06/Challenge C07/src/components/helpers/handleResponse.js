/**
 * Fetch response helper
 *
 * @param {object} response
 */
const handleResponse = response => response.json()
  .then(json => (response.ok ? json : Promise.reject(json)));

module.exports = {
  handleResponse,
};
