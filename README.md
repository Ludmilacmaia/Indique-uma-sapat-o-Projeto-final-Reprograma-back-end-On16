# Labrys - rede de profissionais lésbicas

## {reprograma} Projeto Final

Projeto de conclusão do bootcamp de desenvolvimento Back-end - Turma On16 da [{reprograma}](https://reprograma.com.br/) .

Labrys é um banco de dados com informaçõs de profissionais lésbicas da cidade do Rio de Janeiro para a construção de uma API por meio da qual se possa consultar os perfis dessas mulheres a fim de contratar os seus serviços

Aplicação disponível  em https://labrys-rede-de-profissionais.herokuapp.com/

Documentação disponível em [Swagger UI](https://labrys-rede-de-profissionais.herokuapp.com/minha-rota-de-documentacao/)

### Funcionalidades:

- [x]  O schema das candidatas deve possuir os seguintes campos: id (autogerado), nome, profissão, bairro, atendimentoRemoto, telefone, site;

- [x]  A API deve permitir o cadastro dos perfis das profissionais;

- [x]  A API deve permitir a visualização dos perfis cadastrados;

- [x]  A API deve permitir fazer alterações nos perfis cadastrados;

- [x]  A API deve permitir a exclusão de perfis do banco de dados;

- [x] A API deve permitir a busca de uma profissional específica a partir de seu id;

- [x]  A API deve permitir a busca por profissão. 

### Instalação

Para a execução deste programa, no terminal,  deve-se:

- clonar o repositório :  git clone https://github.com/Ludmilacmaia/Labrys
- entrar na pasta:  cd Labrys
- instalar as dependências: npm install
- executar o servidor: npm start

### Tecnologias e pacotes utilizados

- Node.js

- MongoDB

- Git

- Mongo Atlas

- Heroku

- express

- nodemon

- dotenv-safe

- mongoose

- bcrypt
  
  #### Arquitetura final
  
  📁LABRYS
   |
   |--📁node_modules
   |
   |--📁 src
   |  |
   |  |
   |  ||--📁 controller
   |  |    |- 📄 profissionaisController.js
   |  |
   |  ||--📁 database
   |  |    |- 📄 mongooseConnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 profissionaisModels.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 profissionaisRoutes.js
   |  |    |- 📄 index.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |  |   
   |  |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 Procfile
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swagger.js