document.addEventListener("DOMContentLoaded",()=>{
    if(localStorage.getItem("balance")===null){
        localStorage.setItem("balance",JSON.stringify(0));
        console.log("BALANCE INTIATED");
    }
    if(localStorage.getItem("transaction")===null){
        localStorage.setItem("transaction",JSON.stringify([]));
        console.log("TRANSACTION INTITAED");
    }
})