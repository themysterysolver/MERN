document.addEventListener("DOMContentLoaded",()=>{
    let trans=document.getElementById("trans");
    let transactions=localStorage.getItem("transactions");
    //console.log("checkpoint",localStorage.getItem("transaction").length,localStorage.getItem("transaction"));
    console.log(JSON.parse(transactions));
    if(!transactions||JSON.parse(transactions).length===0){
        trans.innerHTML=`<h3>No Transactions made yet!</h3>`
    }else{
        let table=`
        <table class="table table-striped table-secondary table-bordered table-hover">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Category</th>
                    <th scope="col">Description</th>
                </tr>
        </thead><tbody>`;

        JSON.parse(transactions).reverse().forEach(el => {
            table+=`
                <tr>
                    <td>${el.date}</td>
                    <td>${el.type}</td>
                    <td>${el.amount}</td>
                    <td>${el.balance}</td>
                    <td>${el.category}</td>
                    <td>${el.desc}</td>
                </tr>`
        });
        table+=`</tbody></table>`
        trans.innerHTML=table;
    }
});