let consumoKW=500;
let preciototal=0;

if(consumoKW>=50){
preciototal+=2;
consumoKW=consumoKW-50;


    if (consumoKW<=200){
    preciototal+=consumoKW*0.10;
    }

    else if (consumoKW>200){
    consumoKW=consumoKW-150;
    preciototal+=150*0.10;
    
    preciototal+=consumoKW*0.15;
    }
    }
else if (consumoKW<50){
preciototal+=2;
}

alert("el precio total es: " +(preciototal) );