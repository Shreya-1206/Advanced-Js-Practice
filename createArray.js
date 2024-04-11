//New Array Method

const array = new Array("shreya, sugu, bhanu");
console.log(array);

const array2 = new Array(10);
console.log(array2);   ///creates 10 empty space array , not a array containg 10 

// Array Of Method 
const arrOf = Array.of("Shreya Ray", "Sugu Baadsha", "Pihu Kumari");
console.log(arrOf);

const arrOf2 = Array.of(10);
console.log(arrOf2);

//Array.from() method takes array like object  or string and convert it into the array .
// array like objs means can be strings  or arguments objects or array buffers etc.

const arrFrom = Array.from("Hello");
console.log(arrFrom);    
///output ["H","e","l","l","o"]

const arrFrom2 = Array.from([1,2,3], elem => elem**2);
console.log(arrFrom2);
///output [1,4,9]

const isPalindrome = word => Array.from(word).reverse().join('') === word;

console.log(`Chk Palindrome : ${isPalindrome("madam")}`); 


//array from methods returns arrya of elements using call back function

const icecreamFlavours = (flavours) => {
   return Array.from((flavours), elem => 
        `The flavour of  ice cream is ${elem} 🍦 ! `);
};

console.log(icecreamFlavours(["Missisipi Mud Pie", "Bavarian Drak Chocolate", "Guava Chilli"]));

//generate unquie number 
const generateIdNum = (count) => { 
    return Array.from(new Array(count), (elem) =>  parseInt(Math.random()* 1000))};

console.log(generateIdNum(15));

/* What are the arguments that parseInt() accepts?
String and radix*/