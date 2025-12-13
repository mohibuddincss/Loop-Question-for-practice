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

document.querySelector("#para").innerHTML = " Loading...";



// 7. Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in
// a paragraph with ID sum.

let numbers = [5, 10, 15];
let total = 0;
for(let i=0; i<numbers.length; i++){
    // console.log(numbers);
    total += numbers[i];    
}
// console.log(total);
document.querySelector("#sum").innerHTML = "The Toral of numbers is :" + total;


// 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a single string in a div with ID cities.

let cities = ["Karachi" , "Lahore" , "Quetta" ]
for(i=0; i<cities.length; i++){
   document.querySelector("#cities").innerHTML += cities[i] + " ";
}

