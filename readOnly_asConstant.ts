type Students={name:"rakesh",readonly rollno:number,age:number};

// const s1={ 
//     name:"rakesh",
//     age:10,
//     rollno:16
// };

//ab me chahta hoon ki yeh roll no wala feild kabhi koi chaange nah kar paye bas yeh Readonly mode me rahe

//toh usko me achive kar skta hoon rollNo feild ke agge likh du rollno:-

const s1:Students={
    name:"rakesh",
    age:10,
    rollno:16
};

// s1.rollno=12; //ab yeha pe hum rollno change nahi kar skte hai kyuki yeh rollno ab yeh readonly mode me hai

//ab agar mujhe har ek feild ko readonly mode me banana hai toh me kuch aisa kar skta hoon:-

// const s1:{
//     name:"rakesh",
//     age:10,
//     rollno:16
// }as const;
