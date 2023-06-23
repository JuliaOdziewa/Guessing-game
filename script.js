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

