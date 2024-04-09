const doctors = [
    {
        id:101,
        name : "Dr. Prakar Reddy",
        specialization : "Oncologist"
    },
    {
        id:102,
        name : "Dr. Rekha Mahapatra",
        specialization : "Dermatologist"
    },
    {
        id:101,
        name : " Dr. Sheela Sethi",
        specialization : "Cardiologist"
    },
    {
        id:101,
        name : "Dr. Giri",
        specialization : "Oncologist"
    },
];

function findDoc(specialization, arr) {
 return arr.find((elem) => elem.specialization === specialization)?.name || "Not Found !!";
}
console.log(findDoc("Cardiologist",doctors));
console.log(findDoc("Neurosurgeon",doctors));

const colors = ["Red", "Green", "Blue"];
const neonColors = ["Neon Pink", "Neon Yellow","Neon Orange"];

function index(arr) {
  return arr.findIndex((elem) => elem === 'Green');
}

console.log(index(colors));

console.log(neonColors.includes('Neon Green')); // false