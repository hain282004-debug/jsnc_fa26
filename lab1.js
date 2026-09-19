let name = "SeaD"; // string

let age = 36; // number

age = "30"; // string

let myName = "hainvph69390"; // string

// boolean: true / false

let online = true;

let isActive = true;

// Nếu đúng thì xảy ra

if (isActive) {
    console.log("hoat dong ", isActive);
}

// tham trị, tham chiếu, địa chỉ bộ nhớ máy tính

name = "hainvph69390";

age = 23;

const a = 10;

const b = 3;

console.log(a * b);

console.log(a / b);

console.log("Ten toi la: ", name);

console.log("Tuoi cua toi la:", age);

// Ham

function sayHello() {
    console.log("xin chao");
    return 10;
}

sayHello();


// ====================
// Bài 2 - Thay đổi biến
// ====================

let age2 = 20;

console.log(age2);

age2 = 21;

console.log(age2);


// ====================
// Bài 3 - Tính toán với biến
// ====================

const a2 = 10;
const b2 = 5;

console.log("Tổng:", a2 + b2);
console.log("Hiệu:", a2 - b2);
console.log("Tích:", a2 * b2);
console.log("Thương:", a2 / b2);


// ====================
// Bài 4 - Hàm chào hỏi
// ====================

function sayHelloName(name) {
    console.log("Xin chào " + name);
}

sayHelloName("An");
sayHelloName("Bình");
sayHelloName("Hải");

function sum(a, b) {
  // return a + b;
  console.log("aaa");
  if (a) {
    console.log(a);
    return;
  }
  console.log(b);
}

sum(3, 4);
// ====================
// Bài 5
// ====================

function sum5(x, y) {
    console.log(x+y);
}
sum5(10,20);
// ====================
// Bài 6
// ====================

function tinhTien(price, quantity) {
    const total=price*quantity;
    console.log(total);
}
tinhTien(5000, 3);

// ====================
// Bài 7
// ====================

const math = 8;
const english = 7;
const javascript = 9;

function calculateAverage(math, english, javascript) {
    const average = (math + english + javascript) / 3;
    return average;
}

const average = calculateAverage(8, 7, 9);

console.log(average);