function cal(){
    let text = document.getElementById("valor").innerHTML
    let result = eval(text)
    document.getElementById("valor").innerHTML = result
}

function inserir(num){
    let text = document.getElementById("valor").innerHTML
    document.getElementById("valor").innerHTML = text + num
}

function apagar(){
    document.getElementById("valor").innerHTML = ""
}