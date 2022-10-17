function enviarEmail(){

    if( document.getElementById('nome').value != ""
        &&  document.getElementById('email').value != "" ){
        alert("Pronto! Olhe sua caixa de entrada, o e-mail foi enviado.")
    }
    else{
        alert("Por favor, preencha os dois campos para receber as informações no seu e-mail");
    }
}

document.getElementById('botaoEnviar').addEventListener("click", enviarEmail)
