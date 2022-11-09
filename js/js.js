let bill =275;

if (bill>=50 && bill<=300) {
    let tip=((bill*20)/100);
    console.log("The bill is:" +bill+" "+"tip:" + tip+" "+ "total:"+ (bill+tip));
} else{let tip=((bill*15)/100);
console.log("The bill is:" +bill+" "+"tip:" + tip+" "+ "total:"+ (bill+tip));}

bill=300;
let tip1=((bill*20)/100);
let tip2=((bill*15)/100);
(bill>=50 && bill<=300) ? console.log("The bill is:" +bill+" "+"tip:" + tip1+" "+ "total:"+ (bill+tip1)) : console.log("The bill is:" +bill+" "+"tip:" + tip2+" "+ "total:"+ (bill+tip2));