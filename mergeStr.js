function mergeString(str1, str2) {
    let mergedString = []
    for(let i=0; i<str1.length && i<str2.length; i++){
        mergedString = mergedString + str1[i] ;
        mergedString = mergedString + str2[i] ;

    }
    return mergedString;
}
console.log(mergeString("hello", "erbaz"));
