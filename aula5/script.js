function cadastro(event) {
    event.preventDefault();

    let nomeCompleto = document.getElementById("nomeCompleto").value;
    let resposta = document.getElementById("resposta");

    resposta.innerHTML = `<p>Bem-vindo(a), ${nomeCompleto}! Cadastro realizado.</p>`;
}