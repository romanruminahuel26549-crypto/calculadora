let variable = ""
let primerNumero;
let segundoNumero;

function numero(numero){
    variable+=numero
    document.getElementById("div1").textContent=variable;
}

function suma(numero){
    primerNumero=variable
    variable+=numero;
    document.getElementById("div2").textContent=variable;
    variable=""
}

function igual(){
    document.getElementById("div1").textContent
    =Number(variable)+Number(primerNumero)

}

function suma(numero){
    primerNumero=variable
    variable+=numero;
    document.getElementById("div3").textContent=variable;
    variable=""
}

function igual(){
    document.getElementById("div2").textContent
    =Number(variable)+Number(primerNumero)
}

function borrar(){
    document.getElementById("borrar").textContent
    variable=""
}
