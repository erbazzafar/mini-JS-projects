let div = document.querySelector("div")
console.log(div);

let id = div.getAttribute("id");
console.log(id);

div.innerText = "hello ladies and gentlemen !!";
div.style.height = "100px";
div.style.width = "240px";
div.style.alignContent = "center";
div.style.marginLeft = "50px";
div.style.marginTop = "50px";
div.style.padding = "50px";
div.style.backgroundColor = "yellow";
div.style.color = "blue";
div.style.visibility =  "visible";

let list = document.createElement("ul");
console.log(list);
list.innerText = "biryani";
list.innerText = "burger";
div.after(list);
list.remove();


let div2 = document.querySelector("#box2")
console.log(div2);
div2.innerHTML = "practice question no 1"
let box2 = div2.getAttribute("id")
console.log(box2);
div2.style.margin = "20px";
div2.style.marginLeft = "10px";
div2.style.height = "80px";
div2.style.width = "100px";
div2.style.backgroundColor = "green"
let newBtn = document.createElement("button");
newBtn.innerHTML = "Click Me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
div2.prepend(newBtn);
newBtn.addEventListener('dblclick', function(){
    alert(' double button clicked!!');
});

/*
let para = document.querySelector("p")
console.log(para); 
console.log(para.getAttribute("class"));
//para.setAttribute("class", "newClass");
para.classList.add("newClass")
*/