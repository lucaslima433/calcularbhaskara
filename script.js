function calcular(){
    
    //variaveis
    var txta = document.querySelector('input#inputA')
    var txtb = document.querySelector('input#inputB')
    var txtc = document.querySelector('input#inputC')

    var a = Number(txta.value)
    var b = Number(txtb.value)
    var c = Number(txtc.value)

    if (txta.value.length == 0 || txtb.value.length == 0 || txtc.value.length == 0){
        alert('[ERROR] Preencha os dados corretamente e tente novamente!')
    }else{
        Results.innerHTML = "<p>Resultado: </p>"

        var delta = (b**2)-4*a*c
        
        if (delta < 0){
            Results.innerHTML += "Delta negativo não possui raiz real"
        }else if(delta == 0){
            var x1 = (b*(-1))/(2*a)

            Results.innerHTML += `
            Delta: ${delta}<br>
            x' = ${x1.toFixed(2)}`
        }else{
            //raiz 10 = 3,162277660168379
            //10^0.5 = 3,162277660168379

            var x1 = ((-b)+(delta**0.5))/(2*a)
            var x2 = ((-b)-(delta**0.5))/(2*a)

            Results.innerHTML += `Delta: ${delta}<br>
            x' = ${x1.toFixed(2)}<br>
            x" = ${x2.toFixed(2)}`
        }
        
    }

}