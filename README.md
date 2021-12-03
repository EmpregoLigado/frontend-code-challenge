# Front-End Developer Code Challenge - LEVEE

Através desse desafio, queremos conhecer suas habildades de desenvolvimento e principalmente como você resolve problemas.

## Sem tempo para realizar o desafio?

Você pode enviar algum projeto próprio que você acredita que demonstre o seu nível técnico e a qualidade do seu código.
Esse projeto precisa ser desenvolvido em React, utilizando ferramentas de compilação, testes unitários e um layout responsivo.
Lembre-se que quanto mais código seu pudermos visualizar, melhor será para te avaliarmos. :)

## Sobre o desafio

O desafio consiste em construir uma aplicação React para que o usuário possa ver detalhes de vagas de emprego.

Sua aplicação deve conter:

- Servidor Node + Express com 2 rotas:
  - `api/jobs`: Retornando uma lista de vagas de emprego;
  - `api/job/:id`: Retornando a vaga requisitada no parâmetro `:id`;
  - As rotas devem consultar a seguinte API: [lista de jobs](https://apigw.qa.empregoligado.net/britney/api/v1/jobs?limit=10);
- Aplicação React com 2 telas utilizando [Material-UI](https://material-ui.com/);
  - Tela inicial com uma listagem de vagas de emprego:
    - Lista de cards das vagas retornadas ao requisitar a rota `api/jobs`;
    - Mostrar um mapa estático contendo um marker com o local da vaga - [Maps Static API (Google)](https://developers.google.com/maps/documentation/maps-static/intro);
  - Tela com detalhes da vaga clicada:
    - Exibir detalhes sobre uma vaga ao requisitar a rota `api/job/:id`;
    - Exibir um botão que ao clicar, apresenta em um modal as datas disponíveis de entrevista;

Exemplo: [Página de vagas da Emprego Ligado](https://empregoligado.com.br/pt-br/vagas);
  
Todas as informações que serão exibidas ficam a seu critério. O layout precisa ser responsivo, de modo que a navegação seja agradável e fluida.

Bônus (não eliminatório):

- Testes unitários com alguma ferramenta como [Jest](https://jestjs.io/docs/en/getting-started);
- Redux;
- SSR com Next.js;
- Javascript ES6 com Babel;
- CSS3 e Pré-processadores como Stylus e SASS;
- ESLint e Prettier;
- Cache de assets.

## Pré-requisitos

Seu projeto deve ter um README com os passos necessários para:

- Rodar o projeto;
- Instalar as dependências;
- Rodar os testes automatizados (caso tenha).

### Gostamos de:

- Commits estruturados;
- Documentação;
- Testes;
- Docker.

## O que está sendo avaliado

Sua capacidade de compreender um problema, desenhar uma solução e aplicá-la.
Queremos ver como você resolve o problema proposto e suas habilidades com as tecnologias propostas.
Avaliaremos a qualidade do seu código, reutilização de componentes e boas práticas.

## Submissão

Para nos enviar seu código, você pode:

- Fazer um fork desse repositório e nos mandar um pull request.
- Nos dar acesso ao seu repositório no github, bitbucket ou gitlab. Adicione o usuário `bonigauglitz` ou `maiconpazin`.
- Se precisar falar com a gente: engenharia@levee.com.br.
