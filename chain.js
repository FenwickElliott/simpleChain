var SHA256 = require("crypto-js/sha256");

class Bloc {
    constructor(index, previousHash, data) {
        this.index = index;
        this.previousHash = previousHash.toString();
        this.timestamp = Date.now();
        this.data = data;
        this.hash = SHA256(this).toString();
    }
}


let genBlock = new Bloc(0, "", "Zeroth hour")

let chain = [genBlock];


chain[1] = new Bloc(1, SHA256(genBlock), "Linked")


console.log(chain)