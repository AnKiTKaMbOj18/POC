const mock = require("./mock");

function test(data, key) {
  let arr = [];

  for (let val in data.switchConfig) {
    for (let j in data.switchConfig[val]) {
      if (j === key) {
        let x = val + ":" + key + ":" + data.switchConfig[val][key];
        arr.push(x);
      }
    }
  }
  return arr;
}
const key = "enableMPulse";
var result = test(mock, key);
console.log(result);
console.log(`Entered key ${key} is present at ${result.length} places.`);
