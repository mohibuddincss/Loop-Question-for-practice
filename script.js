// 1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit in the console.

// let fruits = ["Apple" , "Banana" , "Cherry" , "Mango" , "Pineapple"];

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);    
// }

// 2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to
// a paragraph with the ID output using document.querySelector.

// let colors = ["red", "green", "blue", "white" , "bkack"];

// let paragraph = document.querySelector("body");
// for( let i = 0; i<colors.length; i++){
//     paragraph.innerHTML += colors[i]+ ( " ");
// }


// 3. Write a loop that counts from 1 to 10 and logs each number to the console.

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

// 4. Use a while loop to print numbers from 5 to 1 in the console.

// let num = 5;
// while (num >= 1){
//     console.log(num);
//     num--;
// }

// 5. Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div
// with ID names to show all names separated by commas.

// let names = ["Ali", "Sara", "Ahmed" , "Mohib"];
// for(let i=0; i<names.length; i++){
//     document.querySelector(".container").innerHTML += names[i] + (", ");
// }


// 6. Change the text of a paragraph with ID status to "Loading..." using document.querySelector.


// documnet.querySelector("para").innerHTML = "Loading...";




// 7. Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in
// a paragraph with ID sum.

// let numbers = [5, 10, 15];
// let total = 0;
// for(let i=0; i<numbers.length; i++){
//     // console.log(numbers);
//     total += numbers[i];    
// }
// // console.log(total);
// document.querySelector("#sum").innerHTML = "The Toral of numbers is :" + total;

// let numbers = [5, 10 , 15];
// let total = 0;
// for (let i=0; i<numbers.length; i++){
//     total += numbers[i];    
//     // console.log(numbers);
// }
// // console.log(total); // print for  seeing in console 
// document.querySelector("#sum").innerHTML = "the sum of number" + total;




// 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a single string 
// in a div with ID cities.



// let cities = ["karchi", "Quetta" , "lahore" , "khuzdar"];
// let cityString = "";
// for(i=0; i<cities.length; i++){
//     cityString += cities[i];
//     // console.log(string );
//     documnet.querySelector("#cities").innerHTML = cityString;
// }


// let cities = ["Karachi" , "Lahore" , "Quetta" ];
// let city = "";
// for (i=0; i<cities.length; i++){
//     city += cities[i] + " ";
//     document.querySelector("#cities").innerHTML = city;
//     // console.log(city);
// }


// 9. Write a loop that counts from 1 to 20 and logs only the even numbers in the console.


// for(let i=0; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// 10. Create an array of numbers [45, 22, 89, 100], and use a loop to find and display the largest
//  number in a paragraph with ID max.

// let number = [45, 33, 45, 188];
// let max = 0;
// for(i=0; i<number.length; i++){
//     // console.log(number[i]);
//     if(max < number[i]){
//         max = number[i]; 
//     }
// }
// console.log(max);
// document.querySelector("#max").innerHTML = ' There is the maximum number ==>' + max;


// 11. Use document.querySelector to select a div with ID result and change its text to "Task Complete".

// document.querySelector("#container_2").innerHTML = "hey! Yes are number 2";

// 12. Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and display it
//  inside an element with ID averageTemp.

// let temperatures = [30, 35, 32, 40];
// let sum = 0;
// for(i=0; i<temperatures.length; i++){
//     sum += temperatures[i];
//     // console.log(sum);    
// }
// const average = sum/temperatures.length;
// document.querySelector("#temp").innerHTML =  'There is the average temperature. ==>' + average;

// 13. Create a loop that adds all the numbers from 1 to 100 and shows the total inside a paragraph with ID
//  totalSum.

// let sum = 0 ;
// for(let i=0; i<=100; i++){
//     sum  += i ;
// }
// // console.log(sum);
// document.querySelector("#totalnum").innerHTML = 'The sum of 100 is : '+sum;

// 14. Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with ID animals.

// let animals = ["dog", "cat", "bird"];
// for(i=0; i<animals.length; i++){
//     document.querySelector(".animals").innerHTML = `There is the animals name in a single para: [${animals}]`;
// }

// 15. Use document.querySelector to select a heading with ID title and change its text to
// "Welcome to JavaScript!".

// document.querySelector("#title").innerHTML = "Welcome to JavaScript!";




// 16. Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log
// them to the console.


// for(let i=2; i<50; i++){
//     // console.log(i);
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }



// 17. Given an array of scores [80, 60, 90, 70], calculate how many scores are above 75 and
// display the count in a div with ID highScores.

