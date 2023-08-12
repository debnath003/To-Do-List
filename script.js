const inputBox = document.getElementById("inputbox");
const list_container = document.getElementById("List");
function Addtask()
{
    if (inputBox.value === ''){
        alert("You have to write something!");
    }  
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list_container.appendChild(li);
        let span = document.createElement("Span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }  
    inputBox.value = "";
    datasave();
}

list_container.addEventListener("click", function(f)
{
    if(f.target.tagName === "LI"){
        f.target.classList.toggle("checked");
        datasave();
    }else if(f.target.tagName === "SPAN"){
        f.target.parentElement.remove();
        datasave();
    }
}, false);

function datasave()
{
    localStorage.setItem("da_ta", list_container.innerHTML);
}

function show_list()
{
    list_container.innerHTML = localStorage.getItem("da_ta");
}

show_list();