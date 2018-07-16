/*eslint max-len: [2, 400, 4]*/
function binarySearch(numArray, key) {
  const middleIdx = Math.floor(numArray.length / 2);
  const middleElem = numArray[middleIdx];

  
  if (middleElem === key) {
    return true;
  } else if (middleElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  } else if (middleElem > key && numArray.length > 1) {
  return binarySearch(numArray.splice(0, middleIdx), key);
  }
  return false;
}

console.log(binarySearch([5, 7, 12, 16, 36, 42, 56, 71], 56));
