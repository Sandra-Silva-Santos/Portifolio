//Seu JavaScript de validação aqui - validando formulario
//Declaração das variaveis
var formContato = document.querySelector('#form')


formContato.onsubmit = event => {

    //VERIFICANDO OS CAMPOS
    var nome = document.querySelector('#nome').value;


    if (nome === '') {
        event.preventDefault();
        document.getElementById('msgError').innerHTML = 'Falha : Nome não digitado!!';
        return;

    }

    var email = document.querySelector("#email").value;

    if (email === '') {
        event.preventDefault();
        document.getElementById('msgError').innerHTML = 'Falha : Digite email valido!!';
        return;
    }

    var assunto = document.querySelector("#assunto").value;

    if (assunto === '') {
        event.preventDefault();
        document.getElementById('msgError').innerHTML = 'Falha : Insira o assunto !!';
        return;
    }
    var texto = document.querySelector("#mensagem").value;

    if (texto === '') {
        event.preventDefault();
        document.getElementById('msgError').innerHTML = 'Falha : Esqueceu da mensagem!!';
        return;
    }

    alert('Formulario enviado com sucesso!!');

    formContato.reset();
}
