// Reverse Words
// Given a phrase, reverse the order of the characters of each word.


// create an array of words
// loop through array and reverse each word
// push reversed word to new array
// convert new array into string 


const reverseWords = str => {
  
    let arr = str.split(' ')  
    let newArr = []
     
    for (let elem of arr) {
    let newElement = elem.split("").reverse().join("");
    newArr.push(newElement)
    }
      
    
    return newArr.join(' ')
    }
    
    
    
    console.log(reverseWords("I love JavaScript!"))