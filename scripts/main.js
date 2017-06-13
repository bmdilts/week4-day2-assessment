/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  var value = [];
  function add(a, b) {
    return a + b;
  }
  function sum(array){
    return array.reduce(add, 0);
  }
  for(var i = 0; i < hand.length; i++){
    if (hand[i] >= 1 && hand[i] <= 10){
      value.push(Number(hand[i]));
    } else if(hand[i] === "K"){
      value.push(10);
    } else if(hand[i] === "Q"){
      value.push(10);
    } else if(hand[i] === "J"){
      value.push(10);
    }
  }
  for(var x = 0; x < hand.length; x++){
    var poo = sum(value);
    if(hand[x] === "A" && poo >= 12){
        value.push(1);
    } else if(hand[x] === "A" && poo < 12){
        value.push(11);
    } else{}
  }
  var handValue = sum(value);
  return (handValue);
}




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
