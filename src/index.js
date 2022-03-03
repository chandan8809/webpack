
document.querySelector("#myForm").addEventListener("submit",addItem)
function addItem(event){
    event.preventDefault();
    var name=document.querySelector("#name").value;
    var qty=document.querySelector("#qty").value;
    var priority=document.querySelector("#priority").value
    console.log(name,qty,priority)

    var row=document.createElement("tr")

    var td1=document.createElement("td")
    td1.textContent=name
    var td2=document.createElement("td")
    td2.textContent=qty
    var td3=document.createElement("td")
    if(priority=="High"){
        td3.style.backgroundColor="red"
    }
    td3.textContent=priority;
    var td4=document.createElement("td")
    td4.textContent="Delete";
    td4.addEventListener("click",deleteTask)
    
    row.append(td1,td2,td3,td4)
    document.querySelector("tbody").append(row)
}
function deleteTask(event){
    console.log(event.target.parentNode)
    event.target.parentNode.remove()

    console.log("here")
}


