
let taskName = document.querySelector("#task-name");
let taskDesc = document.querySelector("#task-desc");
let taskStatus = document.querySelector("#status");
let btn = document.querySelector("#submit");

// table 
let tbTaskName = document.querySelector("#tb-name");
let tbTaskDesc = document.querySelector("#tb-desc");
let tbTaskStatus = document.querySelector("#tb-status");


btn.addEventListener("click",()=>{
    if(taskName !=  "" && taskDesc != "" && taskStatus!= ""){
        localStorage.setItem("taskName", taskName.value);
        localStorage.setItem("taskDesc", taskDesc.value);
        localStorage.setItem("taskStatus", taskStatus.value);

        // get data from local storage
        tbTaskName.innerHTML = localStorage.getItem("taskName" || "");
        tbTaskDesc.innerHTML = localStorage.getItem("taskDesc" || "");
        tbTaskStatus.innerHTML = localStorage.getItem("taskStatus" || "");        

    }
    else{

    }
});