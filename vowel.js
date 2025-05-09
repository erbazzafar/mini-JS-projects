let count = 0;

// function countVowel ( str ) {
//     for(let i=0; i<str.length; i++){
//         let char = str[i].toLowerCase();
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
//             count ++;
//         }
//     }
//     return count;
// }

const vowelCalc = (str2) => {
    for(let i=0; i<str2.length; i++){
        let char = str2[i].toLowerCase();
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
            count ++;
        }
    }
    return count;
}

console.log("the number of vowels are: ",vowelCalc("aeiouaeiou"));
