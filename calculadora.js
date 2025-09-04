let variable="";
let primerNumero ="";
let opcode="";
let resultado=false;


function option(modo){
    if(opcode==""){
        primerNumero = variable;
        variable="";
    }
    opcode=modo;
    document.getElementById("div2").textContent=primerNumero + modo;
}

function raiz(){
    document.getElementById("div1").textContent=Math.sqrt(variable)
}

function numero(numero){
    variable+=numero;
    document.getElementById("div1").textContent=variable;
}

const punto=()=>{

    if(numero==""){
        variable+="0.";
        document.getElementById("div1").textContent=variable;
    }

    if(!variable.includes(".")){
        variable+=".";
        document.getElementById("div1").textContent=variable;
    }
    
}

function mostrarNumero(num){
    if(resultado){
        limpiar()
        resultado=false
    }
    variable+=num;
    document.getElementById("div1").textContent = variable
}

function option(modo){
    if(opcode==""){
        guardarNumero()
    }else if(numero!=""){
        calculos();
        guardarNumero()
    }
    opcode=modo;
    document.getElementById("div2").textContent = primerNumero + modo;
}

function guardarNumero(){
    primerNumero = variable;
    variable="";
    
}

function igual(){
    document.getElementById("div2").textContent = variable + opcode + primerNumero +"="
    calculos()
    document.getElementById("div").textContent = primerNumero 
    guardarNumero();
    resultado=true;

}

function calculos(){
    document.getElementById("div2").textContent = primerNumero+" "+ opcode+" "+ variable+" ="
    switch (opcode){
        case"+":
            variable = Number(variable) + Number(primerNumero)
        break;

        case"-":
            variable = primerNumero - variable
        break;

        case"×":
            variable = variable * primerNumero
        break;

        case"÷":
            variable = division(primerNumero, variable)
        break;
        default:
        break;
    }

    document.getElementById("div1").textContent =variable
}

function division(primerNumero , variable){
    if(variable==0){
        return "no se puede dividir por 0"
    }
    return primerNumero / variable
}

function borrar(){
    variable=variable.slice(0,-1)
    document.getElementById("div1").textContent =variable
}

function limpiar(){
    variable=""
    primerNumero=""
    opcode=""
    document.getElementById("div1").textContent =variable
    document.getElementById("div2").textContent =variable
}


let tengoHambre=false
let tengoSueño=true

if(tengoHambre || tengoSueño){
    console.log("voy a comer y me voy a dormir")
} else{
    console.log("no como ni me duermo")
}