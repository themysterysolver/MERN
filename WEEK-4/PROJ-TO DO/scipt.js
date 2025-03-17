var theID=0;
function create(){
    let contentHolder=document.getElementById("content");
    let task=document.getElementById("task").value;
    if(task.trim()===""){
        return;
    }
    let li=document.createElement("li");
    let input=document.createElement("input");
    let label=document.createElement("label");

    li.classList.add("list-group-item");
    input.classList.add("form-check-input","me-1");
    label.classList.add("form-check-label");

    input.type="checkbox";
    input.id=theID;

    label.for=theID;
    theID++;
    label.innerHTML=task;

    li.appendChild(input);
    li.appendChild(label);

    var dropd=document.getElementById("completed");
    li.onclick=function(){
        let newLi=document.createElement("li");
        newLi.classList.add("dropwon-item");
        newLi.innerText=task;
        dropd.appendChild(newLi);
        li.remove();
    }
    contentHolder.appendChild(li);
    document.getElementById("task").value="";
}
