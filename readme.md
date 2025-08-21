# Alura API REST - Missões Espaciais

Este repositório contém uma **API RESTful** construída com **Node.js**, **Express** e **MongoDB**.  
Foi desenvolvida como parte do curso **7 Days of Code - Node.js com Express** da Alura, com o objetivo de criar e gerenciar informações sobre missões espaciais 🚀.

---

## Funcionalidades

- **CRUD de Missões:** Criar, listar, atualizar e deletar missões espaciais.  
- **Filtros de Busca:** Buscar missões por filtro.  
- **Integração com Banco de Dados:** Conexão com MongoDB usando Mongoose para persistência de dados.  
- **Rotas Estruturadas:** Organização clara das rotas para facilitar manutenção e expansão.  
- **Configuração de Ambiente:** Uso do `dotenv` para gerenciar variáveis de ambiente de forma segura.

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado v18.x ou superior)  
- [MongoDB](https://www.mongodb.com/) (instância rodando local ou na nuvem)

---

## Como Executar

### Instalação

1. **Clone o repositório:**  
    ```sh
    git clone https://github.com/AntonioNeto18/alura-7daysOfCode-api-missoes-espaciais.git
    cd alura-7daysOfCode-api-missoes-espaciais
    ```

2. **Instale as dependências:**  
    ```sh
    npm install
    ```

3. **Configure as variáveis de ambiente:**  
    Crie um arquivo `.env` na raiz do projeto e adicione sua string de conexão com o MongoDB:
    ```env
    DB_CONNECTION_STRING="your_mongodb_connection_string_here"
    ```

### Executando a Aplicação

Para iniciar o servidor com recarga automática ao alterar arquivos (usando `nodemon`):
    ```
    npm run dev
    ```
A API estará disponível em http://localhost:3000.

## Endpoints da API 
A API fornece os seguintes endpoints para interagir com as missões. 
 
| Método | Endpoint | Descrição | Corpo da requisição |
| :----- | :-------------------- | :------------------------------- | :------------------------------- | 
| GET | /missions | Lista todas as missões.         | - | 
| GET | /missions/search | Busca missões por filtro (e.g., name, status, destination, duration). | ?status=Completed | 
| GET | /missions/:id | Retorna uma missão pelo ID. | - | 
| POST | /missions | Cria uma nova missão. | {"name": "...", "crew": 5, "spacecraft": "...", "destination": "...", "status": "In Progress", "duration": 10} | 
| PUT | /missions/:id | Atualiza uma missão existente. | {"name": "...", "crew": 6, "status": "Completed"} | 
| DELETE| /missions/:id | Deleta uma missão pelo ID. | - |

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript. 
- **Express.js**: Framework web para Node.js. 
- **MongoDB**: Banco de dados NoSQL. 
- **Mongoose**: Biblioteca ODM para modelagem e conexão com MongoDB. 
- **Nodemon**: Monitoramento de alterações no código para reinício automático do servidor. 
- **Dotenv**: Carregamento de variáveis de ambiente a partir de um arquivo .env.
