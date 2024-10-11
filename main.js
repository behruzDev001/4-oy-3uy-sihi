// Integer1:
function task1(cm) {
    let meters = Math.floor(cm / 100); 
    console.log(`${cm} sm = ${meters} metr`);
}
task1(100);  

// Integer2: 
function task2(kg) {
    let tons = Math.floor(kg / 1000); 
    console.log(`${kg} kg = ${tons} tonna`);
}
task2(1000);  // Masalan:

// Integer3:
function task3(bytes) {
    let kilobytes = Math.floor(bytes / 1024); 
    console.log(`${bytes} bayt = ${kilobytes} kilobayt`);
}

task3(2048);  // Masalan: 2048 bayt

// Integer4:
function task4(A, B) {
    let times = Math.floor(A / B);
    console.log(`A = ${A}, B = ${B} bo'lganda B A ga ${times} marta joylashadi.`);
}
task4(15, 4);

// Integer5:
function task5(A, B) {
    let remaining = A % B;
    console.log(`A = ${A}, B = ${B} bo'lganda B A ga joylashgandan keyin ${remaining} qoldiq qoladi.`);
}
task5(15, 4); 

// Integer6:
function task6(num) {
    let tens = Math.floor(num / 10); 
    console.log(`${num} ning o'nliklar xonasidagi raqami: ${tens}`);
}
task6(87); 

// Integer7: 
function task7(num) {
    let sum = Math.floor(num / 10) + (num % 10); 
    console.log(`${num} ning raqamlari yig'indisi: ${sum}`);
}
task7(87); 

// Integer8:
function task8(num) {
    let tens = Math.floor(num / 10);
    let ones = num % 10;
    let swapped = ones * 10 + tens; 
    console.log(`${num} ning raqamlari o'rni almashtirilganda: ${swapped}`);
}
task8(87); 

// Integer9:
function task9(num) {
    let hundreds = Math.floor(num / 100); 
    console.log(`${num} ning yuzlar xonasidagi raqami: ${hundreds}`);
}
task9(567); 

// Integer10:
function task10(num) {
    let ones = num % 10;
    let tens = Math.floor((num % 100) / 10);
    console.log(`${num} ning birliklar xonasi: ${ones}, o'nliklar xonasi: ${tens}`);
}
task10(567); 

// Integer11: 
function task11(num) {
    let hundreds = Math.floor(num / 100);
    let tens = Math.floor((num % 100) / 10);
    let ones = num % 10;
    let sum = hundreds + tens + ones; 
    console.log(`${num} ning raqamlari yig'indisi: ${sum}`);
}
task11(567);  

// Integer12:
function task12(num) {
    let hundreds = Math.floor(num / 100);
    let tens = Math.floor((num % 100) / 10);
    let ones = num % 10;
    let reversed = ones * 100 + tens * 10 + hundreds; 
    console.log(`${num} ning raqamlari teskari yozilganda: ${reversed}`);
}
task12(567);  

// Integer13:
function task13(num) {
    let hundreds = Math.floor(num / 100);
    let rest = num % 100;
    let moved = rest * 10 + hundreds;
    console.log(`${num} ning birinchi raqami o'chirilganda va oxiriga yozilganda: ${moved}`);
}
task13(567); 
