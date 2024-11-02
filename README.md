<h1 align="center">
<br>
  <img src="img/logo.jpg"  width="120">
<br>
<br>
 Consulta Veterinaria - React & Laravel
 
</h1>

<p align="center">
Este projeto é uma aplicação web full stack composta por um frontend desenvolvido em React e um backend desenvolvido em Laravel, que fornece uma API REST. A aplicação permite a gestão de consultas veterinárias, oferecendo telas de cadastro, edição e visualização de consultas. O backend gerencia as operações de dados e autenticação, enquanto o frontend fornece uma interface amigável para interação dos usuários.</p>

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<div align="center">

### Login

<img src="img/home.png" alt="web" align="center" width="525"><br>



 

  ### Lista de veterinarios via API + Toker

  <img src="img/veterinarios.png" alt="web" align="center" width="525"><br>

   ### Menu

  <img src="img/inicialpagina.png" alt="web" align="center" width="525"><br>

 ### Consultas cadastras
  <img src="img/consultas.png" alt="web" align="center" width="525"><br>

### Cadastro de Consultas
<img src="img/cadastroconsulta.png" alt="web" align="center" width="525"><br>

### Spring boot
<img src="img/backend API.png" alt="web" align="center" width="525"><br>
  
  <br> 

</div>

 
 ### 🔍 Front End (React)
```sh
 Interface responsiva para interação do usuário.
Formulários e telas para cadastro, visualização e edição de consultas.

Comunicação com o backend via API REST para gerenciar dados de veterinários, pacientes e consultas.

```


<hr />

## Backend (Laravel)

```sh
API RESTful: Endpoints para operações de CRUD (Create, Read, Update, Delete) de consultas.

Banco de Dados MySQL: Armazenamento e persistência de dados relacionados às consultas veterinárias.

Autenticação e Autorização: Controle de acesso aos recursos, garantindo que apenas usuários autenticados possam acessar as funcionalidades principais.

 
```



🛠️ Tecnologias e Ferramentas Utilizadas
```sh
Frontend:

React - Biblioteca para construção de interfaces de usuário.
Nginx - Servidor HTTP para servir a aplicação React em produção.

Backend:

Laravel - Framework PHP para desenvolvimento de APIs e sistemas backend.
MySQL - Sistema de gerenciamento de banco de dados relacional.
Ambiente:

Docker - Containerização dos serviços.
Docker Compose - Orquestração dos contêineres.

```
## Variáveis de Ambiente

🛠️ Instalação
```sh
No arquivo docker-compose.yml, as variáveis de ambiente para o backend Laravel incluem:

DB_CONNECTION: Tipo de conexão com o banco de dados (mysql)
DB_HOST: Endereço do banco de dados (db, nome do serviço no Compose)
DB_PORT: Porta do banco de dados (3306)
DB_DATABASE: Nome do banco de dados (laravel)
DB_USERNAME: Nome de usuário do banco de dados (root)
DB_PASSWORD: Senha do banco de dados (secret)
Essas variáveis são carregadas automaticamente ao executar o docker-compose.

```

🛠️  Endpoints da API REST (Backend - Laravel)
```sh
Rotas Principais

POST /api/consultas - Cadastrar uma nova consulta

Campos: veterinario_id, nome_paciente, especie, raca, nome_tutor, motivo_consulta, data_hora, status
GET /api/consultas - Listar todas as consultas agendadas

GET /api/consultas/{id} - Exibir detalhes de uma consulta específica

PUT /api/consultas/{id} - Atualizar informações de uma consulta

Campos atualizáveis: veterinario_id, nome_paciente, especie, raca, nome_tutor, motivo_consulta, data_hora, status
DELETE /api/consultas/{id} - Remover uma consulta

```
## Laravel

```sh
Modelo com campos obrigatorios no cadastro de consulta
resposta usando Json 
Uso Eloquent ORM na consulta da tabelas
Middeleware com protenção de rotas
Gerar toker utilizado via hash, senha criptografadas


```

## Telas do Frontend (React)
```sh
Permite editar informações de uma consulta existente.

Carrega os dados atuais da consulta e permite alterações nos campos mencionados.

Envia uma requisição PUT para /api/consultas/{id} para salvar as atualizações.

Tela de Visualização de Consultas Agendadas:

Lista todas as consultas agendadas, incluindo
Nome do paciente
Espécie e Raça
Nome do Tutor
Data e Hora da consulta
Status (Ex.: pendente, concluído)
Botões para editar ou excluir uma consulta.


```

### Pré-requisitos

- Node.js e npm/yarn (para rodar o frontend)
- PHP (para rodar o backend)
- Servidor MySQL ou outro banco de dados relacional
- BD esta na pasta "BD" tem modelo de banco de dados em SQL
## 📧 Contato

Caso tenha alguma dúvida, entre em contato:

E-mail: david.foxmulder@gmail.com<br>
LinkedIn: [david orion](https://www.linkedin.com/in/davidmuldersilva/)





