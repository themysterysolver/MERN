document.addEventListener("DOMContentLoaded",()=>{
    let bal=document.getElementById("balance");
    bal.innerHTML=`<h1>Rs.${localStorage.getItem("balance")}</h1>`
});