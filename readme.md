# Helpinho LBCA

<details open="open">
  <summary><h2 style="display: inline-block">📜 Sumário</h2></summary>

- [Sobre o projeto](#sobre-o-projeto)
- [Iniciando](#iniciando)


</details>

<a name="sobre-o-projeto"></a>

## 📋 Sobre o projeto

### Meu planejamento
- Meu plano inicial era desenvolver primeiro o front-end para depois iniciar o back-end, por fim adicionando o serveless.

### Contratempos
- Infelizmente, a maior dificuldade que enfrentei foi uma viagem que precisei fazer para outra cidade. Acabei perdendo aproximadamente 4 dias que eu poderia ter usado para desenvolver ainda mais o projeto.

### Não consegui adicionar
Aqui vai uma lista das funcionalidades que eu não consegui implementar ao projeto:
  - Serverless
  - Carrossel Login/Register pages
  - Filtrar pelo input text da página home
  - Login pelo google
  - Responsividade mobile
  - DynamoDB
  - Estilização completa (faltou dar o toque final em algumas partes)
  - Máscaras em alguns valores
  - Não deu tempo de finalizar a lógica de doação no back-end
    
### Consegui adicionar
Agora uma lista das funcionalidades que eu consegui implementar ao projeto:
  - Banco de dados local
  - Página de login e cadastro funcionais e verificadas
  - Página home com filtro baseado na categoria
  - Página da criação do helpinho funcional
  - Página do helpinho semi-funcional
  
<a name="iniciando"></a>

## 🏁 Iniciando

# Front-end

Clone o repositorio

```bash
$ git clone https://github.com/esdrasaaf/helpinho.git

```

Entre na pasta

```bash
cd front-end

```

Instale as dependências

```bash
$ npm i
```

E por fim, rode o comando para iniciar a aplicação

```bash
$ ng serve
```

# Back-end

Clone o repositorio

```bash
$ git clone https://github.com/esdrasaaf/helpinho.git

```

Entre na pasta

```bash
cd back-end

```

Instale as dependências

```bash
$ npm i
```

E por fim, rode o comando para iniciar a aplicação

```bash
$ npm run dev
```

<a name="contribuindo"></a>

## 🏁 Rotas back-end

1. Rota para cadastrar um novo usuario:
    
    Route ```"/auth/signup"``` 

    Descrição: Essa rota serve para que o usuário cadastre-se no site. 
    
    Entrada:
    ```bash
        {
            "name": "esdras",
            "email": "teste@gmail.com.br",
            "password": "123456",
            "cpf": "numero de cpf",
            "number": "numero de telefone" 
        }
    ```

2. Rota para o usuário logar ao sistema e receber seu token:
    
    Route: ```"/auth/signin"``` 

    Descrição: Nesta rota o usuário estará logando com suas informações enviadas posteriormente no formulário de registro.
   
   Entrada:
    ```bash
        {
            "email": "teste@gmail.com.br",
            "password": "123456",
        }
    ```

3. Pega todos os helpinhos já criados:
    
    Route GET : ```"/help/"``` 

    Descrição: Pega todos os helpinhos já criados.

4. Pega todos o helpinho pelo id:
    
    Route GET : ```"/help/id/:id"``` 

    Descrição: O usuário escolhe o helpinho que quer visualizar.
   
5. Pega todos o helpinho pela categoria:
    
    Route GET : ```"/help/category/:category"``` 

    Descrição: O usuário escolhe o helpinho que quer categoria.

 6. Cria um novo helpinho:
  
    Route POST : ```"/help/"``` 
  
    Descrição: O usuário cria um novo helpinho a partir das informações enviadas.

 6. Altera as informações do helpinho:

    Route PUT : ```"/help/"``` 
  
    Descrição: Após o usuário fazer uma doação, as informações do helpinho mudam.


