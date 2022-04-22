# TODO
nodemon to start back end 
inside front-end npm start

Back-end e Front-end ainda não estaão conectados, ou seka a lista não será salva.

para testar Back end:

Post http://localhost:3000/item/new_item  HTTP/1.1
  content-type: application/json
  { 
	" description":"Item 1"
  }
####
Get http://localhost:3000/item HTTP/1.1

_______________________________________________________________
Tips
Clonagem
Para clonar o projeto para uma máquina local, no terminal executa-se:

git clone "url do repositório".
*(aconselha-se a utilizar o terminal do windows ou hyper para a clonagem)
Para mais informações aceda ao link: https://git-scm.com/

Instalação de dependências
Para instalação das dependências no terminal executa-se os seguintes comandos abaixo:

No diretório Todo List( correspondente a back-end)
npm install
No diretótio papp_front(correnpondente a front-end)
npm install
Para mais informações acerca do npm : https://www.npmjs.com/

Para mais informações acerca do yarn :https://yarnpkg.com/

Criação da Base de dados no diretório Todo List( correspondente a back-end)
Para criar a base de dados no terminal dentro do diretório papp_bck executa-se

npx sequelize db:create.
**(aconselha-se a utilizar do PgAdmin paraa visualização do resultado esperado)

Migração
Para migração a base de dados no terminal dentro do diretório papp_bck executa-se :

npx sequelize db:migrate
*(aconselha-se a utilizar do *PgAdmin paraa visualização do resultado esperado)

Para mais informações acerca do sequelize aceda ao link : https://sequelize.org/docs/v6/other-topics/migrations/

Para mais informações acerca do PgAdmin aceda ao link : https://www.pgadmin.org/

Executar a API
Para rodar o servidor back-end e o aplicativo front-end no terminal executa-se os seguintes comandos abaixo:

No diretório papp_bck( correspondente a back-end)
npm start ou nodemon (https://www.npmjs.com/package/nodemon)
No diretótio papp_front(correnpondente a front-end)
npm start


