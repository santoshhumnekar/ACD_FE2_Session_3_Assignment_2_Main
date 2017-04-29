// ==================================Map and Set=============================================

// Create map instance object using new Map() and set value using set(). 
//Add values here(Key can be string, object and function.)

let objMapBankAccount = new Map();
objMapBankAccount.set(1, 'AccountSaving');
objMapBankAccount.set(2, 'AccountCurrent');
objMapBankAccount.set(3, 'AccountSalary');


//Create Set() instance and then add values using add() method    
//Note: Check new property before adding, if it’s there or not using has() method.

let objSetBankAccount = new Set();

if (!objSetBankAccount.has("AcSaving")) {
    objSetBankAccount.add("AcSaving");
}

if (!objSetBankAccount.has("AcCurrent")) {
    objSetBankAccount.add("AcCurrent");
}

if (!objSetBankAccount.has("AcSalary")) {
    objSetBankAccount.add("AcSalary");
}


// /Add multiple values using Set(), then iterate them using for loop. 

let banks = ["SBI", "ICICI", "HDFC"];

banks.forEach((str) => {
    if (!objSetBankAccount.has(str)) {
        objSetBankAccount.add(str);
    }
});

objSetBankAccount.forEach((ele) => {
    console.log(ele);
});


// Create an array(stringArray) of strings  then set this array to Set instance using:   var mySet = new Set(stringArray); 
//  Now check if all values are there or not using set’s has() method. Print all values of array in one time(using spread operator) 

let allBank = [];
objMapBankAccount.forEach((value, key, map) => {
    allBank.push(value);
});

objSetBankAccount.forEach((ele) => {
    allBank.push(ele);
});

let allBankSet = new Set(allBank);

allBank.forEach((ele) => {

    if (!allBankSet.has(ele)) {
        console.log(`one Bank is missing in SET ${ele}`);
    } else {
        console.log(` ${ele}  Bank is present in SET`);
    }
});



let printarr = (...args) => {
    console.log(args);
}

printarr(...allBankSet);
