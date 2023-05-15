const textToCount = document.querySelector(".textToCount")
const resultP = document.querySelector(".result3P")


const btnSubmit = document.querySelector(".btnTask3");

btnSubmit.addEventListener("click", () => {

    if(textToCount.value !== ""){
        let Count = textToCount.value.match(/[\w\d'’-]+/gi).length;   //регулярний вираз
        resultP.innerHTML = `Кількість слів у тексті: ${Count}`;
    }

});
