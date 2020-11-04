// Anagrams
// Anagrams are words or phrases that contain the same number of characters. Create a function that checks for this.

// STEPS
// 1. convert strings into array and then create sorted string
// 2. make sure arguments are not case sensitive
// 3. compare arguments, if equal return true, if not false

const anagrams = (a,b) => {

    let str1 = a.toLowerCase()  
    let str2 = b.toLowerCase()  
    
       
    let first = Array.from(str1).sort().join("")
    let second = Array.from(str2).sort().join("")
    
    
    return first == second 
    }
    
    
    console.log(anagrams("hEllo world", "world hello"))
    console.log(anagrams("hello world", "world hello"))
    console.log(anagrams("hi world", "world hello"))
