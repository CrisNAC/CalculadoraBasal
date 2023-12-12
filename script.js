//Variables de las ids
const CALCULAR = document.getElementById('calcular');
const PESO_INPUT =document.getElementById("peso");
const ERROR = document.getElementById('error');
const METODO = document.getElementById("metodo");
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

//Evento de pulsar el boton "CALCULAR"
CALCULAR.addEventListener("click",() =>{
    realizarCalculo();   
});

//Evento de presionar la tecla "Enter"
PESO_INPUT.addEventListener("keyup",(evento) =>{
    if(evento.key==="Enter"){
        realizarCalculo();
    }
});

/*
Funcion donde evalua el input.
Evaluacion: vacio, valor negativo, valor correcto.
Si no se cumple alguna de esas condiciones es un error inesperado.
*/
function realizarCalculo(){
    const DATO= document.getElementById("peso").value;
    if(DATO===""){
        ERROR.innerHTML = "* Ingrese algún valor"; //Mensaje a mostrar
        ERROR.style.display="block"; //Hace visible el mensaje
        METODO.style.display="none"; //Oculta mensaje
        FLU.style.display="none"; //Oculta mensaje 
        MAN.style.display="none"; //Oculta mensaje 
    }else if(DATO<=0){
        ERROR.innerHTML = "* Ingrese valores positivos"; //Mensaje a mostrar
        ERROR.style.display="block"; //Hace visible el mensaje
        METODO.style.display="none"; //Oculta mensaje
        FLU.style.display="none"; //Oculta mensaje
        MAN.style.display="none"; //Oculta mensaje
    }
    else if(DATO>0){
        ERROR.style.display="none"; //Oculta mensaje
        calculo(DATO);
    }else{
        ERROR.innerHTML = "Ocurrio algun error inesperado"; //Mensaje a mostrar
        ERROR.style.display="block"; //Hace visible el mensaje
        METODO.style.display="none"; //Oculta mensaje
        FLU.style.display="none"; //Oculta el mensaje
        MAN.style.display="none"; //Oculta el mensaje
    }
}

/*
Funcion donde recibe el peso.
Si <= 30, realiza el metodo Holliday-Sesgar.
Si no metodo de Superficie Corporal
*/
function calculo(peso){
    if(peso<=30){
        metodoHolliday(peso);
    }
    else{
        metodoSuperfieCorporal(peso);
    }
}

/*
Realiza el metodo Hollidar teniendo en cuenta el rango del peso
Rango: <=10, <=20, <=30
*/
function metodoHolliday(peso){
    let volumenDiario, mantenimiento, m1_5; //Variables para guardar resultados
        if(peso<=10){
            volumenDiario= peso*100;
        }else if(peso<=20){
            volumenDiario=10*100+(peso-10)*50;
        }else{
            volumenDiario= 10*100+10*50+(peso-20)*20
        }
        mantenimiento= volumenDiario/24;
        m1_5= mantenimiento*1.5;
        METODO.innerHTML="Metodo Holliday"; //Mensaje a mostrar
        METODO.style.display="block"; //Hace visible el mensaje
        FLU.innerHTML= mantenimiento.toFixed(2)+"cc/hr"; //Mensaje a mostrar
        FLU.style.display="block"; //Hace visible el mensaje
        MAN.innerHTML= "m+m/2 "+m1_5.toFixed(2)+"cc/hr"; //Mensaje a mostrar
        MAN.style.display="block"; //Hace visible el mensaje
}

/*
Realiza el metodo Superficie Corporal, peso > 30
*/
function metodoSuperfieCorporal(peso){
    //Variables para guardar resultados
    let superficie_corporal=((peso*4)+7)/(peso+90);
    let volumenDiario1500 = superficie_corporal*1500;
    let volumenDiario2000 = superficie_corporal*2000;
    METODO.innerHTML="Metodo Superficie corporal"; //Mensaje a mostrar
    METODO.style.display="block"; //Hace visible el mensaje
    FLU.innerHTML="SC*1500: "+volumenDiario1500.toFixed(2); //Mensaje a mostrar
    FLU.style.display="block"; //Hace visible el mensaje
    MAN.innerHTML="SC*2000: "+volumenDiario2000.toFixed(2); //Mensaje a mostrar
    MAN.style.display="block"; //Hace visible el mensaje
}
