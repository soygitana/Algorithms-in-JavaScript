// Hash Table implementation from scratch

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

        let index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        this.buckets[index].push([key, value])
        this.size++
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

    remove(key) {
        let index = this.hash(key);

        if (this.buckets[index]) {
            delete this.buckets[index]
            this.size--
        }
        return index
    }
}


const ht = new HashTable();

ht.set("Canada", "300");
ht.set("Germany", "100");
ht.set("Italy", "50");

ht.remove("Italy")
ht.remove("Germany")

ht.set("Poland", "80");
console.log(ht)
