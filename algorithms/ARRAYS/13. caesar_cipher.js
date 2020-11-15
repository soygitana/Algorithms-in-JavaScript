// Caesar Cipher
// Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. If necessary, the shifting should wrap around back to the beginning or end of the alphabet.

// 1. create const array of alphabet
// 2. create result empty array
// 3. convert str into array of elements
// 4. loop trought array 
// 5. find index of element in array of alphabet
// 7. minus index as num indicates and get value
// 8. push value to result
// 9. return result as a string 


const caesarCipher = (string, number) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const input = string.toLowerCase();
    let output = "";

    for (let i = 0; i < input.length; i++) {
        const letter = input[i];

        if (alphabet.indexOf(letter) === -1) {                                // for example white space " "
            output += letter;
            continue;
        }

        let index = alphabet.indexOf(letter) + number % 26;                   // because 26 letters  
        if (index > 25) index -= 26;
        if (index < 0) index += 26;

        output +=
            string[i] === string[i].toUpperCase()
                ? alphabet[index].toUpperCase()
                : alphabet[index];
    }

    return output;
};
    
    console.log(caesarCipher("I love JavaScript", 80))