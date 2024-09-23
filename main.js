let x = +prompt('Введите первое число')
let y = +prompt('Введите второе число')
let z = +prompt('Введите третье число')

// if(y<x<z || z<x<y){
//     console.log(alert('Среднее число ' + x ));
// }
// else if(x<y<z || z<y<x ){
//     console.log(alert('Среднее число ' + y));
// }
// else if(x<z<y || y<z<x ){
//     console.log(alert('Среднее число ' + z ));
// }

if(x > y && x < z || x < y && x > z){
 console.log(alert('Среднее число ' + x));
 }
 else if(y > x && y < z || y < x && y > z){
 console.log(alert('Среднее число ' + y));
 }
if(z > y && z < x || z < y && z > x){
 console.log(alert('Среднее число ' + z));}