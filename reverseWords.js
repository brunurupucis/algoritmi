/*eslint max-len: [2, 400, 4]*/

const reverseWords = (string) => {
  const wordsArr = string.split(' ');
  const reversedWordsArray = [];

  wordsArr.forEach(word => {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
       reversedWord += word[i];
    }
    reversedWordsArray.push(reversedWord);
  });
    return reversedWordsArray.join(' ');
};

console.log(reverseWords('this is a string of words'));
