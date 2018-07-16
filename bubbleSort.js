/*eslint max-len: [2, 400, 4]*/
/*eslint no-param-reassign: ["error", { "props": false }]*/
const bubbleSort = (array) => {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

bubbleSort([5, 3, 8, 2, 1, 4]);
