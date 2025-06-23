const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        //checking for empty input
        alert("In order to add a task you must write a task (:");
    }
    else{
        //adding task to the list
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //cross icon (delete task)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    //clears input
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click", function(e){
    //checks/unchecks tasks when task clicked (checked)
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    //removes task when cross icon is clicked (delete)
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

//save in browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//show the taks
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();