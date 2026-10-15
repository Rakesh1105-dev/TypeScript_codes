//let build student class using type:-

// type Student={name:string;age:number};

//ab me yeh same chhiz interface se bhi kae skta hoon:-
interface Person{
    name:string,
    age:number
}
//interface ka ek advantage yeh bhi hai ki agar bad me jake yeh wala chiz add karne ka man ho toh me kar skta hoon;

// interface Students{
//     fees:number
// }




//ab man lo me ek interface bana raha hoon student ka:-mujhe student ki nayi property bhi chahiye+person ki bhi kuch property chahiye toh person ki property ka usekar skta hai "extend" ka use karke.
interface Student extends Person{
    className:string,
    fees:number
}

//ab me ek teacher ka interface banke person ka property ko inherit kar skta hoon:-
interface Teacher extends Person{
    Salary:number,subjects:string
};

//yeh interfaec ek specallity hoti hai ki yeh thino chiz ko ek sath combine karke likh deta hai
const p1:Person={
    name:"rakesh",
    age:10,
    // fees:10000
}
const s:Student={
name:"mohit",age:19,className:"ukg",fees:7000

}
console.log(s);
console.log(p1);