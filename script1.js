let consumoKW=500;
let preciototal=0;

if(consumoKW>=50){
preciototal+=2;
consumoKW=consumoKW-50;


    if (consumoKW<=200){
    preciototal=+preciototal*0.10;
    consumoKW=consumoKW-150;
    }

    else if (consumokW>200){
    preciototal+=preciototal*0.10;
    consumoKW=consumoKW-150;
    consumoKW=consumoKW*0.15;
    }
    }
else if (consumoKW<50){
preciototal+=2;
}

console.log("el precio total es: " +(preciototal) );