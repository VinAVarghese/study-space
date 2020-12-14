// HASH TABLES/MAPS
    // - Key-value pair data structures
    // - Keys are not sorted
    // - Already implemented in every language
    // Names in other languages
        // Python - Dictionaries
        // JS - Objects & Maps
        // Java, Go & Scala - Maps
        // Ruby - Hashes

    // Big O: 
        // insert, deletion, access: 0(1)

// Creating/Implementing your own hashtable and not using these inbuilt ones...

    // Hash Functions - takes in an input and outputs an indice for it
        // Good hash function
            // 1) Fast (constant time)
            // 2) Doesn't cluster outputs at a specific indices but distributes uniformly
            // 3) Deterministic (same inputs yields same output)
        // Prime number lengths of tables have less collitions*

// STRING ONLY Hash Function Example:
const hash = (input,arrLeng) => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        total += input.charCodeAt(i)
    }
    total = total % arrLeng
    return total
}
// Test cases:
// console.log("Stirng hashFun:", hash("red",10));
// console.log("Stirng hashFun:", hash("red",10));
// console.log("Stirng hashFun:", hash("blue",10));
// console.log("Stirng hashFun:", hash("red",10));

// STRING ONLY Hash Function Example Update 1:
const hashUpdate1 = (input,arrLeng) => {
    let total = 0;
    let WEIRD_PRIME = 31 // introducing a prime to help with lowering collision
    for (let i = 0; i < Math.min(input.length,100); i++) { // only will loop over the first 100 chars for whatever is passed through
        let char = input[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrLeng;
    }
    return total
}
// Test cases:
// console.log("Stirng hashFun update 1:", hash("silver",13));
// console.log("Stirng hashFun update 1:", hash("silver",13));
// console.log("Stirng hashFun update 1:", hash("blue",13));
// console.log("Stirng hashFun update 1:", hash("silver",13));

// COLLISIONS - When different data go to the same index
    // Ways to fix this
        // 1) Separate Chaining
            // data structure within another data structure
        // 2) Linear Probing 
            // looks if there is something in the indice first and if so, moves to the next empty indice

// Separate Chaining implementation
class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash (key) {
        let total = 0;
        let WEIRD_PRIME = 31 
        for (let i = 0; i < Math.min(key.length,100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total
    }

    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
    }

    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }

    keys(){
        let keyArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!keyArr.includes(this.keyMap[i][j][0])){
                        keyArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keyArr
    }

    values(){
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr
    }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000")
ht.set("yellow", "#FFFF00")
ht.set("olive", "#808000")
ht.set("salmon", "#FA8072")
ht.set("duplicate", "#sameStuff")
ht.set("lightcoral", "#F08080")
ht.set("duplicate1", "#sameStuff")
ht.set("mediumvioletred", "#C71585")
ht.set("duplicate2", "#sameStuff")
ht.set("plum", "#DDA0DD")
console.log("ht.get:", ht.get("olive", "#808000"));
console.log("ht.get:", ht.get("salmon", "#FA8072"));
console.log("ht.get:", ht.get("maroon", "#800000"));
console.log("ht.keys:", ht.keys());
console.log("ht.values:", ht.values());