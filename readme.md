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
    
### Consegui adicionar
  Agora uma lista das funcionalidades que eu consegui implementar ao projeto:
    - Banco de dados local
    - Página de login e cadastro funcionais e verificadas
    - Página home
    - Página da criação do helpinho
  
<a name="iniciando"></a>

## 🏁 Iniciando

Clone o repositorio

```bash
$ git clone https://github.com/esdrasaaf/AngellesStore_Front.git

```

Instale as dependências

```bash
$ npm i
```

E por fim, rode o comando para iniciar a aplicação

```bash
$ npm start
```

<a name="contribuindo"></a>

## 🏁 Rotas

1. Rota de login do usuário:

    Route: ```"/"```
    
    Descrição: Essa rota serve para que o usuário logue no site com a sua conta.

2. Rota para cadastrar um novo usuario:
    
    Route ```"/sign-up"``` 

    Descrição: Essa rota serve para que o usuário cadastre-se no site. 
    
    Entrada:
    ```bash
        {
            "name": "esdras",
            "email": "teste@gmail.com.br",
            "password": "123456",
            "image": "image url"  
        }
    ```

3. Rota para acessar a página principal:
    
    Route: ```"/home"``` 

    Descrição: Nesta rota o usuário estará acessando a página home do site, visualizando as principais promoções, produtos, categorias e funcionalidades do site.
    

4. Visualizar produtos específicos do ecommerce:
    
    Route: ```"/product/:productId"``` 

    Descrição: Nesta rota vai aparecer as informações do produto que você selecionou.

5. Página de pesquisa do produto: 

    Route get: ```"/product/search/:productName"``` 
    
    Descrição: Nesta rota o usuário é redirecionado para a página de pesquisa , onde os resultados aparecem por meio da filtragem de nome. 


6. Categorias:

    Route get: ```"/category/:categoryId"```
    
    Descrição: Nesta rota, é apresentado os produtos de uma determinada categoria.

    
7. Catálogo:

    Route get: ```"/catalog"```
    
    Descrição: Nesta rota é apresentado todos os produtos disponíveis no site.


8. Página do Usuário:

    Route get: ```"/user"```
    
    Descrição: Nesta rota, o usuário pode ver todas as suas informações, bem como o seu email, senha, foto de perfil e compras realizadas.


9. Página do Usuário:

    Route get: ```"/saves"```
    
    Descrição: Nesta rota, o usuário pode ver todos os produtos favoritados.

10. Carrinho:

    Route post: ```"/cart"```
    
    Descrição: Nesta rota, o usuário poderá ver a sua lista de compras e de fato efetuar a sua comprar atravéz da API da stripe.

    Body:
   
    ```
      [
        {
          brandId:
          categoryId: 
          colorId: 
          createdAt:
          description:
          id:
          image:
          name:
          numberOfSales:
          price:
          updatedAt:
        },
        {
          brandId:
          categoryId: 
          colorId: 
          createdAt:
          description:
          id:
          image:
          name:
          numberOfSales:
          price:
          updatedAt:
        },
        ...
      ]
    ```

    Obs: Em caso de sucesso/falha na transação, há uma rota que traz essas informações para o usuário.

11. Rota inexistente:

    Route: ```"*"```
    
    Descrição: Nesta rota, caso o usuario escreva uma url inexistente, ele é redirecionado para a rota "/404".

12. Rota 404 (not found):

    Route: ```"/404"```
    
    Descrição: Caso seja redirecionado pra essa rota, mostra para o usuário que a rota não existe e redireciona pra home.


