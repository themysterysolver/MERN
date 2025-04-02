document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("form").addEventListener("submit",(e)=>{
        e.preventDefault();

        let amount=parseFloat(document.getElementById("amount").value);
        let category=document.getElementById("credit_drop").value;
        let note=document.getElementById("note").value;
        let type="Credit";
        let new_balance=(parseFloat(localStorage.getItem("balance"))||0)+amount;

        let new_transaction={
            date:new Date().toLocaleString(),
            type:type,
            amount:amount,
            balance:new_balance,
            category:category,
            desc:note
        }
        localStorage.setItem("balance",new_balance);

        let transaction_hist=JSON.parse(localStorage.getItem("transactions"))||[];
        transaction_hist.push(new_transaction);
        localStorage.setItem("transactions",JSON.stringify(transaction_hist));

        console.log(JSON.parse(localStorage.getItem("transactions")));
        window.location.href = "balance.html";
    });
});
