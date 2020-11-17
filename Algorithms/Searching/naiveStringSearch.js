// Write a function to see if there is a match of a substring in the longer string

const naiveStringSearch = (long, short) => {
    let matches = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {    
            if(short[j] !== long[i+j]){
                break;
            }
            if(j === short.length -1){
                matches++;
            }
        }
    }
    return console.log("matches:", matches);
}

naiveStringSearch("lorie loled", "lo") // 2