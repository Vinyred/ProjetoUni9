var token = localStorage.getItem("token");
var nomeg = localStorage.getItem("nameg");
var emailg = localStorage.getItem("emailg");
var usernameg = localStorage.getItem("usernameg");
var passwordg = localStorage.getItem("passwordg");
var nome = document.getElementById('nomecad');
var email = document.getElementById('emailcad');
var username = document.getElementById('nomescad');
var password = document.getElementById('senhacad');

function carregara() {
    let usernameg = localStorage.getItem('usernameg');
    let passwordg = localStorage.getItem('passwordg');

    const url = 'https://todolist-api.edsonmelo.com.br/api/user/login/';
    const pay_load = {
        'username': usernameg,
        'password': passwordg
    };
    const headers = { 'Content-type': 'application/json', 'Accept': 'text/plain' };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(pay_load),
        headers: headers
    })
        .then(response => response.json())
        .then(data => {
            if ('message' in data) {
                throw new Error(data['message']);
            } else {
                nome.value = data['name'];
                email.value = data['email'];
                username.value = usernameg;
                password.value = passwordg;
                localStorage.setItem('nameg', data['name']);
                localStorage.setItem('emailg', data['email']);
            }
        })
        .catch(error => console.log(error));
}

function editardados() {
    let token = localStorage.getItem('token');
    let nome = document.getElementById('nomecad').value;
    let email = document.getElementById('emailcad').value;
    let username = document.getElementById('nomescad').value;
    let password = document.getElementById('senhacad').value;

    const url = "https://todolist-api.edsonmelo.com.br/api/user/update/";
    const pay_load = {
        name: nome,
        email: email,
        username: username,
        password: password,
        picture: 'ddsmldmsldm'
    };

    const headers = { 'Content-Type': 'application/json', 'Authorization': token };

    fetch(url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(pay_load)
    })
        .then(response => response.json())
        .then(data => {
            if ('message' in data) {
                if (data['message'] == 'User Successfully Updated') {
                    alert('Usuário atualizado com sucesso')
                    window.location.href = 'task.html';
                } else if (data['message'] == 'Incorrect username and/or password') {
                    alert('Nome de usuário e/ou senha incorretos')
                }
                else {
                    alert(data['message'])
                    throw new Error(data['message']);
                }
            } else {
                console.log(data);
                alert("Editado com sucesso!");
            }
        })
        .catch(error => console.log(error));
}

function editaruser() {
    if (filtrarDados()) {
        let token = localStorage.getItem('token');
        let new_username = document.getElementById('newusernamecad').value;
        let new_password = document.getElementById('novasenhacad').value;
        let username = document.getElementById('usernamecad').value;
        let password = document.getElementById('senhacad').value;

        const url = "https://todolist-api.edsonmelo.com.br/api/user/updateuserpass/";
        const pay_load = {
            username: username,
            password: password,
            new_username: new_username,
            new_password: new_password

        };

        const headers = { 'Content-Type': 'application/json', 'Authorization': token };

        fetch(url, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(pay_load)
        })
            .then(response => response.json())
            .then(data => {
                if ('message' in data) {
                    if (data['message'] == 'User/password Successfully Updated') {
                        alert('Usuário atualizado com sucesso')
                        window.location.href = 'task.html';
                    } else if (data['message'] == 'Incorrect username and/or password') {
                        alert('Nome de usuário e/ou senha incorretos')
                    }
                    else {
                        alert(data['message'])
                        throw new Error(data['message']);
                    }
                } else {
                    console.log(data);
                    alert("Editado com sucesso!");
                }
            })
            .catch(error => console.log(error));
    }
}

function filtrarDados() {
    const usuario = document.getElementById("usernamecad");
    const novoUsuario = document.getElementById("newusernamecad");
    const senha = document.getElementById("senhacad");
    const novaSenha = document.getElementById("novasenhacad");
    const confirmarNovaSenha = document.getElementById("confirmarnovasenhacad");

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!novoUsuario.value || !senha.value || !usuario.value || !novaSenha.value || !confirmarNovaSenha.value) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    // Verifica se o campo Nome e o campo Nome de Usuário possuem pelo menos 3 caracteres
    if (usuario.value.length < 3 || novoUsuario.value.length < 3) {
        alert("Os campos Nome e Nome de Usuário devem conter pelo menos 3 caracteres.");
        return false;
    }

    // Verifica se o valor do campo Senha é igual ao valor do campo Nova Senha
    if (novaSenha.value !== confirmarNovaSenha.value) {
        alert("A senha é diferente da ");
        return false;
    }

    return true;
}

function voltar() {
    window.location.href = "task.html"
    

}