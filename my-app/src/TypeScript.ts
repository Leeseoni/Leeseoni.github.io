function 함수(...a: (number | string | boolean)[]) {
  console.log(a);
}
함수(1, 5, 3, 6, 5, 6, 7);

// let person = { student: true, age: 20 };

function 함수1({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}
함수1({ student: true, age: 20 });

function 최댓값(...x: number[]) {
  let result = 0;
  x.forEach((i) => {
    if (result < i) {
      result = i;
    }
  });
  return result;
}
console.log(최댓값(4, 6, 3, 2));

// narrowing 타입함수  never타입
function 함수2(parameter: string) {
  if (typeof parameter == "string") {
    console.log(parameter);
  } else {
    console.log(parameter); // never타입
  }
}

class User {
  name; //name='kim'; 필드값
  constructor() {
    this.name = "kim";
  }
}
let 철수 = new User();
console.log(철수);
