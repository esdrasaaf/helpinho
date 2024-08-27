# Helpinho LBCA

<details open="open">
  <summary><h2 style="display: inline-block">📜 Sumário</h2></summary>

- [Sobre o projeto](#sobre-o-projeto)
- [Iniciando](#iniciando)


</details>

<a name="sobre-o-projeto"></a>

## 📋 Sobre o projeto
### Tecnologias utilizadas

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![REACT](https://img.shields.io/badge/-React-blue?style=for-the-badge&color=5ed2f2&logo=react&logoColor=000000)
![Javascript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&loo=javascript&logoColor=%23F7DF1E&logo=javascript&logoColor=%23F7DF1E)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white)

### Idealização do projeto
- Esse projeto foi idealizado a partir de um sonho antigo da minha mãe, Anathusia Antero. Ela almejava ter uma marca de roupas infantis, empreender e criar seu próprio comércio. Então, utilizando meus conhecimentos em programação, desenvolvi um ecommerce focado em roupas infantis, para dar o que seria o ponta pé inicial para a concretização deste objetivo. Vale salientar que o site NÃO está totalmente completo! Mas, já está bem completo e com bastante funcionalidades. 

### Link do back-end desse projeto
- https://github.com/esdrasaaf/AngellesStore_Back
- **É importante lembrar que para o usuário interagir os produtos, carrinho, lista de favoritos e afins, é necessário que o back-end esteja rodando em conjunto com o front-end :)**
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


