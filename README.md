# To-Do List API

Este projeto é uma API para gerenciamento de tarefas (*To-Do List*) desenvolvida com **Spring Boot** e **MySQL**.

## 🛠 Tecnologias Utilizadas

- **Java 17**
- **Spring Boot 3.4.3**
- **MySQL**
- **Maven**
- **Hibernate (JPA)**

## 🎯 MVP do Projeto

A API contará com as seguintes funcionalidades inicialmente:

- **Criar** tarefas (`POST`)
- **Visualizar** tarefas (`GET`)
- **Atualizar** tarefas (`PUT`)
- **Excluir** tarefas (`DELETE`)
- **Marcar e desmarcar** tarefas como concluídas

### 📌 Estrutura básica da tarefa:

Cada tarefa conterá os seguintes atributos inicialmente:

- `id` (identificador único)
- `nome` (título da tarefa)
- `descrição` (detalhes sobre a tarefa)
- `status` (indica se a tarefa está concluída ou não)

## 📜 Log de Atualizações

### 15/03/2025
- **GET**: Implementada a busca de todas as tarefas. (/api/todos)
- **POST**: Implementado o endpoint para criação de tarefas. (/api/todos)
- **DELETE**: Implementada a exclusão de tarefas. (/api/todos/id)
- **PUT**: Implementada a atualização de tarefas. (/api/todos/id)
- **GET**: Criado endpoint para buscar tarefa individual. (/api/todos/id)
- **PUT**: Implementada a finalização de tarefa (alterando o status para concluída). (/api/todos/id/finalizar)

### 17/03/2025
- Criando o front para receber da forma mais básica possível os dados
- Criado o componente task-list, aonde ficarão as tarefas;
- Criado o componente header, aonde ficará o título e o botão de adicionar novas tarefas;

### 18/03/2025
- Manutenção no componente task-list;
- Criação do componente todo-item;
- Projeto recebendo os dados do back e listando dentro dos componentes corretos no front (só está muito feio);
- Tabelas recebendo nome correto delas;
- Dois novos end-points criados no back: "feitos", get que trás todos os to dos feito, e "fazer", trás todos os todos a fazer;
- Front recebendo as rotas "feitos" e "fazer" com sucesso;
- Front inserindo to dos no banco de dados pela rota post;

### 22/03/2025

- Componente de carregar criada para travar a tela quando o sistema estiver fazendo requisições HTTP;
- Ao adicionar a to do pela interface do front, o front atualiza com o novo to do;
- Tirei o nome e a descrição do to do item uma do lado da outra e botei abaixo;

### 23/03/2025
- Método finalizar funcionando pelo front;
- Após finalizar tarefas, front atualiza as tarefas mostrando nas listas corretas;
- Método editar funcionando pelo front;

### 24/03/2025

- Melhoria no código do editar no front;
- Método deletar funcionando pelo front;
- Criação do componente de notificações; 
- Componente de notificações no adicionar to do feito e funcionando;

### 25/03/2025:
- Alterei o id para guid ao invés de long;
- Componente de notificações melhorado, sucesso centralizado e erro sobrepondo outras telas! 
- Criado o layer 'dtos' no back;
- Layer dtos funcionando apenas no editar to do tanto pelo front quanto no back (falta a parte de erros também!);

---

## 🚀 Tutorial: Como Baixar e Testar o Projeto

### Pré-requisitos

- **Java 17** instalado na sua máquina.
- **Maven** instalado (ou você pode usar o Maven Wrapper, se disponível no projeto).
- **MySQL** instalado e em execução.

### Passo 1: Clonar o Repositório

Abra o terminal e execute o comando abaixo para clonar o repositório:

```bash
git clone https://github.com/matheusilveiraw/to-do-list-java
```

### Passo 2: Configurar o Banco de Dados

1. Crie um banco de dados no MySQL, por exemplo, `todo_db`.
2. No projeto, localize o arquivo `application.properties` dentro do diretório `src/main/resources`.
3. Atualize as configurações do banco de dados com suas credenciais.
### Passo 3: Compilar e Executar o Projeto

Navegue até o diretório raiz do projeto e execute um dos comandos abaixo:

- **Utilizando o Maven para rodar a aplicação:**

```bash
mvn spring-boot:run
```

## 🎨 3. Rodar o Frontend (Angular)

1. Abra o terminal e execute o comando abaixo para clonar o repositório:

   ```sh
   https://github.com/matheusilveiraw/to-do-list-front-java
   
1. Vá para a pasta do frontend:
   ```sh
   cd ../frontend

2. Instale as dependências do Angular:
   ```
    npm install
   ```
   
3. Inicie o projeto:
 ```
    ng serve --open
 ```

O frontend estará disponível em http://localhost:4200/.