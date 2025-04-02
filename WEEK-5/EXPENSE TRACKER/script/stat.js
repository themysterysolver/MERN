document.addEventListener("DOMContentLoaded",()=>{
    let el=document.getElementById("stat");
    let t=JSON.parse(localStorage.getItem("transactions"));

    let now=new Date();
    let currMon=now.getMonth();
    let currYr=now.getFullYear();

    let nt=t.filter((trans)=>{
        let transDate=new Date(trans.date);
        return transDate.getMonth()===currMon && transDate.getFullYear()===currYr;
    });

    let total_trans=nt.length;
    let credit_l=nt.filter(el=>el.type==="Credit").length;
    let deit_l=nt.filter(el=>el.type==="Debit").length;

    let sumC=nt.filter(el=>el.type==="Credit").reduce((sum,el)=>sum+el.amount,0);
    let sumD=nt.filter(el=>el.type==="Debit").reduce((sum,el)=>sum+el.amount,0);

    el.innerHTML = `
        <p><b>Total Transactions</b>: <span class="red">${total_trans}</span></p>
        <p><b>Total Credits</b>: <span class="red">${credit_l}</span> (<b>Amount</b>:<span class="red"> ${sumC}</span>)</p>
        <p><b>Total Debits</b>: <span class="red">${deit_l}</span> (</b>Amount</b>:<span class="red"> ${sumD}</span>)</p>
        <p><b>Net Change</b>:<span class="red">${sumC - sumD}</span></p>
    `;
});