// simple clone 
const arr = ["Mobile Phone", "Laptop", "Tablet"];
let newArr = arr;

newArr.push("Smart Watch");
console.log("Original Array: ",arr);// it changes the  original array too
console.log("Clone Array :",newArr); /// its  not a real clone, it's just reference

// clone with spread
const arrSpread = ["Guitar","Drums","Piano","Sitar"] ;
let newArrSpread = [...arrSpread]; // spread creates a clone of new array of  elements from old array

newArrSpread.push("Harmonium"); 
console.log("Original Array: ",arrSpread);
console.log("Clone Array Using Spread:",newArrSpread); // no reffernce to arrSpread

// concatation
const aarConcat = ["Mobile Phone", "Laptop", "Tablet"];
const aar2Concat = ["Apple", "Lady Finger","Meat", "Cheese"];
const itemsBuy = aarConcat.concat(aar2Concat);
console.log(itemsBuy);


const aarConcatSpread = ["Mobile Phone", "Laptop", "Tablet"];
const aar2ConcatSpread = ["Apple", "Lady Finger","Meat", "Cheese"];
const itemsBuySpread = [...aar2ConcatSpread, ...aar2Concat]
console.log(`Using spread : ${itemsBuySpread}`);

//to-do-list

const ToDoList = function(title) {
    this.title = title ?? 'My Tasks';
    this.taskList = [];
    this.showList = () => {
        console.log(`---- ${this.title} ----`);
        this.taskList.forEach((elem, index) => {
            console.log(`${index +1}  ${elem}`)
        });
    }
    this.add = (item) => {
        this.taskList = [item, ...this.taskList];
    }
}
const shreya = new ToDoList("Shreya's TO-DO-LIST");
shreya.add("Complete the javascript advance portion 😁");
shreya.add("Apply for jobs");
shreya.showList();

// nested array
const num =[
    [23,5], /*elem -> elem[0] , elem[1]*/
    [78,89],
    [90,89]
];

const chkGreater =(a,b) => {
    return a >b ? `a is greater ${a} than b ${b}` : `b is ${b} greater than a ${a}`;
}

// num.forEach((elem) =>console.log(chkGreater(elem[0], elem[1])));
num.forEach((elem) => console.log(chkGreater(...elem)));