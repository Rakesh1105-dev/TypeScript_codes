export{};
let arr:(number|string)[]=["rakesh",10];
console.log(arr);

//par me chahta hoon ki first wale index par hamesh  string aye second wale index par hamesha number aye
//and third wale index par boolean value aye. toh yeh chiz array ke help se possible nahi hai yeh chiz me 
//achive kar skta hoon "tupple" ki help se.
//ab tupple ko create kaise karte hai:-
let arr1:[string,number,boolean]=["rakesh",10,true];
arr1.push("mohit"); //toh yeh allowded ho jayega par:-
// arr[3]="rohan" yeh allowed nahi hone dega.
console.log(arr1);

//ab me chaht hoon ki kuch aur bhi index ki value par changes karna ho toh kuch aise kar skta hoon:-

let arr2:[string,number,boolean,...string[]]=["rakesh",10,true,];