
window.onload = () => {
    let resultadosImparesSomaReverso = 0;
    numerosImparesSomaReverso = [];
    let key = 0
    let resultado = document.getElementById('resultado');
    let montaResultado = '';
    
    verificaReverso = (numero) =>{
        let numeroReverso = numero.toString().split('').reverse()
        // Verifica se o reverso começa com zero
        if(numeroReverso[0] != 0){

            //Caso não, faz a verificação se a soma é ímpar ou não
            numeroReverso = parseInt(numeroReverso.join(''))

            let somaReverso = parseInt(numero + numeroReverso);

            if(somaReverso % 2 !== 0){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    
    for (let i = 10;i< 1000000;i++){
        
        if(verificaReverso(i) === true){
            resultadosImparesSomaReverso++
            //numerosImparesSomaReverso[key] = i
            //key++
        }
    }
    console.log(resultadosImparesSomaReverso)


    //numerosImparesSomaReverso.map(numero => montaResultado += numero + " ")

    //resultado.innerHTML = montaResultado
    //resultado.innerHTML += "<br><br> Número total " + resultadosImparesSomaReverso
}


