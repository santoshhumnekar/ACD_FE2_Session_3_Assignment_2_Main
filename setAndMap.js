// ==================================Map and Set=============================================
let objMapBankAccount = new Map();
objMapBankAccount.set(1, 'SavingAccount'); // map instance object using new Map() and set value using set()
objMapBankAccount.set(2, 'CurrentAccount'); //Add values here(Key can be string, object and function.)
objMapBankAccount.set(3, 'SalaryAccount');


let objSetBankAccount = new Set(); //Add values here(Key can be string, object and function.)

if (!objSetBankAccount.has("AcSaving")) {
    objSetBankAccount.add("AcSaving");
}

if (!objSetBankAccount.has("AcCurrent")) {
    objSetBankAccount.add("AcCurrent");
}

if (!objSetBankAccount.has("AcSalary")) {
    objSetBankAccount.add("AcSalary");
}


let Accounts = ["Saving", "Current", "Salary"]; //Add multiple values using Set(), then iterate them using for loop. 

Accounts.forEach((str) => {
    if (!objSetBankAccount.has(str)) {
        objSetBankAccount.add(str);
    }
});

objSetBankAccount.forEach((ele) => {
    console.log(ele);
});



let allAccounts = [];
objMapBankAccount.forEach((value, key, map) => { // an array(stringArray) of strings  then set this array to Set instance using:   var mySet = new Set(stringArray); 
    allAccounts.push(value); // Now check if all values are there or not using set’s has() method. Print all values of array in one time(using spread operator) 

});

objSetBankAccount.forEach((ele) => {
    allAccounts.push(ele);
});

let allAccountsSet = new Set(allAccounts);

allAccounts.forEach((ele) => {

    if (!allAccountsSet.has(ele)) {
        console.log(`This Bank is missing in Set ${ele}`);
    } else {
        console.log(` ${ele}  This Bank is Presen in Set`);
    }
});



let printarr = (...args) => {
    console.log(args);
}

printarr(...allAccountsSet);
