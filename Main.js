function removeEveryOther(arr){
  let arr1= []
  for(i=0; i<arr.length; i+=2){

      arr1.push(arr[i])
  }
  return arr1
}
// Test Cases:
// const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
    assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
    assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
    assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
  })
});
