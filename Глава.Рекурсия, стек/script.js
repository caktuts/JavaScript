// function sumTo(n){
//     if(n == 1) return 1;
//     return n + sumTo(n-1);
// }
// alert(sumTo(20));

// function sumTo(n){
//     return n * (n+1)/2;
// }
// alert((sumTo(5)));

// function sumTo(n){
//     var sum = 0;
//     for(var i = 0; i<=n; i++){
//         sum +=i;
//     }
//     return sum;
// }
// alert(sumTo(100));


//#2
// function factorial(n) {
//     return (n != 1) ? n * factorial(n-1): 1;
// }
// console.log(factorial(5));

//#3
//Решение рекурсией
// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//   }
//Решение циклом
// function fib(n){
//     var a = 1,
//         b = 1;
//     for(var i = 3; i<=n; i++){
//         var c = a +b;
//         a = b;
//         b =c;
//     }
//     return b;
// }
// console.log(fib(77));