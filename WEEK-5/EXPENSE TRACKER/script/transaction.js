document.addEventListener("DOMContentLoaded",()=>{
    let trans=document.getElementById("trans");
    let transactions=localStorage.getItem("transactions");
    //console.log("checkpoint",localStorage.getItem("transaction").length,localStorage.getItem("transaction"));
    console.log(JSON.parse(transactions));
    if(!transactions||JSON.parse(transactions).length===0){
        trans.innerHTML=`<h3>No Transactions made yet!</h3>`
    }
});