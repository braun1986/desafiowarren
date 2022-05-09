let n = 10
let v = [2,3,4]

for(let i=v.length-1; i>=0 ;i--){
    vetorSoma10= []
    let continuar = true
    let soma=0

    do{
        soma += parseInt(v[i]);
        if(soma <= n){
            vetorSoma10.push(v[i]);
            console.log(vetorSoma10)
        }else{
            continuar = false;
            soma -= parseInt(v[i]);
        }

    }while(continuar);
    

    



}