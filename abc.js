arr = [1,2,2,1,1,3,3]

const myMap = new Map();
for (let i of arr) {
    if(myMap.has(i)){
        myMap.set(i,myMap.get(i)+1);
    }
    else{
        myMap.set(i,1);
    }
}
// console.log([...myMap]);
const ans=[];
for(let i of myMap){
    if(i[1]==2)
        ans.push(i[0]);
}
console.log(ans);