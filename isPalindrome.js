/* eslint-disable no-param-reassign */
/*eslint max-len: [2, 400, 4]*/
const isPalindrome = (string) => {
  string = string.toLowerCase();
  const charactersArr = string.split('');
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  return false;
};

console.log(isPalindrome("Madam I'm Adam")); // true
console.log(isPalindrome('Race Car')); // true
console.log(isPalindrome('A Race Car')); // false
