# Projeto de Consumo de API
O projeto de consumo de API tem como objetivo utilizar uma API para realizar operações de cadastro, login, edição e exclusão de usuários, bem como operações de CRUD (create, read, update, delete) em uma lista de tarefas (to-do list).


# Desenvolvedores 
### clique nos nomes abaixo para mais informações :
* [André Cardoso](https://www.linkedin.com/in/andré-cardoso-718592a7)
* [Paulo Varelo](linkedin.com/in/paulo-henrique-de-maria)
* [Vinicius Caetano](https://www.linkedin.com/in/vinicius-caetano-962b4a1a2)

# Tecnologias utilizadas

![image](https://github.com/Vinyred/ProjetoUni9/assets/33385274/82664987-eed4-43f7-9a9f-905438cd3718)
![image](https://github.com/Vinyred/ProjetoUni9/assets/33385274/757f0581-3c39-40cb-a059-4781570ec35e)
![image](https://github.com/Vinyred/ProjetoUni9/assets/33385274/e4084b06-49e2-4087-9885-6083d1e8aaa1)
![image](https://github.com/Vinyred/ProjetoUni9/assets/33385274/792dd30a-8cc3-4e36-8d61-ef81239bc3d5)
![image](https://github.com/Vinyred/ProjetoUni9/assets/33385274/c9e4e595-2c88-4ff4-a011-1e4591cd8181)


# Funcionalidades
O projeto possui as seguintes funcionalidades:

Cadastro de usuário
O usuário poderá se cadastrar informando os seguintes dados:

* Nome completo
* Endereço de e-mail
* Nome de usuário
* Senha

Ao clicar no botão de cadastro, os dados serão enviados para a API, que irá cadastrar o usuário e retornar uma mensagem de sucesso ou de erro. Em caso de sucesso, o usuário será redirecionado para a página de login.

## Login
O usuário poderá realizar o login informando o nome de usuário e a senha. Ao clicar no botão de login, os dados serão enviados para a API, que irá verificar se as credenciais estão corretas. Em caso de sucesso, o usuário será redirecionado para a página de to-do list.

## Edição de usuário
O usuário poderá editar seus dados, como nome, endereço de e-mail e senha. Para isso, ele deverá acessar a página de edição de usuário, que irá exibir os campos preenchidos com os dados atuais do usuário. O usuário poderá alterar os campos que desejar e, ao clicar no botão de salvar, os dados serão enviados para a API, que irá atualizar as informações do usuário.

## Exclusão de usuário
O usuário poderá excluir sua conta. Para isso, ele deverá acessar a página de exclusão de usuário e confirmar a exclusão. Ao clicar no botão de confirmar, os dados serão enviados para a API, que irá excluir a conta do usuário.

# CRUD de tarefas (to-do list)
O usuário poderá criar, ler, atualizar e excluir tarefas em sua to-do list. A página de to-do list exibirá uma lista das tarefas cadastradas pelo usuário. O usuário poderá adicionar uma nova tarefa informando o título e a descrição, editar uma tarefa existente, marcar uma tarefa como concluída ou excluí-la.

As operações de CRUD serão realizadas através de requisições HTTP para a API, que irá armazenar e gerenciar as informações das tarefas.

# Endpoints da API
A API do projeto possui os seguintes endpoints:
* /api/user/new: endpoint para cadastrar um novo usuário.
* /api/user/login: endpoint para realizar o login do usuário.
* /api/user/edit: endpoint para editar os dados do usuário.
* /api/user/delete: endpoint para excluir a conta do usuário.
* /api/task/search/: endpoint para obter a lista de tarefas do usuário.
* /api/task/new: endpoint para adicionar uma nova tarefa à lista do usuário.
* /api/task/update: endpoint para editar uma tarefa existente na lista do usuário.
* /api/task/delete: endpoint para excluir uma tarefa da lista do usuário.

## Métodos HTTP suportados:

* POST: para cadastro de usuário, login de usuário, adição de nova tarefa;
* GET: para obter a lista de tarefas do usuário;
* PUT: para editar os dados do usuário e editar uma tarefa existente na lista;
* DELETE: para excluir a conta do usuário e excluir uma tarefa da lista.
### Autenticação:
A API requer autenticação para acessar os endpoints que envolvem dados do usuário. O token de autenticação deve ser enviado no cabeçalho da solicitação como Authorization: Bearer <token>.

### Parâmetros de entrada:
Os parâmetros de entrada devem ser enviados no corpo da solicitação como dados JSON. Para o endpoint /api/user/login, os parâmetros podem ser enviados como parâmetros de consulta.

## Respostas da API:
A API retorna respostas em formato JSON para todas as solicitações. 
