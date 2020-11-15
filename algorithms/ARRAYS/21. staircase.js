// Staircase
// For a given number of steps, print out a “staircase” using hashes and spaces.


const steps = number => {
    let stairs = "";
    
    for (let row = 0; row < number; row++) {
    let stair = "";
    
    for (let column = 0; column < number; column++)
    stair += column <= row ? "#" : " ";
    
    stairs += `${stair}</br>`
    }
    
    return stairs;
    };
    
    console.log(steps(3))