const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and";

const A = text1.slice(0, 15);
let a = A.concat(" school and to movie theater");
document.write(a + "<br>");

const B = text1.slice(0, 15);
let b = B.concat(" movie theater");
document.write(b + "<br>");

const C = text2;
let c = C.concat(' '+text4 +' '+ "Sam are going to school");
document.write(c + "<br>");

const D = text2;
let d = D.concat(' '+text4 +' '+ "Sam are going to gym and and to movie theater");
document.write(d + "<br>");



const E = text2.slice(0, 15);
let e = E.concat(" is going to school and to thr movie theater");
document.write(e + "<br>");
