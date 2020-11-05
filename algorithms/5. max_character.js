// Max Character
// Given a string of characters, return the character that appears the most often.

// STEPS
// 1. declare empty object to keep char - number of appearence pairs
// 2. add pairs to the object
// 3. declare maxcounter and maxcharacter 
// 4. iterate in object 
// 5. if number of char in object is bigger than maxcount max count is number of char 
// 6. maxchracter = character 


// SOLUTION 1
const max = string => {
    const characters = {};

    for (let character of string.toLowerCase())
        characters[character] = characters[character] + 1 || 1;

    let maxCount = 0;
    let maxCharacter = null;

    for (let character in characters) {
        if (characters[character] > maxCount) {
            maxCount = characters[character];
            maxCharacter = character;
        }
    }

    return maxCharacter;
};


// SOLUTION 2
const max2 = string => {
    let result = { };
    let maxCount = 0;
    let maxCharacter = null;
      
    for(let i in string) {
        if(!result[string[i]])
            result[string[i]] = 0;
        ++result[string[i]];
    }
      
    for (let i in result) {
            if (result[i] > maxCount) {
                maxCount = result[i];
                maxCharacter = i;
            }
        }
        
      return maxCharacter
    }
    


console.log(max("pauuulallll"))
console.log(max2("pauuulallll"))


// NUMBER OF APPERANCE INTO OBJECT

//  const numberOfApparence = (str) => {

//     let characters = {}

//     let arr = str.split(' ')                                       // if we want to take words instead of letters
    
//     for ( let character of str.toLowerCase()) {                    // OF taking values or str/arr IN taking indexes
//     characters[character] = characters[character] + 1 || 1
//     }  
       
//     return characters
//     }
    
    
//     console.log(numberOfApparence("Green Caffee Nero")) 
    

// function count(str) {
//     let arr = [...str]
//     return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
//   }
    
    