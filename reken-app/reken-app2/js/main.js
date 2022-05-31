const inputs = document.querySelectorAll(".inputs");
const buttonts = document.querySelectorAll(".btn");
const results = document.querySelectorAll(".result");

buttonts[0].addEventListener('click', function () {
    results[0].textContent = (Number(inputs[0].value) / 100) * Number(inputs[1].value);
})

buttonts[1].addEventListener('click', function () {
    results[1].textContent = (Number(inputs[2].value) * 1000) / Number(inputs[3].value) + " mAh";
})

buttonts[2].addEventListener('click', function () {
    results[2].textContent = Number(inputs[4].value) * Number(inputs[5].value) + " W";
})

buttonts[3].addEventListener('click', function () {
    if (inputs[7].value === "+") {
        results[3].textContent = Number(inputs[6].value) + Number(inputs[8].value);
    } else if (inputs[7].value === "-") {
        results[3].textContent = Number(inputs[6].value) - Number(inputs[8].value);
    } else if (inputs[7].value === "*") {
        results[3].textContent = Number(inputs[6].value) * Number(inputs[8].value);
    } else if (inputs[7].value === "/") {
        if (inputs[8].value === "0") {
            results[3].textContent = "ER";

        } else {
            results[3].textContent = Number(inputs[6].value) / Number(inputs[8].value);
        }
    } else {
        results[3].textContent = "ER";

    }
})

