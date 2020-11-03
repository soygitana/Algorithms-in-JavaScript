// First Repeated Character
// Given a string of characters, return the first repeated character

// STEPS
// 1. declare empty array to store the values and counter = 0
// 2. iterate in string 
// 3. if char is not in array push to array
// 4. if char is in array return character

const firstRep= (str) => {
  
    let letter = "" 
    
    let arr = []
    
    for (let char in str) {
    
    if (!arr.includes(str[char])) {
    arr.push(str[char])
    }
      else {
     letter = str[char] 
      }
    }
    return letter
    }
    
    console.log(firstRep("The green peace"))