
//q1

for (let i = 0; i <= 25; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
//q2

for (let i = 1; i <= 10; i++) {
    let square = i * i;
    console.log(`${i} is ${square}`);
}

//q3
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
//q4

let fibonacci = [0, 1];

for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log( 'fibonacci', fibonacci);

//q5
for (let i = 1; i <= 3; i++) {
    console.log(i);
    for (let j = 1; j <= 10; j++) {
        console.log(`i * j = ${i * j}`);
    }
}