// let score = [80, 60, 90, 70];
// let count = 0;
// for(let i=0; i<score.length; i++){
//     if(score[i] > 75){
//         count++;
//     }   
//     }
// console.log(count);


// 18. Select an element with ID message and change its text to "Updated successfully" using
// document.querySelector.

//  document.querySelector("#update").innerHTML = "Updated Successfully";

// 19. Create an array of subjects like ["Math", "Science", "English"], and use a loop to show
// them in a paragraph with ID subjectsList.


// const subjects = ["Math" , "Science" , "English"];
// for(i=0; i<subjects.length; i++){
//     document.querySelector(".container").innerHTML = subjects;
// }


// 20. Write a loop that prints numbers from 10 down to 1 and shows the result inside a Given
// an array of numbers [5, 10, 15, 20], use a loop to calculate and print the sum of all
// elements.

// let number = [5 ,10 ,15 ,20];
// for(i=10; i>=1; i--){
//     number.push(i);
// }
// console.log(number);
// <----------------------Now calculate these values--------------------->

// let sum = 0;
// for(i=10; i<number.length; i++){
//     sum += number.length;
// }
// console.log("There is the calculation of the number "+ sum);


// 21. Create a loop that finds the largest number in an array [45, 67, 12, 89, 34].

// let num = [ 45, 67, 12, 89, 32 ];
// let maxnum = 0;
// for( let i=0; i<num.length; i++){

//     // console.log(num[i]);
//     if(maxnum < num[i]){
//         maxnum = num[i];
//     }

// }
// console.log(maxnum);


// 22. Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even.

// let number = [3, 8, 6, 1, 9, 2];
// let evennum = 0;
// for(i=0; i<number.length; i++){
//     // console.log(number[i]);

//     if(number[i] % 2 === 0){
//       evennum++;
//     }
// }
// console.log(evennum);

// 23. Write a loop that calculates the average of numbers in an array [20, 30, 40, 50].

// let num = [20, 30, 40, 50];
// let sum = 0;
// for(i=0; i<num.length; i++){
//     sum += num[i];
// }
//  let avg = sum / num.length;
//  console.log(avg);

// 24. Given an array [2, 4, 6, 8, 10], use a loop to create a new array where each value is multiplied by 3.


// let array =[2, 4, 6 , 8 , 10];
// let newarr = [];
// for(i=0; i<array.length; i++){
//     newarr.push(array[i] * 3)
// }
// console.log(newarr);


// 25. Loop through an array [1, 3, 5, 7, 9] and count how many elements are greater than 4.


// let arr = [1, 3, 5, 7, 9];
// let max = 0;
// for(i = 0; i<arr.length; i++){
//     if(arr[i] < 4){
//         max = arr[i];
//     }
// }
// console.log(max);

// 26. Given an array [0, 15, 20, 25, 301], use a loop to add only the numbers divisible by 5.

// let arr =  [0, 15, 20, 25, 301];
// for(i=0; i<arr.length; i++){
//     if (arr[i] % 5 === 0){
//         divisble = arr[i];
//     }
// }
// console.log(divisble);


// 27. Write a loop that checks if a number 25 exists in the array [10, 20, 30, 40, 25].

let arrnum = [10, 20, 30, 40, 25];
let found = false;
for (i = 0; i < arrnum.length; i++) {
    if (arrnum[i] === 25) {
        found = true;
    }
}
if (found) {
    console.log(`Yes 25 exist in  ${i} index !`);
}
else {
    console.log(`Opps 25 is not exist in ${i} index !`);
}




//  ---------------------------if we find the index so use this -------------------------------------





// let arrnum =  [10, 20, 30, 40, 25];
// for(i=0; i<arrnum.length; i++){
//     if(arrnum[i] === 25){
//         console.log(`Yes 25 exist in  ${i} index !`);
//     }
//     else{
//         console.log(`Opps 25 is not exist in ${i} !`);
//     }
// }


// 28. Given two arrays [1, 2, 3] and [4, 5, 6], use a loop to create a third array containing the
// sum of corresponding elements.

// let arr_1 = [1, 2, 3];
// let arr_2 = [4, 5, 6];

// let arr_3 = [];

// for(i=0; i<arr_1.length; i++){
//     for(let j =0; j<arr_2.length; j++){
//         arr_3 = arr_1 + ","+ arr_2;
//     }
// }
// console.log(arr_3);




