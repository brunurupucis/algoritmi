console.log(7 % 3); // will be 1 because 7 devided with 3, 1 will be left
console.log(100 % 30); // will be 10

function fizzBuzz(num) {
    for (let i = 1; num >= 1; i++) {
        if (i % 15 === 0) console.log('FizzBuzz');
        else if (i % 3 === 0) console.log('Fizz');
        else if (i % 5 === 0) console.log('Buzz');
        else console.log(i);
    }
}

fizzBuzz(20);
