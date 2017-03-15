var ansInput = document.querySelector('#answer-1');
var ansInput2 = document.querySelector('#answer-2');
var ansInput3 = document.querySelector('#answer-3');
var ansInput4 = document.querySelector('#answer-4');
var ansInput5 = document.querySelector('#answer-5');
var ansInput6 = document.querySelector('#answer-6');

//----------------------Question 1
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
//---------------------Question 2
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

//---------------------Question 3
// Which item has a "GBP" currency code? Display it's name and price.
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

var filteredByGbp = items.filter(function(currentItem, index, array){
  return currentItem.currency_code === 'GBP';
})
filteredByGbp.forEach(function(currentItem, index, array){
  ansInput3.innerHTML += currentItem.title + " costs £" + currentItem.price;
})

//------------------------- Question 4
// Display a list of all items who are made of wood.
// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
//
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
//
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
//
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
//
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.
//5 items with wood
//title + is made of + wood
// var materials = items.filter(function(currentItem, index, array))
var materialsArray = items.map(function(currentItem, index, array){
  return currentItem.materials;
});

var filteredByWood = items.filter(function(item, i, arr){
  return item.materials.includes("wood");
});
filteredByWood.forEach(function(item, i, arr){
  ansInput4.innerHTML += '<li>' + item.title + ' is made of wood' + '</li>'
})




// var filteredByWood = materials.filter(function(currentItem, index, array){
//   return array === 'wood';
//   // console.log(currentItem);
// });
// console.log(filteredByWood);
// some()



// ------------------------- Question 5
// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
// var eightOrMore = items.filter(function(currentItem, index, array){
//   return currentItem.materials.length >= 8;
// });
//map out materials first
//use reduce to put materials into an empty string

var eightOrMore = items.filter(function(currentItem, index, array){
  return currentItem.materials.length >= 8;
});

var eightOrMoreMat = eightOrMore.map(function(item, index, array){
 return item.materials;
});



eightOrMore.forEach(function(currentItem, index, array){


  ansInput5.innerHTML += '<li>'+ currentItem.title  + " has " + currentItem.materials.length + " materials.</li>";
  ansInput5.innerHTML += '<li>'+ currentItem.materials +'</li>'

});



//eightOrMoreMat gives us 2 arrays.

// eightOrMoreMat[0].forEach(function(item, i, arr){
//    ansInput5.innerHTML += '<li>'+ item +'</li>'
//  })
//
//  eightOrMoreMat[1].forEach(function(item, i, arr){
//    ansInput5.innerHTML += '<li>'+ item +'</li>'
//  })
     //  this works! let's put it all together...
     //oh my geeeeez
          // eightOrMoreMat.forEach(function(item, i, arr){
          //   console.log(item[3])
          // })
// var eightOrMoreReduced = eightOrMoreMat.reduce(function(acc, item, i, arr){
//   return acc += item;
// },[])
// ansInput5.innerHTML += '<li>' + item.materials + '</li>';
// var eightOrMoreMat = eightOrMore.map(function(item, index, array){
//   return item.materials;
// });
//---------------------------Question 6

//how many items were made by their sellers?
//  18 were made by their sellers
// "who_made": "i_did",
var madeBySellers = items.filter(function(currentItem, index, array){
  return currentItem.who_made === "i_did";
})
ansInput6.innerHTML = madeBySellers.length + " were made by their sellers"
