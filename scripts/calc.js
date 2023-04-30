
function verifidade(n){
    if (Number(n) > 0 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function verifpeso(p){
   if (Number(p) >= 5 && Number(p) <=130){
        return true
   } else{
        return false
   }
}

function calc(){
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    var peso = document.getElementById("peso").value
    var altura = document.querySelector('input#altura').value
    var conta = peso / (altura ** 2)
    var resp = document.getElementById("resp")

    if (verifidade(idade) && verifpeso(peso)){
        console.log(conta)
        resp.innerHTML = `Olá ${nome}, de acordo com o cálculo do seu IMC você apresenta: <br> <br>`
        if (conta < 17){
            resp.innerHTML += `MAGRAZA GRAVE !<br> Você está muito abaixo do peso correndo assim, risco a insuficiência cardíaca, anemia grave e enfraquecimento do sistema imunológico. `
        }
         else if (conta >= 17.5 && conta < 18.5){
            resp.innerHTML += `MAGREZA LEVE ! <br> Você está abaixo do peso e pode apresentar problemas de saúde ligados a desnutrição.`
        }
         else if (conta <= 24.9){
            resp.innerHTML += `PESO NORMAL ! <br> Parabéns, segundo a ciência você é Eutrófico, ou seja, saudável.`
        } 
         else if (conta <= 29.9){
            resp.innerHTML += `SOBREPESO ! <br> Seu estado atual pode causar fadiga, varizes e má circulação.`
        } 
         else if (conta <= 34.9){
            resp.innerHTML += `OBESIDADE GRAU 1 ! <br> Cuidado! Seu estado atual poderá eventualmente lhe causar diabétes, infarto, angina, aterosclerose, demais doenças.`
         }
         else if (conta <= 39.9){
            resp.innerHTML += `OBESIDADE GRAU 2 ! <br> Tenha muito cuidado! Seu estado de saúde inspira cuidados, você poderá contrair diabétes, angina, aterosclerose, apneia do sono, demais doenças.`
         }
         else if (conta > 40){
            resp.innerHTML += `OBESIDADE MÓRBIDA ! <br> Procure urgentemente um médico! Seu quadro atual poderá lhe causar dificuldade de locomoção, refluxo, infarto, AVC, apneia do sono,  diabétes, falta de ar e demais complicações.`
         }
    } else{
        alert('Verifique os dados e tente novamente!')
    }
}

function limpar(){
    var resp = document.getElementById("resp")
    resp.innerHTML = ''
    var nome = document.getElementById("nome")
    nome.focus()
}