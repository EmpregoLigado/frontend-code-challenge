# Front-End Developer Code Challenge - LEVEE

Através desse desafio, queremos conhecer suas habildades de desenvolvimento e principalmente como você resolve problemas.

## Sem tempo para realizar o desafio?

Você pode enviar algum projeto próprio que você acredita que demonstre o seu nível técnico e a qualidade do seu código.
Esse projeto precisa ser desenvolvido em React, utilizando ferramentas de compilação, testes unitários e um layout responsivo.
Lembre-se que quanto mais código seu pudermos visualizar, melhor será para te avaliarmos. :)

## Sobre o desafio

O desafio consiste em construir uma aplicação React para que o usuário possa ver detalhes de vagas de emprego, um arquivo postman com a API necessária será encaminhado por e-mail.

Sua aplicação deve conter:
* Servidor Node com 2 rotas:
    * `api/jobs`: Retornando uma lista de vagas de emprego;
    * `api/job/:id`: Retornando a vaga requisitada no parâmetro `:id`;
* Aplicação React com 2 telas utilizando [Material-UI](https://material-ui.com/);
    * Tela inicial com uma listagem de vagas de emprego:
      * Lista de cards das vagas retornadas ao requisitar a rota `api/jobs`;
      * Mapa contendo markers customizados e informações da vaga;
    * Tela com detalhes da vaga:
      * Exibir detalhes sobre uma vaga ao requisitar a rota `api/job/:id`;
      * Exibir um botão que ao clicar, apresenta em um modal as datas disponíveis de entrevista;
* Testes unitários com alguma ferramenta como [Jest](https://jestjs.io/docs/en/getting-started);
      
Todas as informações que serão exibidas ficam a seu critério. O layout precisa ser responsivo, de modo que a navegação seja agradável e fluida.

Bônus (não eliminatório):
- Recursos de PWAs;
- SSR (Next.js);
- API Node + Express;
- Javascript ES6 com Babel;
- CSS3 e Pré-processadores como Stylus e SASS;
- Webpack;
- ESLint e Prettier.

## Pré-requisitos

O seu teste deve ter um README com os passos necessários para:
- Rodar o projeto;
- Instalar as dependências;
- Rodar os testes automatizados.

### Tecnologia

Preferimos soluções escritas em React (Temos uma demanda específica neste momento).
Se caso você quiser usar algo que não está descrito aqui, fique à vontade, porém gostaríamos que você nos enviasse uma defesa da sua escolha.

### Gostamos de:

- Commits estruturados;
- Documentação;
- Testes;
- Docker;
- CI.

## O que está sendo avaliado

Sua capacidade de compreender um problema, desenhar uma solução e aplicá-la.
Queremos ver como você resolve o problema proposto e suas habilidades com as tecnologias propostas.
Avaliaremos a qualidade do seu código, reutilização de componentes e boas práticas.

## Submissão

Para nos enviar seu código, você pode:

- Fazer um fork desse repositório e nos mandar um pull request.
- Nos dar acesso ao seu repositório no github, bitbucket ou gitlab. Adicione o usuário `bonigauglitz` ou `maiconpazin`.
- Se precisar falar com a gente: maicon.pazin@levee.com.br.
