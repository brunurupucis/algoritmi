/*eslint max-len: [2, 400, 4]*/
const twoSum = (numArray, sum) => {
  const pairs = [];
  const hashtable = [];

  for (i = 0; i < numArray.length; i++) {
    const currNum = numArray[i];
    const counterpart = sum - currNum;
    if (hashtable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart]);
    }
    hashtable.push(currNum);
  }
  return pairs;
};

console.log(twoSum([40, 11, 19, 17, -12], 28));

//=> [ [ 17, 11 ], [ -12, 40 ] ] is the output
