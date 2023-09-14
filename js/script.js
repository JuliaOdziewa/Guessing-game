const getRandomNumber = (maxNumber) => {
    return Math.floor(Math.random() * maxNumber);
};

const getNumberRange = (hardnessLevel) => {
    switch (hardnessLevel) {
        case "easy":
            return 101;
        case "medium":
            return 501;
        case "hard":
            return 1001;
    }
};

let randomNumber;

const onFormSubmit = (event) => {
    event.preventDefault();
    const inputNumber = document.querySelector(".js-number");
    const number = parseInt(inputNumber.value, 10);
    const gameInfo = document.querySelector(".js-info");

    if (number < randomNumber) {
        gameInfo.innerText = `Liczba ${number} jest za mała!`;
    } else if (number > randomNumber) {
        gameInfo.innerText = `Liczba ${number} jest za duża!`;
    } else if (number === randomNumber) {
        alert(`Gratulacje! Odgadłeś liczbę: ${number}`);
    }
};

const init = () => {
    const form = document.querySelector(".js-form");
    const levelInput = document.querySelector(".js-level");

    levelInput.addEventListener("change", () => {
        const level = levelInput.value;
        const maxNumber = getNumberRange(level);
        randomNumber = getRandomNumber(maxNumber);
    });

    form.addEventListener("submit", onFormSubmit);
};

init();