$('form').validate({
    rules: {
        nome: { required: true },
        email: { required: true, email: true },
        telefone: { required: true },
        endereco: { required: true },
        cep: { required: true },
        cpf: { required: true }
    },
    messages: {
        nome: { required: "Por favor, informe o seu nome." },
        email: {
            required: "O e-mail é obrigatório.",
            email: "Por favor, insira um e-mail válido."
        },
        telefone: { required: "Por favor, informe seu telefone." },
        endereco: { required: "O endereço é obrigatório." },
        cep: { required: "O CEP é obrigatório." },
        cpf: { required: "O CPF é obrigatório." }
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
});
