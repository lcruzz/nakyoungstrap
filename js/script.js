let contador = 0
function interruptor(){
    const lamp = document.querySelector("#img")
    let senha = document.querySelector("#senha").value

    if (senha == "strap"){
        if (lamp.src.match('img/naky.jpg')){
            lamp.src = 'img/yen.jpg'
            document.querySelector("#h3").innerHTML = "Se for piru... eu to aceitando"
        }

        else{
            lamp.src = 'img/naky.jpg'
            document.querySelector("#h3").innerHTML = "Hum... Qual será o tipo de presente?"
        }
    }
    if (senha != "strap"){
        while (contador < 3){
            contador++

            if (contador < 3){
                lamp.src = 'img/naky.jpg'
                document.querySelector("#h3").innerHTML = "Hum... Qual será o tipo de presente?"
                break
            }

            else{
                lamp.src = 'img/qual_a_cor.jpg'
                document.querySelector("#h3").innerHTML = "Você liberou a tabela de cores do presente, digite a senha certa para ver o prsente."
                break
            }
        }
    }
    console.log(contador)
}