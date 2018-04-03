const fetch = require('node-fetch');
const getValueFromData = require(__dirname + '/getValueFromData');

const fetchDataAndRespond = (problemURI, solveURI) => {
  return fetch(problemURI)
    .then(res => res.json())
    .then(data => {
      const val = getValueFromData(data);
      return fetch(solveURI, {
        method: 'POST',
        body: JSON.stringify(val),
        headers: { 'Content-Type': 'application/json' }
      });
    });
};

module.exports = fetchDataAndRespond;
