const adviceNum = document.querySelector(".advice-num")
const advice = document.querySelector(".advice")
const generateBtn = document.querySelector(".generate")

function generateAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        adviceNum.textContent = `ADVICE #${data.slip.id}`
        advice.textContent = `"${data.slip.advice}"`
    })
}

generateBtn.addEventListener("click" , generateAdvice)

