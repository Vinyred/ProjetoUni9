function logar() {
    if (filtrarDados()) {
        const url = 'https://todolist-api.edsonmelo.com.br/api/user/login/';

        const nomes = document.getElementById('nomes').value;
        const senha = document.getElementById('senha').value;

        const pay_load = {
            'username': nomes,
            'password': senha
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
                    if (data['message'] == 'User Successfully Added') {
                        alert('Usuário cadastrado com sucesso')
                        window.location.href = 'index.html'
                    } else if (data['message'] == 'Incorrect username and/or password') {
                        alert('Nome de usuario ou/e senha incorretos')

                    }
                    else {
                        alert(data['message'])
                        throw new Error(data['message']);
                    }
               } else {
                    console.log("Login concluído");

                    localStorage.setItem('token', data['token']);
                    localStorage.setItem('idg', data['id']);
                    localStorage.setItem('nameg', data['name']);
                    localStorage.setItem('emailg', data['email']);
                    localStorage.setItem('usernameg', nomes);
                    localStorage.setItem('passwordg', senha);
                    window.location.href = 'acesso-restrito/task.html'

                }
            })
            .catch(error => console.log(error));
    }
}


function filtrarDados() {

    var usuario = document.getElementById("nomes").value;
    var senha = document.getElementById("senha").value;

    // Verifique se todos os campos estão preenchidos e têm pelo menos 3 caracteres
    if (usuario.length < 3 || senha.length < 3) {
        // Exiba um alerta de erro
        alert("Por favor, preencha todos os campos com pelo menos 3 caracteres.");
        return false;
    } else {
        // Envie o formulário
        return true;
    }
}