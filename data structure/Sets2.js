// Removing duplicate elements from an array

let names = ['John', 'Brandi', 'Tony', 'John'];
let uniqueNames = [...new Set(names)]


// UNION

// The union method returns all elements from SetA and SetB without duplicates

function union(setA, setB) {
    return new Set([...setA, ...setB]);
}
var setA = new Set([1, 2, 3, 4, 5]);
var setB = new Set([3, 4, 5, 6]);


// INTERSECTION

// The Intersection operation returns a new Set which has common elements in both set.

function intersect(setA, setB) {
    var commonElements = new Set();
    
    for (var elem of setB) {
         if (setA.has(elem)) {
             commonElements.add(elem);
         }
    }
     
     return commonElements;
 }
 var setA = new Set([1,2,3,4,5]);
 var setB = new Set([3,4,5,6]);
 intersect(setA, setB); // Set(3) {3, 4, 5}

 
// DIFFERENCE

function difference(setA, setB) {
    var diff = new Set(setA);
    for (var elem of setB) {
        diff.delete(elem);
    }
    return diff;
}
var setA = new Set([1,2,3,4,5]);
var setB = new Set([3,4,5,6]);
// SET A - SET B
difference(setA, setB); // Set(3) {1,2}
// SET B- SET A
difference(setB, setA); // Set(3) {6}


// SUPERSET

function isSuperset(set, subset) {
    for (var elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}
var set = new Set([1,2,3,4]);
var subset = new Set([3,4]);
isSuperset(set, subset); // true
subset = new Set([3,4,6]);
isSuperset(set, subset); // false

