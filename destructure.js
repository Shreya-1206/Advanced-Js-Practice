let details = ["Joe", 13, "Student"];

let [name,,profession] = details;
console.log(name);
console.log(profession);


// ex 2
let isLoading =true;
let showUi = false;

[isLoading, showUi] = [showUi, isLoading];

console.log(`isLoading ${isLoading} thats why showUi is ${showUi} 💻`);

///array  obj destruccture 

const resturants =[
    {
        name :"Odisha hotel",
        location :"Bhubaneswar",
        cuisine : "Odia style, Indian",
        rating : '4.5 stars'
    },
    {
        name :"Fikka Cafe",
        location :"Bangalore",
        cuisine : "Italian",
        rating : '4.3 stars'
    },
];

const getDetailsRes = (name) => {
 let findRes = resturants.find((elem) => elem.name === name);
 return findRes ? [findRes.location, findRes.cuisine, findRes.rating] : []
}

let [locationOfOdisha, cuisineOdisha, ratingOdisha] = getDetailsRes("Fikka Cafe");
console.log(locationOfOdisha);
console.log(cuisineOdisha + ", some other delicious dishes too.");
console.log(`Rating of this restaurant is ${ratingOdisha}`);

const fruits = ["Banana", "Orange", " kiwi", " Mango", " Guava"];
const [soomthie, juice, ...rest] =fruits;

console.log(`I like ${soomthie} Smoothie`);
console.log(`I like ${juice} Juice`);
console.log(`I like rest of fruits to eat like that ${rest}`);