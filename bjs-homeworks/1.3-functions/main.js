/* -------------------- Задание 1 -------------------- */

console.log("Задание 1");
console.log("");

function getSolutions( a, b, c ) {

    let D = b**2 - 4 * a * c;

    if ( D < 0 ) {
        return {D};
    }else if ( D === 0 ) {
        let x1 = -b / (2*a);
        return {root: x1, D};
    }else {
        let x1 = (-b + Math.sqrt(D)) / (2*a);
        let x2 = (-b - Math.sqrt(D)) / (2*a);
        return { roots: {значение_x1: x1, значение_x2: x2}, D};
    }

}

function showSolutionsMessage( a, b, c ) {

    let result = getSolutions(a,b,c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log("Значение дискриминанта: " + result.D);

    if ( result.D < 0 ) {
        console.log("Уравнение не имеет вещественных корней");
    }else if ( result.D === 0 ) {
        console.log("Уравнение имеет один корень X₁ = " + result.root);
    }else {
        console.log("Уравнение имеет два корня. X₁ = " + result.roots.значение_x1 + ", X₂ = " + result.roots.значение_x2);
    }
}

showSolutionsMessage(1,2,3);
showSolutionsMessage(7,20,-3);
showSolutionsMessage(2,4,2);

/* -------------------- Задание 1 -------------------- */



/* -------------------- Задание 2 -------------------- */

console.log("");
console.log("Задание 2");
console.log("");

function getAverageScore(data) {

    let len = 0;
    let evaluation = 0;

    for (averageRating in data) {
        let value = data[averageRating];
        let sum = 0;

        for (let i = 0; i < value.length; i++) {
            sum += value[i];
        }

        data[averageRating] = sum / value.length;

        evaluation += data[averageRating];
        len++;
        data.average = evaluation / len;
    }
    return data
}

console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poentry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}));

/* -------------------- Задание 2 -------------------- */



/* -------------------- Задание 3 -------------------- */

console.log("");
console.log("Задание 3");
console.log("");

function getPersonData(secretData) {
    if (secretData.aaa === 0 && secretData.bbb === 0) {
        return secretData = {
            firstName: "Родриго",
            lastName: "Родриго"
        };
    } else if (secretData.aaa === 1 && secretData.bbb === 0) {
        return secretData = {
            firstName: "Эмильо",
            lastName: "Родриго"
        };
    } else if (secretData.aaa === 0 && secretData.bbb === 1) {
        return secretData = {
            firstName: "Родриго",
            lastName: "Эмильо"
        };
    } else {
        return secretData = {
            firstName: "Эмильо",
            lastName: "Эмильо"
        };
    }
}

console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));
console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));

/* -------------------- Задание 3 -------------------- */
