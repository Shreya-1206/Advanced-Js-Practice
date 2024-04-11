const objArr = [
    {
        name: "vijay",
        age : 56,
        expertise : "Full-stack",
        isActive : true
    },
    {
        name: "Lalu",
        age : 34,
        expertise : "Frontend",
        isActive : false
    },
    {
        name: "geeta",
        age : 27,
        expertise : "Data-science",
        isActive : true
    },
    {
        name: "kiya",
        age : 46,
        expertise : "Data-science",
        isActive : false
    }
];

//filter array based on property and value
const filter = function([prop, val],arr) {
   return arr.filter((elem) => elem[prop] === val);
};

console.log(filter(['expertise', "Data-science"],objArr)); // [{

console.log(objArr.filter((x) => x.isActive))