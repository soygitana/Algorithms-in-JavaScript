// Sort by height
// Some people are standing in a row in a park. There are trees between then which cannot be moved. Sort people by high without moving trees (-1)


const a = [-1, 150,190,180,-1,-1,170,200]


const keepTrees = a => {

let arr1= []
let arr2 = []

a.forEach((val, i) => {
if (val == -1) {
arr1.push(i)
}
else {
arr2.push(val)
}
 
})
  
for (let i in arr1) {
arr2.sort()     
arr2.splice(arr1[i], 0, -1)
}

return arr2
}



console.log(keepTrees(a))