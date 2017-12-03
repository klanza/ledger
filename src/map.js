/*
The map() method creates a new array with the results
of calling a callback function on every value of the
calling array

*Syntax:
  var newArr = arr.map(function callback(currentValue, index, array){
    // Return element for newArr
  })

Map callback parameters are - (currentValue, index, array)

currentValue: the current value being processed in the array
index (optional): the index of the current value being processed
array (optional): the input array that map was called upon

* Since we are not going to hijack the native .map()
method we will be passing the input array as the
first argument
*/

const map = function(arr, callback) {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray.push(callback(arr[i], i, arr))
  }
  return newArray
}
