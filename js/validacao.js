
var formContato = document.querySelector('#form')


formContato.addEventListener('submit', function(event){
    event.preventDefault()

    var nome = document.querySelector('#nome')
    var email = document.querySelector('#email')
    var mensagem = document.querySelector('#mensagem')

    if(nome.value == ''){
        alert('Preencha o nome')
        nome.focus()
        return false
    }

    if(email.value == ''){
        alert('Preencha o email')
        email.focus()
        return false
    }

    if(mensagem.value == ''){
        alert('Preencha a mensagem')
        mensagem.focus()
        return false
  }
}, false)
