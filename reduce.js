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