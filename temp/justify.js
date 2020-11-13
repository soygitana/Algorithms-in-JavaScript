let words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


function textJustification(words, l) {
 //1. Split into lines, add between words to count
 //2. Add spaces between words
 // - Split extra spaces evenly between words
 // - When spaces divide unevenly, split the extra and distribute again.
 //  - For lines with one word only, words are left justified, spaces on the right.
 // - For the last line of text, words are left justified, spaces on the right.
var lines = [];
 var i = 0;
 lines[i] = [];
 for(var n in words) {
   if(lines[i].join(' ').length === 0 && words[n].length <= l) {
     lines[i].push(words[n]);
   }
   else if((lines[i].join(' ').length + words[n].length + 1) <= l) {
     lines[i].push(words[n]);
   }
   else {
     lines[++i] = [];
     lines[i].push(words[n]);
   }
 }
for(var x in lines) {
  var line = lines[x].join(" ");
  var spaces = l - line.length;
  // last line
  if( x == lines.length - 1) {
   lines[x] = appendSpaces(line, spaces);
  }
  // just 1 word on the line
  else if(lines[x].length == 1) {
   var word = lines[x].join("");
   spaces = l - word.length;
   lines[x] = appendSpaces(word, spaces);
  }
  else {
   var w = lines[x];
   var gaps = w.length - 1;
   spaces = l - w.join("").length;
   var extraSpaces = spaces % gaps;
   var spacesPerGap = Math.floor(spaces / gaps);
   line = "";
   for(var j = 0; j < w.length; j++) {
    var addOneSpace = false;
    if(extraSpaces > 0) {
     addOneSpace = true;
     extraSpaces--;
    }
    var filler = spacesPerGap + (addOneSpace ? 1 : 0);
    if (j == w.length - 1) {
     line += w[j];
    }
    else {
     line += appendSpaces(w[j], filler);
    }
   }
  lines[x] = line;
  }
 }
 return lines;
}
function appendSpaces(str, n) {
  for(var x = 0; x < n; x++ ) {
    str += " ";
  }
  return str;
}

console.log(textJustification(words, 5))