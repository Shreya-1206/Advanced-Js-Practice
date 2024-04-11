const arr = [76, 899, 100, 12, 23 , 543];
// console.log(arr.sort())

function asc() {
   return [...arr].sort((a,b) => a-b);
}

function des() {
    return [...arr].sort((a,b) => b-a);
}
console.log(`Ascending : ${asc()}`);
console.log(`Desending: ${des()}`);


const user = [
    {
        name :"Gigi",
        age : 31,
        hobby : "Modeling"
    },
    {
        name :"Huda",
        age : 36,
        hobby : "MakeUp Artist"
    },
    {
        name :"Riannha",
        age : 33,
        hobby : "Singer"
    }
];

function displayUser(arr, sortFn) {
    return sortFn([...arr]).forEach(elem => {
   console.log(`${elem.name} | ${elem.age} | ${elem.hobby} 🙂`) 
  })
};
const sortBtAge = arr => arr.sort((a,b) => a.age - b.age);
const sortBtAgeDes = arr => arr.sort((a,b) => b.age- a.age);
const  searchByName = (arr) => arr.sort((a,b) => (a.name < b.name ? 1 : a.name > b.name ? -1 : 0))
displayUser(user, searchByName);