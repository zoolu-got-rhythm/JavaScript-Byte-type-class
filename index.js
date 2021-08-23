const { ByteUnsignedType } = require("./ByteUnsignedType");

// example
const byteVal = new ByteUnsignedType(5); // create byte value
console.log(byteVal.getByte()); // => 5
console.log(byteVal.toString()); // see binary representation (00000101)
byteVal.setByte(8); // change/mutate byte value
console.log(byteVal.getByte()); // => 8
console.log(byteVal.toString()); // see binary representation (00001000)