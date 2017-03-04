const countString = require('../src/count-string');

describe('count-string-in-collection', function () {
  const collection_a = ['a', 'b', 'c', 'a', 'b', 'd'];
  const collection_b = ['a-2', 'b-2', 'c-1', 'd-1'];

  it('计数数组字符串', function () {
    const result = countString(collection_a);
    expect(result).toEqual(collection_b);
  });
});
