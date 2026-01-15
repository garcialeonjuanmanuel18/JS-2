const anio=2028;
let esbisiesto=false;

if ((anio%4===0) && (anio%100!==0 || anio%400===0  )){
esbisiesto=true;
}

alert("El año es bisiesto: "+esbisiesto);