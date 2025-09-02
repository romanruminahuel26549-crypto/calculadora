let variable="";
let primerNumero ="";
let opcode="";

function option(modo){
    primerNumero = variable;
    variable="";
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

function igual(){
    let resultado

    if(opcode=="+"){
        resultado = Number(variable) + Number(primerNumero)
    }
    if(opcode=="-"){
        resultado = primerNumero - variable
    }
    if(opcode=="×"){
        resultado = variable * primerNumero
    }

    if(opcode=="÷"){
        if(variable==0){
            resultado="no se puede dividir por 0"
        }

        else{
            resultado = primerNumero / variable
        }
    }    

    document.getElementById("div1").textContent
    =resultado
}

