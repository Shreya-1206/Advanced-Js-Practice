const tempRec = [
    {
        id : 1,
        date : '5-March-2024',
        maxTemp : 37,
        minTemp : 28
    },
    {
        id : 2,
        date : '6-March-2024',
        maxTemp : 36,
        minTemp : 28
    },
    {
        id : 3,
        date : '7-March-2024',
        maxTemp : 38,
        minTemp : 28
    },
    {
        id : 4,
        date : '8-March-2024',
        maxTemp : 35,
        minTemp : 29
    }
];

for(let x of tempRec.reverse()) {
    console.log(`${x.date} : Max-Temp - ${x.maxTemp} || Min-Temp - ${x.minTemp}`);
}

//palindrome chk

const isPalindrome = (word) => {
    let worArr =[];
    let revArr = [];

    for (let i of word ) {
        worArr.push(i);
        revArr.push(i);
    }
    return worArr.toString() === revArr.reverse().toString();
};
console.log(isPalindrome('civic') ? "Yes its a palindrome 😁" : "No its not a palindrome 🙃");
console.log(isPalindrome('Hello') ? "Yes its a palindrome 😁" : "No its not a palindrome 🙃");


const reverse = [1,2,3,4];
console.log(reverse.reverse());
console.log(reverse);