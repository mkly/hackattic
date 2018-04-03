const Parser = require('binary-parser').Parser;

const getValueFromData = data => {
  const parser = Parser.start()
    .endianess('little')
    .int32('int')
    .uint32('uint')
    .int16('short')
    .skip(2)
    .float('float')
    .double('double')
    .doublebe('big_endian_double');

  return parser.parse(Buffer.from(data.bytes, 'base64'));
};

module.exports = getValueFromData;
