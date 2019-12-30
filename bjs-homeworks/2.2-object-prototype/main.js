function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
    let now = +new Date();

    birthday = +new Date(birthday);

    let diff = now - birthday;

    let age = diff / (1000 * 60 * 60 * 24 * 365);

    return (age > 18);
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    }
    let sound = animal.sound;
    if (animal !== undefined) {
        return sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let average = 0;
    for (let i = 0; i < marks.length; i++) {
        average = average + Number(marks[i]);
    }

    average = average / marks.length;
    roundedAverage = Math.round(average);
    return roundedAverage;
}
