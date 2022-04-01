var emailPrincipal = document.getElementById("email").value;
var senhaPrincipal = document.getElementById("senha").value;
var btnFunction = document.getElementById("btn")

// function btnFuncao(){
//     if(emailPrincipal == ""){
//         alert("Email obrigatório")
//     }

//     if(senhaPrincipal == ""){
//         alert("Senha obrigatória")
//     }
// }

// btnFunction.addEventListener("click", btnFuncao)

// Segundo jeito de fazer

btnFunction.addEventListener("click", function(){
    if(emailPrincipal == ""){
        alert("Email obrigatório")
    }

    if(senhaPrincipal == ""){
        alert("Senha obrigatória")
    }
})
