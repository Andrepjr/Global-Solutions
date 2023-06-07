function exibirMensagemDeBoasVindas() {
    console.log("Bem-vindo ao nosso site!");
  }

function alerta() {
    alert("Você será redirecionado, tem certeza que deseja sair ?")
}

function escolher(){
    var num = document.getElementById('numero').value -1
    var beneficio = document.getElementsByClassName('beneficio')[num].innerHTML
    document.getElementById('resultado').innerHTML = beneficio
}

