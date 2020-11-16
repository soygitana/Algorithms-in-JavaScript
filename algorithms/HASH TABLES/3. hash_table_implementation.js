// Hash Table implementation from scratch

// To implement a hash table using JavaScript, we will do three things: 
// create a hash table class
// add a hash function
// implement a method for adding key/value pairs to our table.

// HashTable class

class HashTable {
    constructor() {
        this.buckets = {};
        this.length = 0;
        this.size = 0;
    }
    hash(key) {
        return key.toString().length % this.size;
    }

    set(key, value) {
        this.size++
        let index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        this.buckets[index].push([key, value])

        return index

    }

    get(key) {

        let index = this.hash(key);

        if (!this.buckets[index]) return null

        for (let bucket of this.buckets[index]) {
            if (bucket[0] === key) {
                return bucket[1]
            }
        }

    }
}


const ht = new HashTable();

ht.set("Canada", "300");
ht.set("Germany", "100");
ht.set("Italy", "50");

console.log(ht.get("Italy"));