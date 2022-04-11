function contar(){
    let inicio = document.getElementById('txti')
    let final = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    var res = document.querySelector('div#res') 
    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        alert("Algo está errado!")  
    }else{
        res.innerHTML = "Contando..."
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
    
        if(i < f){
            //Contagem crescente...
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1f449}`
        } 
        }
        else {
            //Contagem Decrescente...
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` -${c} \u{1f449}`
            }
        }
    }

}

