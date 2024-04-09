const str = 'Prestige Tranquility, Tower 16 5th floor, flatNo 16052, Budigere Cross, Banalore Karnataka';

console.log(`String To Array 🌟: ${str.split(',  ')}`)
console.log(`String To Array 🌟: ${ typeof (str.split(', ')) }`); 
console.log(`String To Array 🌟: ${str.split(' ')}`)

const arr = str.split(', ');

console.log(`Array To String  🌠: ${arr.join(', ')}`);

const isPalindrome= (word) => {
  let wordArr =[];
  let revArr =[];

  word.split('').push(wordArr); //['c', 'i', 'v' ...]
  word.split('').push(revArr);

  return wordArr.join() === revArr.reverse().join();
}

console.log(isPalindrome('civic'));


const word = 'hello';
console.log(word.split(''));
console.log(word);


const joinARR= ['hey', 'sup', 'namaste', 'aslam walikum', 'sassri akal'];
console.log(joinARR.join(', '));
console.log(joinARR);


const csvUser = `Name, Age, City
John Doe, 30, New York
Jane Smith, 25, Los Angeles
Michael Johnson, 35, Chicago
Emily Brown, 28, Houston
David Lee, 32, San Francisco
Sarah Wilson, 29, Miami`; 

const csvToNestedArr = (csv) => {
    let output = [];

    for(let x of csv.split('\n')) {//first split into rows
        output.push(x.split(', ')); //the split the each row  by commas and space to make it a nested
    }
    return output;
}

const nestedArr = csvToNestedArr(csvUser);
console.table(nestedArr); 

// Accessing content of the nested array
for (let i = 0; i < nestedArr.length; i++) {
    console.log(`Row ${i}:`, nestedArr[i]);
}


