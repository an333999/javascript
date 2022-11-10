// Tips calculation for the restaurant by IFELSE , TERNARY Operator , Array with FOREACH 

// Tips calculation by IF ELSE statement

let bill =275;

if (bill>=50 && bill<=300) {
    let tip=((bill*20)/100);
    console.log("The bill is:" +bill+" "+"tip:" + tip+" "+ "total:"+ (bill+tip));
} else{let tip=((bill*15)/100);
console.log("The bill is:" +bill+" "+"tip:" + tip+" "+ "total:"+ (bill+tip));}

// Tips calculation by TERNARY operator

bill=300;
let tip1=((bill*20)/100);
let tip2=((bill*15)/100);
(bill>=50 && bill<=300) ? console.log("The bill is:" +bill+" "+"tip:" + tip1+" "+ "total:"+ (bill+tip1)) : console.log("The bill is:" +bill+" "+"tip:" + tip2+" "+ "total:"+ (bill+tip2));


// Tips calculation for array/list by FORECH function
let bills = [275,20,320,49];
bills.forEach (function (value ,position ) {
    let tip1 = (( value*20 )/100);
    let tip2 =(( value*15 )/100);
    (value>=50 && value<=300) ? console.log(`${position+1}. The bill is: ${value} tips for the waiter: ${tip1} total value to pay: ${value+tip1}`) :  console.log(`${position+1}. The bill is: ${value} tips for the waiter: ${tip2} total value to pay: ${value+tip2}`)
});

