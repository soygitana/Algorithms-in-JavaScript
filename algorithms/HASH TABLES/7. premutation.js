// Permutation
// Given two strings, write a method to decide if one is a permutation of the other.



function isPermutation(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    } 
  
    var hash_table_array = Array.apply(null, Array(256)).map(Number.prototype.valueOf, 0); 
  
    for (var i = 0; i < str1.length; i++) {
      hash_table_array[str1[i].charCodeAt(0)] += 1;
    }
  
    for (var i = 0; i < str2.length; i++) {
      if ((hash_table_array[str2[i].charCodeAt(0)] -= 1) < 0) {
        return false;
      }
    }
    return true;
  };
  
 
  console.log(isPermutation('asdf', 'fdsa')); // returns true
  console.log(isPermutation('asdf', 'fdsaa')); // returns false
