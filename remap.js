const colors = ["Red", "Yellow"];
const makeCrayons = colors.map((elem) => console.log(`${elem} Crayons 🖍️`));
console.log(makeCrayons); // [undefined, undefined] whyyyyy

const objsOfPersons = [
    {
        name :"Sugu",
        age :24,
        hobby : "Nothing"
    },
    {
        name : "Taro",
        age:18,
        hobby:"Playing Video Games"
    }
];

const genId = () => { return parseInt(Math.random() * 1000) };

// const editObjs = objsOfPersons.map((user) => {
//     user.id = genId()
//     return user;
// });

const editObjs = objsOfPersons.map((user) => {
   return {               //way of returning a new obj   return { .............     }
    id : genId(),
    ...user
   }
});
console.log(editObjs);

const numsArr = [
    [23,78],
    [90,65],
    [5,7]
];          
function sumUp(a,b) {
    return  a+b;
}
const sum = numsArr.map((elem) =>{ return  sumUp(elem[0], elem[1])});
console.log(sum);
