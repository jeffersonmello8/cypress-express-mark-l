# Usando Cypress para testes e2e de uma Web App

<h1 align="left">
    <img src=".github/Cypress_Logotype_Dark-Color.svg" width="300px">
</h1>

## 🚀 Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [Cypress] - framework usado para realizar os testes


## 👨🏻‍💻 Como executar o projeto

[Node.js](https://nodejs.org/) v18 ou superior para executar.

Para liberar o gerenciador de pacotes Yarn:

```
corepack enable
```

Execute os comandos abaixo para instalar das dependências do projeto:

Instalando o Cypress, Plugins Allure Report e outras dependências...
```sh
cd cypress-express-mark\
yarn install
```

Subindo a api...

```sh
cd cypress-express-mark\apps\api
yarn install
yarn dev
```

Subindo a interface gráfica...
```sh
cd cypress-express-mark\apps\web
yarn install
yarn dev
```

Executando os testes...
```sh
cd cypress-express-mark\
yarn cypress run
```

Executando os testes gerando dados pro Allure Report...
```sh
cd cypress-express-mark\
yarn cypress run --env allure=true
```

Para abrir o relatório em um servidor local
```sh
yarn allure serve
```


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feito por Jefferson Melo 👋 &nbsp;[Meu linkedIn](https://www.linkedin.com/in/jeffersonmelo8/)
