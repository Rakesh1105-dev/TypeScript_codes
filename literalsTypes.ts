let orderStatus="pending";
//ab me chahta hoon ki orderstatus me 3 hi value aye pending->shiped->delivered baki aur koi bhi value nahi jano chahiye.

//toh me yeh chiz achive kar skta hoon "type"  ke help se.
type OrderStatus='pending' |'shipped'|'delivered';

let Status:OrderStatus='pending'; //yeh wala iss chiz ko accept karega 

Status='shipped'; //yeh isko bhi accept karega

Status='delivered'; //yeh isko bhi accept karega

//ab man lo dice ka game hai
 type Dice=1|2|3|4|5|6;
 let  d1: Dice=1;
//  d1=10 yeh error de dega kyuki mane Dice me 1 se 6 tak ke number diye hai