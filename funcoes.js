function numeros(){
    var x = event.keyCode 

    if (x != 0) {

    if (x < 42 || x > 57){
        event.preventDefault()
    

        console.log("tecla pressionada" + x)
        }
    }
}






















/*function somar(){ 
    var PrimeiraSoma = 0;
    var SegundaSoma = 0;

    PrimeiraSoma = parseFloat(document.getElementById("A").value);
    SegundaSoma = parseFloat(document.getElementById("B").value);

    alert(PrimeiraSoma + SegundaSoma);
}

function diminuir(){
    var PrimeiraDiminuir = 0;
    var SegundaDiminuir = 0;
    
    PrimeiraDiminuir = parseFloat(document.getElementById("A").value);
    SegundaDiminuir = parseFloat(document.getElementById("B").value);
    
    alert(PrimeiraDiminuir - SegundaDiminuir);
}

function divisao(){
    var PrimeiraDivisao = 0;
    var SegundaDivisao = 0;
    
    PrimeiraDivisao = parseFloat(document.getElementById("A").value);
    SegundaDivisao = parseFloat(document.getElementById("B").value);
    
    alert(PrimeiraDivisao / SegundaDivisao);
}

function multiplicacao(){
    var PrimeiraMultiplicacao = 0
    var SegundaMultiplicacao = 0
    
    PrimeiraMultiplicacao = parseFloat(document.getElementById("A").value)
    SegundaMultiplicacao = parseFloat(document.getElementById("B").value)
    
    alert(PrimeiraMultiplicacao * SegundaMultiplicacao); 
}
*/
