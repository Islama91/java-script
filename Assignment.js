/* 1-  let string = "123";
let number = Number(string);
console.log(number + 7 );
*/
/* 2-  let name = "islam ashraf";
let age = 25;

if (age > 30) {
    console.log("emp");
} else if (age < 30) {
    console.log("inavalid");
}
*/
/* 3 for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}
*/
/* 4 let numbers = [1, 2, 3, 4, 5];
let result = numbers.filter(num => num % 2 == 0);
console.log(result);
*/
/* 5- let arr1 = [1,2,3];
let arr2 = [4,5,6];
let mergearray =[...arr1,...arr2];
console.log(mergearray);
*/
/* 6 let day = 2;
switch (day) {
case 0:
    console.log("Saturday");
    break;
case 1:
    console.log("Sunday");
    break;
case 2:
    console.log("Monday");
    break;
case 3:
    console.log("Tuesday");
    break;
case 4:
    console.log("Wednesday");
    break;
case 5:
    console.log("Thursday");
    break;
case 6:
    console.log("Friday");
    break;
default:
    console.log("default");
}*/
/* 8- function checkNumber(number) {
    if(number % 3=== 0 && number % 5=== 0){
        return "Divisible by both"
    }
    return "No Divisible by both";
}
console.log(checkNumber(15));
*/
/* 9- const square = num => num * num;
console.log(square(5));
*/
/*10- const person ={
    name : "john",
    age : 25
};
function getpersoninfo({name , age}) {
    return ( name + 'is'+ age + 'yearold')
};
console.log(getpersoninfo(person));
*/
/*11-function sum(a,b,c,d,e) {
    return a+b+c+d+e;
};
console.log(sum(1,2,3,4,5,6));
*/
/* 12- function getMessage() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success");
        
        },3000)
    });
};
getMessage().then((result)=>{
    console.log(result);
    
});
*/
/*13-function findlargest(numbers) {
    let largest = numbers[0];
    
    for (let i = 1; i<numbers.length;i++){
        if (numbers[i]> largest) {
            largest=numbers[i];
        }
    }
    return largest;
}
console.log(findlargest([1,3,7,2,4]));
*/

/* 15- let text = "the quick brown fox";
let result = text.split(" ");
console.log(result);

function splitwords(text) {
    return text.split(" ");
}
console.log(splitwords("the quick brown fox"));
*/

////////////////////////////////////////////////////

/*1- Both are used to loop through arrays.
forEach uses a function to get each element.
for...of gets each element directly.
for...of supports break and continue, but forEach does not
*/
/*3-The main difference is:
== compares values after performing type conversion when needed.
=== compares both value and data type without automatic type conversion.
*/
/*4- try-catch is handle error.
      try contains the code.
      catch handles errors.
      Its important in async because it help to prevent unexpect errror.
      */
/*5-Type Conversion :  the type manually.
    Type Coercion   : changes the type automatically. 
    */
//////////////////////////////////////////////////////////////////////////////////////////////////

