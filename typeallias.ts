 //typeLiases in typescript
 type student={name:string;age:number;ispresent:boolean};
 let s1:student={name:"rakesh",age:10,ispresent:true};
 //ab me ek naya s2 object ko create karta hoon aur s1 ko usme dal deta hoon.
//  let s2=s1;
//  console.log(s2);

//agar me yhe wala opetaion karta hoon toh kya typescript allow karega?
type User={name:string;age:number};
let u1:User=s1;
// console.log(u1);

//this operation is not allowed by typeScript:-

// let u2:User={name:string;age:number;ispresent:boolean};