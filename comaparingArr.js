const arr = [1,2,3,4 ,{id :101, key: 'no'}, 87, 'hello'];
const arr2 = [1,2,3,4 ,{id :101, key: 'no'}, 87, 'helo'];

function sameArr(arr, arr2) {
   return JSON.stringify(arr) === JSON.stringify(arr2);
}
console.log(` Check If Array 1 and Array 2 are same : ${sameArr(arr, arr2) ? "Yes Same 💥" : "Not Same 😬"}`);


function  chkSameDiffArrange (arr1, arr2) {
  const stringA = arr1.map((el) => JSON.stringify(el));
  const stringB = arr2.map((el) => JSON.stringify(el));

  return [
    arr1.lenght === arr2.lenght,
    ...stringA.map((el) => stringB.includes(el)),
    ...stringB.map((el) => stringA.includes(el)),
  ].every((el) => el);

}

console.log(chkSameDiffArrange(arr,arr2));