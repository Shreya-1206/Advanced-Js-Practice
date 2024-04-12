const arr = [
    [98,56],
    [8,6],
    [5,58],
    [
        [10,14],
        [89,76]
    ]
];

console.log(arr.flat());
console.log(arr.flat(2));
console.log(arr);

const arr2 = [
    [
        [10,67],
        [78,34]
    ],
    [
        [34,44],
        [12,22]
    ],
    [
        [16,89],
        [2,10]
    ],
    [
        [11,77],
        [99,78]
    ],

];
function calDistance([x1,x2],[y1,y2]) {
   return Math.hypot(x2 - x1 , y2 - y1).toPrecision(3)
}

const distanceMatrix =
       arr2.flatMap(([p1,p2])=> calDistance(p1, p2));


console.log(`Shortest distance is : ${distanceMatrix}`)    
