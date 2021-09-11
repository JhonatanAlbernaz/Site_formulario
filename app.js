$("#enviar").on("click", function(e) {

    var valor_input_nome = $("#nome").val();
    var valor_input_email = $("#email").val();
    var valor_input_telefone = $("#telefone").val();
    var valor_input_mensagem = $("#mensagem").val();

    if(valor_input_email == "") {

        emailInvalido();

    }else {

        var verificar_email_valido = verificacaoEmail(valor_input_email);

        if(verificar_email_valido == true) {

            carregandoOEnviado();

            setTimeout(function() {

                emailValido();
                $("#nome").val("");
                $("#email").val("");
                $("#telefone").val("");
                $("#mensagem").val("");

            }, 2000);

        }else {

            emailInvalido();
            
        }
        
    }

});

$("#email").on("focus", function(e) {
    $("#email").removeClass("border border-danger");
    $("#erro").addClass("d-none");
    $("#email").removeClass("border border-success");
    $("#sucesso").addClass("d-none");
});

$("#nome").on("focus", function(e) {
    $("#nome").removeClass("border border-success");
    $("#erro").addClass("d-none");
    $("#nome").removeClass("border border-success");
    $("#sucesso").addClass("d-none");
});

$("#telefone").on("focus", function(e) {
    $("#telefone").removeClass("border border-success");
    $("#erro").addClass("d-none");
    $("#email").removeClass("border border-success");
    $("#sucesso").addClass("d-none");
});

$("#mensagem").on("focus", function(e) {
    $("#mensagem").removeClass("border border-success");
    $("#erro").addClass("d-none");
    $("#email").removeClass("border border-success");
    $("#sucesso").addClass("d-none");
});

function emailInvalido() {
    $("#email").addClass("border border-danger");
    $("#erro").removeClass("d-none");
    $("#email").removeClass("border border-success");
    $("#sucesso").addClass("d-none");
}

function emailValido() {
    $("#nome").addClass("border border-success");
    $("#email").addClass("border border-success");
    $("#sucesso").removeClass("d-none");
    $("#telefone").addClass("border border-success");
    $("#mensagem").addClass("border border-success");
    $("#enviar").removeClass("d-none");
    $("#carregando").addClass("d-none");
}

function carregandoOEnviado() {
    $("#enviar").addClass("d-none");
    $("#carregando").removeClass("d-none");
}

function verificacaoEmail(valor_input_email) {
    if(valor_input_email.includes ("@") == true && valor_input_email.includes (".") == true) {
        return true;
    }else {
        return false;
    }
}