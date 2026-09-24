// Template Literal
// const name = "hoadv";
// const age = 30;
// const info = "Ten: " + name + " Tuoi: " + age;
// console.log(info);
// // ``
// const myName = `- Ten toi la: ${name}
//                 - Tuoi: ${age}
//                 `;
// console.log(myName);

// const student = {
//   id: 1,
//   name: "Nguyễn Văn An",
//   age: 20,
// };

// const studentInfo = `
//                     Mã sinh viên: ${student.id}
//                     Tên: ${student.name}
//                     Tuổi: ${student.age}
//                     `;
// console.log(studentInfo);

// const arr = [
//   {
//     id: 1,
//     name: "Nguyễn Văn An",
//     age: 20,
//   },
// ];

// const arrInfo = `${arr[0].name}`;
// console.log(arrInfo);

// // const html = `
// //   <div>
// //     <h3>${student.name}</h3>
// //     <p>Mã: ${student.id}</p>
// //     <p>Tuổi: ${student.age}</p>
// //   </div>
// // `;
// // document.getElementById("app").innerHTML = html;

// function add(a, b) {
//   return a + b;
// }
// // arrow function
// const add2 = (a, b) => {
//   return a + b;
// };

// const add3 = (a, b) => a + b; // return a + b
// console.log(add2(3, 4));
// console.log(add2(6, 4));

// // map
// const students = [
//   { id: 1, name: "An" }, // item
//   { id: 2, name: "Bình" }, // item
//   { id: 3, name: "Cường" }, // item
// ];

// const mapInfo = students.map((item) => {
//   console.log(item);
//   return `ID: ${item.id} - Ten: ${item.name}`;
// });

// const html = students.map((student) => {
//   return `
//     <tr>
//       <td>${student.id}</td>
//       <td>${student.name}</td>
//     </tr>
//   `;
// });
// console.log(html);
// document.getElementById("app").innerHTML = html;

// // Bài 1,2

// // const name = "Nguyễn Văn An";
// // const age = 20;
// // const major = "Lập trình Web";    
const student1 = {
  id: 2,
  name: "Nguyễn Văn An",
  age: 20,
  major: "Lập trình Web"
};


const result1 = `
ID: ${student1.id}
Xin Chào ${student1.name}
Ngành học: ${student1.major}
Bạn ${student1.age} tuổi
`;

console.log(result1);

const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));

const square = (n) => n * n;

console.log(square(5));

const add1 = (a,b) => a + b;
console.log(add1(10,20));

const hello = (name) => `Xin chào ${name}`;
console.log(hello("An"));
 

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((number) => {
  return number;
});

console.log(newNumbers);

const codes = [
  { id: 1, name: "An", age:"20" },
  { id: 2, name: "Bình", age:"21" },
  { id: 3, name: "Cường" , age:"22"},
];
const mapInfo = codes.map((item) => {
  console.log(item.name);
  return `Ten: ${item.name}`;
});
const html = codes.map((code) => {
  return `
    <tr>
      <td>${code.id}</td>
      <td>${code.name}</td>
      <td>${code.age}</td>
    </tr>
  `;
});

const result = html.join("");

document.getElementById("codes").innerHTML = result;
