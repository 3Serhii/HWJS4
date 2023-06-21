//
// let num = 50;
//
// while (num <= 100) {
//     console.log(num);
//     ++num;
// }
//
//
// let num = 50;
//
// do {
//     console.log(num);
//     ++num;
// } while (num <= 20);
//
//
// let num // for homework
//
// do {
//     num = prompt("type a number");
// } while (isNaN(num) || num === null  || num === String());
//
// console.log(num);
// console.log(typeof num);
//
//
// const words = ['Hey','you','are','such','a','good','person','ever']
// for (let i = 0; i < words.length; i++) {
//     console.log(i)
// }
//
// let num = [];
//
// for (i = 5; i <= 10; i++) {
//     num.push(i);
// }
//
//
// console.log(num);
// console.log(num[4]);
//
// const pets = ["Dog", "Cat", "Wolf", "Bear", "Sparrow", "Dolphin", "Octopus", "Pike", "Bass", "Zebra", "Penguin",];
// let birdIndex = []
// for (i = 0; i < pets.length; i++) {
//     if (pets[i] === "Sparrow" || pets[i] === "Penguin") {
//         birdIndex.push(i);
//     }
// }
//
// console.log(birdIndex);
// console.log(typeof birdIndex);
//
//
// for (i = 0; i <= 10; i++) {
//     if (i % 3 !==0) {
//         continue;
//     }
//     console.log(i);
// }

// Задача 1
const numT1 = [];

for (i = 10; i <= 20; i++) {
    numT1.push(i);
}
alert(`Задача 1 (Вивести на сторінку в один рядок через кому числа від 10 до 20.): ${numT1}`);


// Задача 2
const resT2 = [];

for (i = 10; i <= 20; i++) {
    let numT1 = i * i;
    resT2.push(numT1);
}
alert(`Задача 2 (Вивести квадрати чисел від 10 до 20.): ${resT2}`);


// Задача 3
let numT3 = 7;
let resT3 = [];

for (i = 1; i <= 10; i++) {
    let calcT3 = i * numT3;
    resT3.push(calcT3);
}

alert(`Задача 3 (Вивести таблицю множення на 7.): ${resT3}`);


// Задача 4

let resT4 = 0;

for (i = 1; i <= 15; i++) {
    resT4 += i;
}

alert(`Задача 4 (Знайти суму всіх цілих чисел від 1 до 15.): ${resT4}`);


//Задача 5
let resT5 = 1;

for (let i = 15; i <= 35; i++) {
    resT5 *= i;
}

alert(`Задача 5 (Знайти добуток усіх цілих чисел від 15 до 35.): ${resT5}`);


// Задача 6

let resT6 = 0;

for (i = 1; i <= 500; i++) {
    resT6 += i;
}

let calcT6 = resT6 / 500;

alert(`Задача 6 (Знайти середнє арифметичне всіх цілих чисел від 1 до 500.): ${calcT6}`);


// Задача 7

let resT72 = [];

let resT71 = 0;

for (let i = 30; i <= 80; i++) {
    if (i % 2 !==0) {
        continue
    }
    resT72.push(i);
    resT71 += i;

   // resT7.push(i);
}

alert(`Задача 7 (Вивести суму лише парних чисел в діапазоні від 30 до 80.): ${resT72} = ${resT71}`);




// Задача 8
let resT8 = [];

for (let i = 100; i <= 200; i++) {
    if (i % 3 !== 0) {
        continue
    }
    resT8.push(i);
}

alert(`Задача 8 (Вивести всі числа в діапазоні від 100 до 200 кратні 3.): ${resT8}`);




