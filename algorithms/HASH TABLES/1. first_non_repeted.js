// First non repeated character


// store all key values pairs in obj (letter: number of rep)
// loop in obj and return fist char === 1



const noRep = str => {

    let obj = {}
    
    
    for (let char of str) {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
    }
    
    for (let char in obj) {
        if (obj[char] === 1) {
            return char;
        }
    }
    }
    
    
    console.log(noRep("a green apple"))