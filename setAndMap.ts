
 let bff = new Map();
 bff.set(1, 'Mark');
 bff.set(2,'Erica');

 let Friends = new Set();
 Friends.add('Matt');
 Friends.add('Erika');
 console.log(Friends.has('Erika'));
 Friends.add('Sam');
 Friends.add('Mike');
 Friends.add('Sandriea');

for(let val of Friends){
    console.log(val);
}

 var FriendList = ['Mark','Erica','Karl','David','Jessica','Daniel'];
 var mySet = new Set(FriendList);

 console.log("Friend list:");
 console.log(mySet.has('Mark'));
 console.log(mySet.has('Erica'));
 console.log(mySet.has('Karl'));
 console.log(mySet.has('David'));
 console.log(mySet.has('Jessica'));
 console.log(mySet.has('Daniel'));

 let x = [...mySet];
 console.log(x);