const {computeBinaryString} = require("./computeBinaryStringRepOfByteBruteForce");

// 0 - 255 range 
class ByteUnsignedType{
    #unsignedByteArr;

    constructor(number){
        if(!(typeof number === "number" && this.#isInt(number)))
            throw new Error("must parse in an integer/whole number");
        this.#unsignedByteArr = new Uint8Array(1);
        this.#unsignedByteArr[0] = number;
    }

    #isInt(n) {
        return n % 1 === 0;
     }

    getByte(){
        return this.#unsignedByteArr[0];
    }

    setByte(number){
        this.#unsignedByteArr[0] = number; 
    }

    toString(){
        return computeBinaryString(this.#unsignedByteArr[0]);
    }
}

module.exports = {ByteUnsignedType};

