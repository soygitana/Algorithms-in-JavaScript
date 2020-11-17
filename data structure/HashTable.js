// Hash Table implementation from scratch

// create a hash table class
// add a hash function
// implement a method for adding key/value pairs to our table.

// HashTable class

class HashTable {
    constructor() {
        this.buckets = {};
        this.size = 0;
        this.buildChains();
    }

    hash(key) {
        let finalHash = 0;
        for (let i = 0; i < key.length; i++) {
            const charCode = key.charCodeAt(i);
            finalHash += charCode;
        }
        return finalHash;
    }

    buildChains() {
        for (var i = 0; i < this.size; i++) {
          this.buckets[i] = new Array();
        }
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
        let bucket = this.buckets[index]

        if (!bucket) return null

        for (let entry of bucket) {
            if (entry[0] === key) {
                return entry
            }
        }

    }

    remove(key) {

        let index = this.hash(key);
        let bucket = this.buckets[index]

        if (!bucket) return null

        for (let entry of bucket) {
            if (entry[0] === key) {
                console.log(bucket)
                bucket.splice(bucket[0])
                this.size--
                return;
            }
        }
    }
}


const ht = new HashTable();

ht.set("Canada", "300");
ht.set("Germany", "100");
ht.set("Italy", "50");
ht.set("Poland", "30");

ht.remove("Poland")

console.log(ht)