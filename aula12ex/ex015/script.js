function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.lenght == 0 || Number(fAno.value) > ano){
        alert('[ERRO] verifique os dados e tente novamente')
    }else{
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fSex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','criancaM.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemM.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','adultoM.jpg')
            }else{
                //idoso
                img.setAttribute('src','idoso.jpg')
            }
        }else if (fSex){
            genero= 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','criancaF.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemF.jpg')                
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','adultoF.jpg')
            }else{
                //idoso
                img.setAttribute('src','idosa.jpg')
            }
        }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    }
}