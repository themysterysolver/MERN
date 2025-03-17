// creating  aobj
obj={
    name:"new name",
    hobbies:["football","crciket",["kabadi"]]
}
console.log(obj);
console.log(obj.name,obj.hobbies[1]);
obj.hobbies.splice(1,1);
console.log(obj);

//loops
console.log("for loop using in");
for(let key in obj){
    console.log(key,obj[key]);
}
for(let key in obj.hobbies){
    console.log(key,obj.hobbies[key]);
}

console.log("DOCUMENT",document);


for(let ele of ["abi","varsh","is","Mine"]){
    console.log(ele);
}
for(let ele of "hello abi"){
    console.log(ele);
}

//dom
console.dir("DOCUMENT",document);

console.log(document.getElementsByClassName("t"));
let head=document.getElementsByClassName("t");
console.log(head,typeof(head));
console.log(head[0]);
console.log(head[1]);
head[0].innerHTML="<div> wow </div>";
head[1].innerText="Prabh is the only goat";
console.log(head[0]);
console.log(head[1]);

function myCounter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
let c=myCounter();
console.log(c());
console.log(c());
console.log(c());


function myCounter2(){
    let count=0;
    return {
        inc:()=>{
            count++;
            return count;
        },
        dec:()=>{
            count--;
            return count;
        }
    }
}

console.log("WAY-2:");
var c1=myCounter2();
console.log(c1.inc());
console.log(c1.dec());
console.log(c1.inc());
console.log(c1.inc());
console.log(c1.inc());
console.log(c1.dec());
console.log(c1.dec());


let thep=document.getElementById("p");
console.log("ID DEF:",thep,typeof(thep));
thep.innerText="Men in love are different!";

// evaluvate
const evaluvate=()=>{
    let change=document.getElementById("name");
    console.log(change.value,change.placeholder);
    let att=change.getAttribute("placeholder");
    console.log(att,typeof(att));
    change.placeholder="I win"
    // change.getAttribute("placeholder")="I win";
    change.value=null;
};