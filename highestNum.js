let a = [3,6,2,5,32,78,3]

function highestNum(arr){
    let temp = arr[0];
    for(let i=0; i<arr.length; i++){
        if(temp < arr[i]){
            temp = arr[i]
        }
    }
    return temp;
}

console.log("highest Number is: ", highestNum(a));
