function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin
    }
    else {
        // console.log("get pin number 3", pin)
        return getPin()
    }
}



function genaratePin() {
    const pin = getPin()
    document.getElementById("display-pin").value = pin
}


document.getElementById("number").addEventListener('click', function (event) {
    const number = event.target.innerText
    const numberCal = document.getElementById("number-cal")
    if (isNaN(number)) {
        if (number == 'C') {
            numberCal.value = '';
        }
    }
    else {
        const previousNumber = numberCal.value;
        const newNumber = previousNumber + number
        numberCal.value = newNumber;
    }
})

function btnSubmit() {
    const pin = document.getElementById("display-pin").value
    const numberCal = document.getElementById("number-cal").value
    const successMassage = document.getElementById("success");
    const unSuccessMassage = document.getElementById("unsuccess")


    if (pin == numberCal) {
        successMassage.style.display = "block"
        unSuccessMassage.style.display = "none"

    }
    else {
        successMassage.style.display = "none"
        unSuccessMassage.style.display = "block"

    }
}