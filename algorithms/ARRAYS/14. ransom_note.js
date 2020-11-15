//  Ransom Note
//  Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// 1. take magazine str and split into array of words
// 2. take note str and split into array of words 
// 3. check if an array from magazine includes all words from note 
// 4. if magazing includes all words from note we can create the randsom note return yes if no false  

// SOLUTION 1

const magazine =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const ransomNote = (note, magazine) => {

    const cleaned = magazine.replace(/,/g, "").replace('.', "")

    let magazineArr = cleaned.split(" ")
    let noteArr = note.split(" ")

    let result = []

    noteArr.forEach((el) => {
        if (magazineArr.includes(el)) {
            result.push(el)
        }
    })

    return result.join(" ") == note

};

console.log(ransomNote("sit aliqua est labore", magazine))
console.log(ransomNote("sit hello est labore", magazine))
console.log(ransomNote("sit ad est love", magazine))
console.log(ransomNote("sit ullamco est Excepteur", magazine))


// SOLUTION 2

const ransomNote2 = (note, magazine) => {

    const cleaned = magazine.replace(/,/g, "").replace('.', "")
    const magazineWords = cleaned.split(" ")
    const noteArr = note.split(" ")
    const magazineHash = {};

    let possible = true

    magazineWords.forEach(word => {
        if (!magazineHash[word]) magazineHash[word] = 0;
        ++magazineHash[word];
    });

    noteArr.forEach(word => {
        if (magazineHash[word]) {
            magazineHash[word]--;
            if (magazineHash[word] < 0) possible = false;
        } else possible = false;
    });
    return possible
};

console.log(ransomNote2("sit aliqua est labore", magazine))
console.log(ransomNote2("sit hello est labore", magazine))
console.log(ransomNote2("sit ad est love", magazine))
console.log(ransomNote2("sit ullamco est Excepteur", magazine))
