
# NestJS PostgreSQL Monolito

Este é um exemplo de aplicação **monolítica** utilizando **NestJS** com **PostgreSQL** como banco de dados. A aplicação implementa operações básicas de CRUD para a entidade `User`, como criar, listar e buscar usuários, além de incluir a verificação para evitar a duplicação de e-mails.

## Tecnologias Utilizadas

- **NestJS**: Framework para construção de aplicações escaláveis em Node.js.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar as informações dos usuários.
- **TypeORM**: ORM (Object Relational Mapper) utilizado para facilitar a interação com o PostgreSQL.
- **Node.js**: Ambiente de execução JavaScript no lado do servidor.

## Funcionalidades

Esta aplicação oferece os seguintes endpoints:

### 1. Criar Usuário

- **URL**: `/users`
- **Método**: `POST`
- **Body**:
  ```json
  {
    "name": "João Silva",
    "email": "joao.silva@example.com",
    "password": "senha123"
  }
  ```
- **Resposta** (200 OK):
  ```json
  {
    "id": 1,
    "name": "João Silva",
    "email": "joao.silva@example.com",
    "password": "senha123"
  }
  ```
- **Erro** (Caso o e-mail já esteja em uso):
  ```json
  {
    "statusCode": 400,
    "message": "Email already in use."
  }
  ```

### 2. Listar Todos os Usuários

- **URL**: `/users`
- **Método**: `GET`
- **Resposta**:
  ```json
  [
    {
      "id": 1,
      "name": "João Silva",
      "email": "joao.silva@example.com",
      "password": "senha123"
    },
    {
      "id": 2,
      "name": "Maria Oliveira",
      "email": "maria.oliveira@example.com",
      "password": "senha456"
    }
  ]
  ```

### 3. Buscar Usuário por ID

- **URL**: `/users/:id`
- **Método**: `GET`
- **Parâmetros**:
  - `id` (número): ID do usuário que você deseja buscar.
- **Resposta**:
  ```json
  {
    "id": 1,
    "name": "João Silva",
    "email": "joao.silva@example.com",
    "password": "senha123"
  }
  ```

## Como Rodar a Aplicação

### 1. Clonar o Repositório

Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/SEU_USUARIO/NESTJS_Postgres-Monolito.git
```

### 2. Instalar as Dependências

Dentro do diretório do projeto, instale as dependências:

```bash
npm install
```

### 3. Configuração do Banco de Dados

Antes de rodar a aplicação, certifique-se de ter o PostgreSQL instalado e configurado corretamente em sua máquina. Crie um banco de dados com o nome `nestjs_database` (ou outro nome de sua escolha) e atualize o arquivo `src/app.module.ts` com as configurações de acesso ao seu banco de dados.

Exemplo de configuração no `app.module.ts`:

```typescript
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'sua-senha',
  database: 'nestjs_database',
  entities: [User],
  synchronize: true,  // Defina como true apenas em desenvolvimento
}),
```

### 4. Rodar a Aplicação

Após configurar o banco de dados, você pode rodar a aplicação utilizando o comando:

```bash
npm run start:dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Testes

A aplicação pode ser testada com ferramentas como **Postman** ou **Insomnia** para enviar requisições HTTP aos endpoints mencionados acima.

## Melhorias Futuras

- Adicionar autenticação e autorização (JWT ou Passport).
- Implementar validações de entrada com **class-validator**.
- Criar migrações para o banco de dados com **TypeORM**.

## Contribuições

Se você deseja contribuir com melhorias ou correções, por favor, abra uma **issue** ou envie um **pull request**!

---

### Licença

Este projeto está licenciado sob a **MIT License** - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
