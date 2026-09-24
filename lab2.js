{
// const student1 = "Nguyễn Văn An";
// const student2 = "Trần Văn Bình";
// const student3 = "Lê Văn Nam";

// const students = ["Nguyễn Văn An", "Trần Văn Bình", "Lê Văn Nam"];
// const ids = [1,5,10,45,54];
// const actives = [true, false, 42, "hainv"];

// students[0]="nox";
// console.log(students[0]);

// console.log(students[10]);

// console.log("sau khi thay doi",students);

// //for
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }


// Object
const student = {
  name: "Nguyễn Văn Hải",
  id: 444,
  age: 23,
  email: "nox@gmail.com",
  major: "CNTT",
};

console.log(student.name);

student.id = "777";
console.log(student.id);

student.address = "90";
console.log(student.address);


const myStudents = [
  {
    id: "ph6666",
    name: "hoadv",
  },
  {
    id: "ph888",
    name: "namdv",
  },
];


// Bài 1
// const names = ["An", "Bình", "Nam", "Hòa", "Lan"];
// console.log(names);
// console.log(names[0]);
// console.log(names[4]);
// console.log(names.length);

// names.push("Nox");
// console.log(names);

// names.pop();
// console.log(names);


// Bài 2
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }


// Bài 3
// const student = {
//   id: 1,
//   name: "Nguyễn Văn An",
//   age: 20,
//   email: "an@gmail.com",
//   major: "CNTT",
// };

// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.email);

// student.age = 21;
// console.log(student);

// student.phone = "0987654321";
// console.log(student);


console.log(myStudents[0].id);
console.log(myStudents[0].name);


// Hiển thị myStudents
let html = document.getElementById("students");
let content = "";

for (let i = 0; i < myStudents.length; i++) {
  content += `
    <div>
      <h3>Ten sinh vien: ${myStudents[i].name}</h3>
      <h4>ID sinh vien: ${myStudents[i].id}</h4>
    </div>
  `;
}

html.innerHTML = content;

console.log(html);


// Bài 4
const students = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
  },
  {
    id: 2,
    name: "Trần Văn Bình",
    age: 21,
  },
  {
    id: 3,
    name: "Lê Văn Nam",
    age: 20,
  },
];

// In danh sách
console.log(students);

// In tên sinh viên đầu tiên
console.log(students[0].name);

// In tuổi sinh viên thứ hai
console.log(students[1].age);

// Duyệt danh sách bằng for
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}


// Bài 5 - Hiển thị danh sách
let content2 = "";

for (let i = 0; i < students.length; i++) {
  content2 += `
    <div>
      <h3>${students[i].name}</h3>
      <p>Tuổi: ${students[i].age}</p>
    </div>
  `;
}

html.innerHTML += content2;
}