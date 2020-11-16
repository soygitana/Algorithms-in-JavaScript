// The Set object allows you to create a collection of unique values(each value can occur only once).

// CREATING A SET

let set1 = new Set(['🍇', '🍉', '🍊', '🍈']);
let set2 = new Set();

let arr = [4, 4, 4, 4, 6, 7]

let set3 = new Set(arr);

// SIZE

set1.size

// ADD()

set1.add('🍋');

set1                           // add method is chain-able
    .add('🍌')
    .add('🍓')
    .add('🍎');

// ADDING OBJECTS TO SET

set2.add({ i: 10 });
set2.add({ i: 10 });

// Even-though objects look same, each object has different reference, so they are not ===
// An object reference means that it compares the memory address of the object and not the actual key/value pairs contained in the object.


// HAS()

set1.has('🍇');  //true

// VALUES()

set1.values();   // SetIterator {"🍇", "🍉", "🍊", "🍈", "🍋", …}

// ENTRIES()

set1.entries(); //  SetIterator {"🍇" => "🍇", "🍉" => "🍉"}

// DELATE()

// The delete() method removes the specified element from a Set object.
// Returns true if an element in the Set is deleted, otherwise it returns false.

set1.delete('🍇');  //true

// CLEAR()

// The clear()method empties theSet object.

set1.clear()