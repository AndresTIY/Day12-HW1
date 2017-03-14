var ansInput = document.querySelector('#answer-1');
var ansInput2 = document.querySelector('#answer-2');
var ansInput3 = document.querySelector('#answer-3');
var ansInput4 = document.querySelector('#answer-4');
var ansInput5 = document.querySelector('#answer-5');
var ansInput6 = document.querySelector('#answer-6');


var avg = 0;
var sum = 0;
var length = items.length;

items.forEach(function(currentItem, index, arr){
    sum += currentItem.price;
});
ansInput.innerHTML = "The average price is $" + (sum/length).toFixed(2);

// CurrentItem = item[index]
//console.log(arr); puts out objects in an array
//console.log(index); puts out index numbers
//console.log(currentItem) puts out every object;

//show how to get an array of items that cost between $14 and $18
// 1970s Coors Banquet Glass Beer Pitcher
//
// The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug
//
// Hand Painted Colorful Feather Glass

var filteredItemList = items.filter(function(currentItem, index, array){
   return currentItem.price >= 14 && currentItem.price <= 18;
} );



filteredItemList.forEach(function(item, index, arr){
  ansInput2.innerHTML += '<li>' + item.title + '</li>';
})
