let inputText = document.querySelector("#task")
let addButton = document.querySelector("#liveToastBtn")
let toDoList = document.querySelector("#list")
let liveToastSuccess = document.querySelector(".success")
let liveToastError = document.querySelector(".error")
let liElementList = document.getElementsByClassName("li")

function newElement () {
    if(inputText.value == ''){
        $(".error").toast("show");
    }
    else {
        $(".success").toast("show");
        let liElement = document.createElement("li")
        let liElementSpan = document.createElement("span")
        liElementSpan.className = "deleteListElement"
        liElementSpan.innerHTML = "X"
        
        liElement.innerText = inputText.value
        toDoList.appendChild(liElement)
        liElement.appendChild(liElementSpan)
        inputText.value = ''
        removeElement() //Sonradan eklenen elemanları da listeye eklemek için burada çalıştırıldı.
        makeItDone()    //Sonradan eklenen elemanları da listeye eklemek için burada çalıştırıldı.
    }
}

function removeElement () {
    let liElementSpan = document.getElementsByClassName("deleteListElement")
    for (let i = 0; i < liElementSpan.length; i++) {
        liElementSpan[i].onclick = function() {
            this.parentElement.remove();
        }      
    }
}

function makeItDone () {
    let liElementList = document.getElementsByTagName("li")
    for (let i = 0; i < liElementList.length; i++) {
        liElementList[i].onclick = function() {
            this.classList.toggle("checked");
        }      
    }
}
