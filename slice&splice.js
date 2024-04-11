const fruits = "mango is my fav";
console.log(fruits.slice(0,5));
console.log(fruits);
console.log(fruits.slice(6,8));
console.log(fruits.slice(9,11));
console.log(fruits.slice(12));

const items = ["kiwi", "diet coke", "water bottle"," pencil"];
console.log(items.slice(2,4));

const ids =[ "XFG-23-4546", "XFG-23-4546", "XFG-23-4546"];
const fourdigits= ids.map((el) => el.slice(7));
console.log(fourdigits); 
console.log(ids);

//splice 
const electroItems = ["Hardware", "Mouse", "Speaker", "Mobile Phone", "Laptop"];
const edit = electroItems.splice(2,0,"Head Phones");
console.log(electroItems);

const electroItems2 =["Hardware", "Mouse", "Speaker", "Mobile Phone", "Laptop"];

const shuffleArr = function(arr, start, count, moveToIndex) {
    const arrClone = [...arr];
    arrClone.splice(moveToIndex, 0, ...arrClone.splice(start,count));

    return  arrClone;
}

console.log(shuffleArr(electroItems2, 2, 5, 0));