function validarUsuario(user) {
    return new Promise((resolve, reject) => {
        if (user && user.length > 3) {
            resolve(user);
        } else {
            reject("Nome de utilizador inválido.");
        }
    });
}

function consultarApi(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ user: user, id: 42, status: "ativo"});

        }, 1500);
    });
}

function mostrarResultado(dados) {
    document.getElementById('resultado').innerHTML = 
    `Usuario: <b>${dados.user}</b> <br>
    ID: <b>${dados.id}</b> <br>
    Status: <b>${dados.status}</b>`;
}

document.getElementById('consultar').addEventListener('click', () => {
    document.getElementById('resultado').innerHTML = 'A validar...';

    validarUsuario("maria")
    .then(consultarApi)
    .then(mostrarResultado)
    .catch(erro => {
        document.getElementById('resultado').innerHTML = `<span style="color: red;">Erro: ${erro}</span>`;
    });
});