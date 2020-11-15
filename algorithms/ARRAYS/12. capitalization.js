// Capitalize
// Given a phrase, capitalize every word.


// convert str into array of words
// create newArr to store changed elements
// loop through el of arr
// change first letter of el
// push new element to newArr
// convert array into string 


const capitalize = str => {

    let arr = str.split(' ')
    let newArr = []

    for (let el of arr) {
        let newElement = el.charAt(0).toUpperCase() + el.slice(1)  // "love"  newElement = L + ove (word from first index with index)
        newArr.push(newElement)
    }
    return newArr.join(" ")
}



console.log(capitalize("i love javascript!"))