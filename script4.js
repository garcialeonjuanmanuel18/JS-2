let dia=31;
let mes=12;
let anio=2025;

if(dia==30 && (mes==4 || mes==6 || mes==9 || mes==11 )){
    dia=1;
    mes++;
}


else if(dia==31 && (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10)){
    dia=1;
    mes++;
}

else if (dia === 31 && mes === 12) {
  dia=1;
  mes=1;
  anio++;
}

else if(dia==29 && mes==2 && ((anio%4===0) && (anio%100!==0 || anio%400===0  ))){
    dia=1;
    mes++;
}

else if(dia==28 && mes==2 && ((anio%4!==0) && (anio%100===0 || anio%400!==0  ))){
    dia=1;
    mes++;
}

else{
    dia++
}

alert("la fecha de hoy es: "+dia+ "/"+ mes+"/"+anio);


