var ansInput = document.querySelector('#answer-1');
//show how to calculate the avg price of all items
//The average price is $23.63
// The average price is + "VALUE"
var avg = 0;
var sum = 0;
var length = items.length;

items.forEach(function(currentItem, index, arr){
    sum += currentItem.price;
});
ansInput.innerHTML = "The average price is $" + sum/length;


//currentItem === items[index}
// var numbers = [1,2,3,4];
// numbers.forEach(function(n){
//   var sum;
//   var avg;
//   console.log(n)
//   sum = sum + n;
//   avg = sum / numbers.length;
// });



//console.log(arr); puts out objects in an array
//console.log(index); puts out index numbers
//console.log(currentItem) puts out every object;





//show how to get an array of items that cost between $14 and $18
// 1970s Coors Banquet Glass Beer Pitcher
//
// The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug
//
// Hand Painted Colorful Feather Glass
