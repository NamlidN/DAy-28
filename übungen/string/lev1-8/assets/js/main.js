const text = "Sam is going to school";
console.log(text.length)
let a = text.slice(0, 22);

document.write(a.toUpperCase() + "<br>");

let b = text.toLowerCase(0, 22);
document.write(b+ "<br>");

let c = text.slice(0, 3).toUpperCase()
let z = text.slice(15 , 22).toUpperCase()
document.write(c +' is going to'+ z + "<br>");

let d = text.slice(3, 15).toUpperCase();
document.write('sam '+ d + ' scool' + "<br>");

let e = text.slice(0, 1).toUpperCase();
let f = text.slice(3, 5).toUpperCase();
let g = text.slice(6, 8).toUpperCase();
let h = text.slice(13, 14).toUpperCase();
let i = text.slice(16, 17).toUpperCase();
document.write(e+'am '+f+'s'+g+'oing '+h+'o '+ i+'chool'+"<br>");

