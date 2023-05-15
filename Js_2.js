const submitButton = document.querySelector(".btnTask2");
let array = document.querySelector(".array"); 

submitButton.addEventListener("click",() => {array.innerHTML = task();});

let numbers = [];

function task(){
    const inp = document.querySelector(".text");
    if(numbers.indexOf(inp.value) === -1){
        numbers.push(inp.value);
        return numbers;
    }
    
    alert("Число вже введено");
    return numbers;
}

