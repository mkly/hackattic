const test = require('tape');
const getValueFromData = require(__dirname + '/../src/getValueFromData');

const data = {
  test: {
    bytes: 'kwfYgFYKGt1WqAAAC/OGQ3J4I56ThIBAQICEk54jeHI='
  },
  expected: {
    int: -2133325933,
    uint: 3709471318,
    short: -22442,
    float: 269.8987731933594,
    double: 528.5720789691097,
    big_endian_double: 528.5720789691097
  }
};

test('should parse json and return string', t => {
  t.plan(1);

  t.deepEqual(getValueFromData(data.test), data.expected);
});
