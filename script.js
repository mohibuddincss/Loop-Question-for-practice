// 1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit in the console.

let fruits = ["Apple" , "Banana" , "Cherry" , "Mango" , "Pineapple"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);    
}

// 2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to
// a paragraph with the ID output using document.querySelector.

// let colors = ["red", "green", "blue", "white" , "bkack"];

// let paragraph = document.querySelector("body");
// for( let i = 0; i<colors.length; i++){
//     paragraph.innerHTML += colors[i]+ ( " ");
// }


// 3. Write a loop that counts from 1 to 10 and logs each number to the console.

for(let i = 1; i<=10; i++){
    console.log(i);
}

// 4. Use a while loop to print numbers from 5 to 1 in the console.

let num = 5;
while (num >= 1){
    console.log(num);
    num--;
}

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


for(let i=0; i<=20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

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
// document.querySelector("#max").innerHTML = ' There is the maximum number ==>' + max;
// console.log(max);


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

