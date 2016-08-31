// array of even numbers
var evens = [0, 1, 4, 6, 8, 10]

// standard for loop
for (var i = 0; i < evens.length; i++) {
  console.log(`${evens[i]} is not odd!`)
}

// equivalent of 'for even in evens'
evens.forEach(even => {
  console.log(`${even} is not odd!`)
})

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}
 
var animals = ["dog", "fish", "cat"]
 
doToElementsInArray(animals, changeCompletely)
 
// log out animals -- pretty cool, right?
console.log(animals)