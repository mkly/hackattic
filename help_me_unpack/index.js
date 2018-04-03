const fetchDataAndRespond = require(__dirname + '/src/fetchDataAndRespond');

const problemURI = process.env.PROBLEM_URI;
const solveURI = process.env.SOLVE_URI;

if (!problemURI || problemURI.length < 1) {
  console.log('Missing problem uri');
  return;
}

if (!solveURI || solveURI.length < 1) {
  console.log('Missing solve uri');
  return;
}

fetchDataAndRespond(problemURI, solveURI)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => {
    console.log(err);
  });
