const array = [23, 67,89,99,10,154,66];

function sum(arr) {
   return arr.reduce((acc, curr) => acc + curr);
}

console.log(`Sum of array with reduce is  : ${sum(array)}`);

const shoppingBag = [
    {
        product_Name : "Women Razor",
        price :344,
        qty : 2
    },
    {
        product_Name : "Water Bottle",
        price :1000,
        qty : 1    
    },
    {
        product_Name : "Coffee Mug",
        price :500,
        qty : 2
    },
    {
        product_Name : "NoteBooks",
        price :200,
        qty : 2
    }
];

function totalCost(arr) {
   return arr.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
}

console.log(`Total cost of shopped items is 🛍️ : ${totalCost(shoppingBag)}`);


const array2 = [
    1,
    2,
    1,
    56,
    4,
    9,
    87,
    9,
    {
        id :10,
        name :"shreya"
    },
    45,
    45,
    {
        id :10,
        name :"shreya"
    }

];

function removeDups(arr) {
    return arr.reduce((acc,curr) => 
        !acc.some((elem) => elem.toString() === curr.toString()) ? 
          [...acc,  curr] : acc , 
        [] 
    )
}
console.log(`Removed dups : ${removeDups(array2)}`) ;