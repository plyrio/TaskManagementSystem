# TaskManagementSystem

**TaskManagementSystem** é uma API RESTful desenvolvida para gerenciar tarefas. O sistema permite criar, ler, atualizar e excluir tarefas (CRUD), além de fornecer uma documentação interativa utilizando Swagger.

## Objetivo

Cria uma API RESTful utilizando os princípios do SOLID e Clean Architecture, de maneira que seja uma aplicação escalável de fácil manutenção, e sem dependência de tecnologias, aplicando conceitos modernos de desenvolvimento.

## Tecnologias Utilizadas

- **Backend**: Node.js, Express, TypeScript
- **Banco de Dados**: MongoDB (via TypeORM ou Prisma)
- **Documentação**: Swagger (Swagger UI Express e Swagger JSDoc)
- **ODM**: TypeORM (Prisma ou qualquer outro)

## Funcionalidades

- **Criar Tarefa**: Criação de novas tarefas com título e descrição.
- **Listar Tarefas**: Recuperação de todas as tarefas cadastradas.
- **Buscar Tarefa por ID**: Recuperação de uma tarefa específica pelo ID.
- **Atualizar Tarefa**: Atualização das informações de uma tarefa.
- **Excluir Tarefa**: Exclusão de uma tarefa do sistema.

## Instalação

### 1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

### 2. Navegue até o diretório do projeto:
```bash
cd TaskManagementSystem
```

### 3. Instale as dependências:
```bash
npm install
```

### 4. Configure o banco de dados:

Crie uma conta no MongoDB Atlas ou use uma instância local do MongoDB.

No arquivo .env, configure a variável DATABASE_URL com a URL de conexão do seu banco de dados.


#### Exemplo:
```Env
DATABASE_URL="mongodb+srv://<USER>:<PASSWORD>@cluster0.u8ndm.mongodb.net/<DB_NAME>?retryWrites=true&w=majority&appName=Cluster0"
```

### 5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

### 6. Acesse a aplicação:

A API estará disponível em `http://localhost:3001`

A documentação Swagger pode ser acessada em `http://localhost:3001/api`




## Scripts

`npm run dev`: Inicia o servidor em modo de desenvolvimento (com nodemon).

`npm run build`: Transpila o código TypeScript para JavaScript.

`npm run start`: Inicia o servidor utilizando o código já compilado.

`npm run typeorm`: Executa comandos do TypeORM (como migrações, se necessário).


### Endpoints da API

`POST /task`: Cria uma nova tarefa.

`GET /task`: Recupera todas as tarefas.

`GET /task/:id`: Recupera uma tarefa específica pelo ID.

`PATCH /task/:id`: Atualiza uma tarefa específica pelo ID.

`DELETE /task/:id`: Exclui uma tarefa específica pelo ID.


### Exemplos de Requisições

Criar Tarefa
```bash
POST /task
{
  "title": "Nova Tarefa",
  "description": "Descrição da nova tarefa"
}
```
Listar Tarefas
```bash
GET /task
```
Buscar Tarefa por ID
```bash
GET /task/6793bf54f094016cfcab17bc
```
Atualizar Tarefa
```bash
PATCH /task/6793bf54f094016cfcab17bc
{
  "title": "Tarefa Atualizada",
  "description": "Descrição da tarefa atualizada",
  "completed": true
}
```
Excluir Tarefa
```bash
DELETE /task/6793bf54f094016cfcab17bc
```
## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.


---

Desenvolvido por **Pedro Lyrio (Plyrio Dev)**.

