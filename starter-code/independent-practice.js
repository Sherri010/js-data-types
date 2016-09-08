/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.

    (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image sources. Use image1.png, image2.png, and image3.png as the array values.
 */

var q1=["img1.png","img2.png","img3.png"];


/**
 * Question 2
 * Using the array from Question 1, store the first element of the array in variable q2.
 */

var q2=q1.shift();

/**
 * Question 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */

var q3=q1.length;

/**
 * Question 4
 *  Using the array from Question 1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?
 */


var q4=q1.pop(); 
//var q4=q1[q1.length-1];


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1,2,3, and 4 as values. Use forEach to increase each value by 1 and store the value back in the array.
The end result should be an array of numbers with values 2,3,4,5
 */

var qq= new Array(1,2,3,4);
var q5=[];
qq.forEach(function(x){
  q5.push(x+1);
});


/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array (average=sum of all numbers/number of numbers). Store the average in q6.
 */

var sum=0;
for(var i=0; i<q5.length;i++) {sum+=q5[i];}
var q6= sum/g5.length;	
