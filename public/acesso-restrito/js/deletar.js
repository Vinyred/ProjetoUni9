var token = localStorage.getItem("token");
var usernameg = localStorage.getItem("usernameg");
var senhag = localStorage.getItem("passwordg");
var usuario = document.getElementById("nomes");
var senha = document.getElementById("senha");


function deletarUsuario() {

    if (filtrarDadosd()) {

        const url = 'https://todolist-api.edsonmelo.com.br/api/user/delete/';
        const pay_load = {
            username: usernameg,
            password: senhag
        };

        // Cabeçalho da requisição informando o que deverá ser enviado e qual o formato
        const headers = { 'Content-type': 'application/json', 'Authorization': token };

        // Envio da requisição e armazenamento dos dados recebidos
        fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(pay_load),
            headers: headers
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                localStorage.clear();
                window.location.href = '../index.html';
                return response.json();
            })
            .then(data => {
                // Mostra os dados retornados já convertidos
                console.log(data);
            })
            .catch(error => console.error(error));
    }
}

function cancelar() {


    window.location.href = "task.html"
}

function filtrarDadosd() {

    var usuario = document.getElementById("nomes");
    var senha = document.getElementById("senha");

    // Verifique se todos os campos estão preenchidos e têm pelo menos 3 caracteres
    if (usuario.length < 3 || senha.length < 3) {
        // Exiba um alerta de erro
        alert("Por favor, preencha todos os campos com pelo menos 3 caracteres.");
        return false;
    } if (usernameg !== usuario.value) {
        alert("O nome de usuario é diferente do registrado");
        return false;
    }
    if (passwordg !== senha.value) {
        alert("A senha é diferente da registrada");
        return false;
    }
    return true;
}