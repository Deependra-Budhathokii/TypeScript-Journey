"use strict";
let num;
num = 5;
num = "Deep";
num = true;
if (typeof num === "number") {
    console.log(num + 5);
}
else if (typeof num === "boolean") {
    console.log(num);
}
console.log(typeof (10));
console.log(typeof ("deep"));
console.log(typeof (true));
