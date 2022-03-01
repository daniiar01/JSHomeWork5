let obj = {
  Саша:2000,
  Вася:3000,
  Коля:5000,
}

for (let i in obj){
  console.log(`${i} - зарплата ${obj[i]}.`)
}




let arr = [19, 5, 9, 15, 10, 4];
for (let i = 0; i < arr.length; i++) {
if (arr[i] > 5 && arr[i] < 20) {
console.log(arr[i]);
}
}


let arr1 = [10, 20, 30, 50, 235, 3000];
console.log(arr1.filter(num => ['1','2','5'].includes(num.toString()[0])));

for (let i = 10; i <= 100; i++) {
  if (i % 10 == 0) {
    console.log( i );
  }
}



for (let j = 2; j <= 100; j++) {
  if (j % 2 == 0) {
    console.log( j );
  }
}


 
 
 






