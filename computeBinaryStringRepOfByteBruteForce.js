function computeBinaryRepresentationOfByteNumberBruteForce(numberAsByteType){
    if(numberAsByteType > 255 || numberAsByteType < 0)
        throw new Error("must be a valid unsigned byte integer (0-255)");

    const byteBinaryEncoding = [1,2,4,8,16,32,64,128]; 
    while(true){ // try forever
        let length = Math.round(Math.random() * (byteBinaryEncoding.length));
        let bitsThatMakeUpNumber = [];
        while(bitsThatMakeUpNumber.length != length){
            let bitPos = byteBinaryEncoding[Math.floor(Math.random() * byteBinaryEncoding.length)];
            if(!bitsThatMakeUpNumber.includes(bitPos)){
                bitsThatMakeUpNumber.push(bitPos);
            }
        }
        
        if(sum(bitsThatMakeUpNumber) == numberAsByteType){
            let oneAndZeroBitRepresentationArr = [];
            for(let i = 0; i < byteBinaryEncoding.length; i++){
                if(bitsThatMakeUpNumber.includes(byteBinaryEncoding[i])){
                    oneAndZeroBitRepresentationArr.push(1);
                }else{
                    oneAndZeroBitRepresentationArr.push(0);
                }
            }
            return oneAndZeroBitRepresentationArr.reverse();
        }
    }
}

function sum(arr){
    return arr.reduce((acum, current) => acum + current, 0); // if empty arr garuantee return 0
}

module.exports.computeBinaryString = (number) => computeBinaryRepresentationOfByteNumberBruteForce(number).toString();

// test the function with a valid byte number here: 
// e.g: computeBinaryRepresentationOfByteNumberBruteForce(155).toString() => "1,0,0,1,1,0,1,1"
// console.log(computeBinaryRepresentationOfByteNumberBruteForce(155).toString());