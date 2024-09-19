// class person{
//     constructor(){
//         this.species = "humans";
//     }

//     eat(){
//         console.log("eats");
//     }
// }

// class engg extends person{
//     constructor(branch){
//         super();
//         this.branch = branch;
//     }
//     work(){
//         console.log("solves problems");
//     }
// }

// let enggObj = new engg("physicist");

let data = "cheen tapak dam dam";
class user{
    name;
    email;
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data is viewed '", data, "'");
        
    }
}

class admin extends user{
    editData(data){
        this.data = data;
        console.log("data is edited to '", this.data, "'");
         
    }
}

let obj = new user("erbaz", "e@gmail.com");
obj.viewData();
let a1 = new admin();
ed = "teri toi wech kera keera ha"
a1.editData(ed);