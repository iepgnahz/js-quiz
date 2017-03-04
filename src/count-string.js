function countString(collection) {
  //在这里写入代码

  var result = [];
  var number = [];
  collection.forEach(function (charactor) {
    var index = result.indexOf(charactor);
    if (index === -1) {
      result.push(charactor);
    }
  });

  result.forEach(function (item) {
    var count = 0;
    for (key in collection) {
      count = (collection[key] === item) ? ++count : count;
    }
    number.push(count);
  });

  result = result.map(function (item, index) {
    return item + '-' + number[index];
  });
  return result;
}

module.exports = countString;