var num = document.getElementById(fnum)
var lista = document.getElementById(flista)
var res = document.getElementById(res)
var valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}
function isListas(n, l){
    if(l.indexOf(number(n) != -1)){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value)) {

    }else(
        alert('Valor invalida ou ja encontrado na lista')
    )
}