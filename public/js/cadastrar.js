function cadastrar() {

    if (filtrarDados()) {
        const url = 'https://todolist-api.edsonmelo.com.br/api/user/new/';
        const nome = document.getElementById('nomecad').value
        const email = document.getElementById('emailcad').value
        const username = document.getElementById('nomescad').value
        const password = document.getElementById('senhacad').value
        const pay_load = {
            'name': nome,
            'email': email,
            'username': username,
            'password': password
        };

        const headers = { 'Content-type': 'application/json' };

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
                    } else if (data['message'] == 'User Already Exists') {
                        alert('O usuario já existe')

                    }
                    else {
                        alert(data['message'])
                        throw new Error(data['message']);
                    }
                } else {
                    console.log(data);
                    alert("Cadastro realizado com sucesso!")

                }
            })
            .catch(error => console.log(error));
    }
}

function filtrarDados() {
    // Obtenha os valores dos campos de entrada
    var nome = document.getElementById("nomecad").value;
    var email = document.getElementById("emailcad").value;
    var usuario = document.getElementById("nomescad").value;
    var senha = document.getElementById("senhacad").value;

    // Verifique se todos os campos estão preenchidos e têm pelo menos 3 caracteres
    if (nome.length < 3 || email.length < 3 || usuario.length < 3 || senha.length < 3) {
        // Exiba um alerta de erro
        alert("Por favor, preencha todos os campos com pelo menos 3 caracteres.");
        return false;
    } else {
        // Envie o formulário
        return true;
    }
}