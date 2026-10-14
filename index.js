// let a:number=10;
// a="rohit";
// console.log(a);
// let a=10;
// let b=20;
//  let response= await fetch("");
//  let data=await response.json();
//  a=data;
//yeha pe a pemujhe error nahi diya hai jabki den achahuye tha kyuki fetch kiya huaa data toh mera kuch bhi ho skta hai
//woh string,number etc.. kuch bhi ho skta hai na kya typescript ko advance me pata hoga ki mere data ka type kya hone wala hai? nahi typescript ka kam bas ek hi hai ki tu 
//typescript ke code ko js ke code me convert kar bas woh iss fetch operation ko perform nahi kar skta hai.toh isiliye ts ko yeh pata hi nahi hoga ki fecth operation se kis type ka data askta hai isiliye woh kuch bhi error "dynamic" data ke liye nahi marega
//ts bas static type ke error ko pakad skta hai 
//ab agar man lo mujhe user ka input lena hai "a" ke ander aur mujhe nahi pat aki user kis type ka input dega toh kya
//ts error dega? nahi is type ke error ko bhi nahi pakd payega
//know more about other datatypes:-\
//  let a:any="rakesh";
//  a=20;
//  a="mohan";
//array ka istamaal kaise kar skte hai:-
// let arr:number[]=[20,20,30,40];
// arr.push(55);
// // arr.push("rakesh"); //not allowed
// console.log(arr);
//or i can write it as a:-
// let arr=[10,20,30];
// arr.push(90);
// arr.push("mohit"); //it will automaticallly give error.
// console.log(arr);
//array ko me aisa bhi likh skta hoon:-
// let arr=[20,43,56,"rakesh"];
// console.log(arr);
//ab shikte hai object kaise banayenge
// let user:{
//     name:"rakesh",
//     age:20,
//     isAdmin:true
// };
// user.name=20 nahi kar skte hai kyuki mane name ka type string defined kar rakha hai toh me isme number nahi de skte
// let user:{
//     name:string;
//     age:number;
//     isAdmin:boolean;
// }={
//     name:"rakesh",
//     age:20,
//     isAdmin:false,
// }
// user.city="chandil"; //yeha pe error dega kyuki user object me city name ka varible exits hi  nahi karta
//ab samjhte hai function ke bare me:-
// function add(num1:number,num2:number){
//     return num1+num2;
// }
// console.log(add(2,3));
// console.log(add(5,6));
// add("2",3); //isme error dega kyuki num1 me hum string le rahe hai jabki mene type num1 ka number define kar rakha hai
//ab in cases ko kaise handle karte hao:-
// function add(num1:number,num2:number=0,num3:number=0):number{
//     return num1+num2+num3;
// }
//now agar use toh kitne bhi number ko bej skta hai toh uske liye hum use karenge rest operator:-
// function add(...nums:number[]):number{
//     return nums.reduce((num,sum)=>num+sum,0);
// }
// console.log(add(2));
// console.log(add(3,4));
// console.log(add(2,3,4));
//ab ata hai merepass unkonwn type ka:-
// let a:any="rakesh";
// // console.log(a.toUpperCase());
// console.log(a.tofixed());     //yeh kuch bhi type ka operation ko perform karne de deha kyuki mane a ke type ko any de rakha hai
//par me chahta hoon ki string me sirf string type ke data ho,array mearray ke operation perfrom ho,nmbers me me number ke operation perfrom kar saku
// let a:unknown="rakesh";
// a=20; a ke ander me kisi bhi type ke data ko dal skta hoon par operation sirf a ke ander string ka perfrom hoga bas
// console.log(a.push(30)) ; //yeh error dega kyuki a ke ander me string ke operation perfrom kar skta hoon par me array ke operation perfrom kar raha hoon
// console.log(a.toUpperCase()) ; //yeh toh isme bhi error de raha hai jabki a ke ander mera string type ka data hai fir bhi string ke operation perfrom karne ko nahi de raha hai toh uske liye mujhe ek condition lagana padega.
// if(typeof a==="string")
// console.log(a.toUpperCase()) ;
//optional wala feild:-
// let person:{name:string;age:number;city:string}={
//     name:"rakesh",
//     age:20,
//     city:"chandil"
// }
// console.log(person);
//ab me chahta hoon ki me kuch feild optional rakhu:-
let person = {
    name: "rakesh",
    age: 20,
    // city:"chandil" //toh ab yeh city wala feild optional ban gaya hai 
};
console.log(person);
export {};
