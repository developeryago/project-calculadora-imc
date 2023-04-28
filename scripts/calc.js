var nome = document.querySelector('input#name')
var idade = document.querySelector('input#idade')
var peso = document.querySelector('input#peso')
var altura = document.querySelector('input#altura')
var resp = document.getElementById('resp')
var id = Number(nome)
var alt = Number(altura)
var pes = Number(peso)

function verifidade(n){
    if (Number(n) >= 0 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function verfpeso(p){
    if (Number(p) <= 0 && Number(p) > 120){
        return false
    } else{
        return true
    }
}

function calc(){
    if (verifidade(nome)){
        alert('Tudo OK!')
    } else{
        alert('Deu B.O!')
    }
}