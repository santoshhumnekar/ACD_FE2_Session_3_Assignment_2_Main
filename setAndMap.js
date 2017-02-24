/*Create map instance object using new Map() and set value using set().
Add values here(Key can be string, object and function.)
● Create Set() instance and then add values using add() method
Note: Check new property before adding, if it’s there or not using has() method.
● Add multiple values using Set(), then iterate them using for loop.
● Create an array(stringArray) of strings  then set this array to Set instance using:   var mySet = new Set(stringArray);
 Now check if all values are there or not using set’s has() method. Print all values of array in one time(using spread operator)  */
var map = new Map();
map.set(1, 'Mark');
map.set(2, 'Erica');
var set = new Set();
set.add('Matt');
set.add('Erika');
set.has('Erika');
