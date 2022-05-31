const inputK = document.querySelectorAll(".calculate-times-input");
const outputK = document.querySelector(".calculate-times-output");

const inputD = document.querySelectorAll(".calculate-divide-input");
const outputD = document.querySelector(".calculate-divide-output");
const inputP = document.querySelectorAll(".calculate-add-input");
const outputP = document.querySelector(".calculate-add-output");
const inputM = document.querySelectorAll(".calculate-substract-input");
const outputM = document.querySelector(".calculate-substract-output");

const calculateBtn = document.querySelector(".calculate");

calculateBtn.addEventListener("click", function () {
    for (let i = 0; i < inputK.length; i++) {
        outputK.textContent = Number(inputK[0].value) * Number(inputK[1].value);
        if (inputD[0].value === "" || inputD[1].value === "") {
            outputD.textContent = 0;
        } else if (Number(inputD[1].value) === 0) {
            outputD.textContent = "ER";
        } else {
            outputD.textContent = Number(inputD[0].value) / Number(inputD[1].value);
        }
        outputP.textContent = Number(inputP[0].value) + Number(inputP[1].value);
        outputM.textContent = Number(inputM[0].value) - Number(inputM[1].value);
    }
});
