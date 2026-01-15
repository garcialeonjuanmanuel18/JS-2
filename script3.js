const a=1;
const b=2;
const c=3;
let mayor=0;

if (a>b && a>c){
mayor=a;
}

else if(b>a && b>c){
    mayor=b;
}

else if(c>b && c>a){
    mayor=c;
}

alert( "el numero mayor es: "+mayor);