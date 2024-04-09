const books = [
    "Do Epic Shit",
    "React Fundamentals",
    "Bhagavad-Gita As It Is"
];
// for (const book of books) {
//   console.log(book);
// }

//using for forEach
const filpTitles = function (elem, index)  {
    console.log(elem.split(" ").reverse().join(" "));
};
books.forEach(filpTitles);


const csvUser = `Name, Age, City
John Doe, 30, New York
Jane Smith, 25, Los Angeles
Michael Johnson, 35, Chicago
Emily Brown, 28, Houston
David Lee, 32, San Francisco
Sarah Wilson, 29, Miami`; 

const csvToNestedArr = (csv) => {
    let output = [];
    csv.split('\n').forEach((elem) => output.push(elem.split(', ')))
    return output;
}

console.log(csvToNestedArr(csvUser));

/// convertion of array to object

const arrToObj = (arr) => {
    let output = [];
    arr.forEach((elem, index) => {
        if(index !== 0) {
           let obj ={};
           elem.forEach((elem, index) => {
            obj[arr[0][index]]= elem;
            
           });
           output.push(obj);
        }
    })
    return output;
}

const objOfCsv = arrToObj(csvToNestedArr(csvUser));
console.log(objOfCsv);

// add taxes to each elem of prices array

const prices  = [1200, 2000, 1600, 867];
const Tax = function(tax) {
    this.tax = tax;
    this.withTax = function(arr) {
        let output =[];
        arr.forEach((elem) => {
            let withTax = ((this.tax/ 100) *elem + elem);
            output.push(withTax);
        });
        return  output;
    }

}

console.log(new Tax(5).withTax(prices)); 