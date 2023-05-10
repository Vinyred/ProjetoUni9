var token = localStorage.getItem("token");
var nomeg = localStorage.getItem("nameg");
var emailg = localStorage.getItem("emailg");
var usernameg = localStorage.getItem("usernameg");
var passwordg = localStorage.getItem("passwordg");
var nome = document.getElementById('nomecad')
var email = document.getElementById('emailcad')
var username = document.getElementById('nomescad')
var password = document.getElementById('senhacad')

function carregara() {
    let token = localStorage.getItem('token');
    let nomeg = localStorage.getItem('nameg');
    let emailg = localStorage.getItem('emailg');
    let usernameg = localStorage.getItem('usernameg');
    let passwordg = localStorage.getItem('passwordg');

    let nome = document.getElementById('nomecad').value = nomeg;
    let email = document.getElementById('emailcad').value = emailg;
    let username = document.getElementById('nomescad').value = usernameg;
    let password = document.getElementById('senhacad').value = passwordg;
}

function editar() {
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
            throw new Error(data['message']);
            
        } else {
            console.log(data);
            alert("Editado com sucesso!");
        }
    })
    .catch(error => console.log(error));
}
