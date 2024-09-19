/*let box = document.querySelector("div");
box.onmouseover = (e) => {
   alert('mouse over the div');
   console.log('btn mouserOver');
    console.log(e.type);
    console.log(e.clientX, e.clientY);
}*/

let btn = document.querySelector("button")
let curMode = "light";
btn.addEventListener('click', function () {
    if (curMode === "light"){
        curMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";    
    }else{
        curMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(curMode);
    
});