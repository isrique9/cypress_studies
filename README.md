# Repositório para estudo de automatização de testes com Cypress ✅
![node.js](https://img.shields.io/npm/v/npm.svg?logo=nodedotjs)
![javascript](https://img.shields.io/badge/logo-javascript-blue?logo=javascript)
![cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E?logo=cypress)

Antes de qualquer coisa: você quer que qualquer pessoa consiga sair do zero—sem Node instalado—até rodar seus testes.

## Pré-requisitos do sistema ⚙️
- Sistema operacional: Windows, macOS ou Linux.
- Acesso ao terminal: PowerShell/Command Prompt (Windows), Terminal (macOS/Linux).

- **Clone o repositório**:

````
    git clone https://github.com/isrique9/cypress_studies.git
    cd cypress_studies
````

## Instalar e configurar o Cypress 🧪

1) **Instalar dependências**:

````
    npm install
````

2) **Instalar e configurar o Cypress**:

````
    npm install --save-dev cypress
    # ou
    yarn add --dev cypress
````

- Isso cria a pasta cypress/ (ou cypress/e2e nas versões mais novas) e arquivos de exemplo.

- Feche a UI após confirmar que abriu corretamente.

3) **Scripts no package.json  (facilitar execução):**:

````
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "cy:run:chrome": "cypress run --browser chrome",
    "cy:run:headed": "cypress run --headed"
  }
}
````

## Executando testes 🖥️

- Abrir a UI do Cypress:

````
npm run cy:open
````

Rodar em modo headless:

````
npm run cy:run
````

## Problemas comuns e soluções rápidas 🐞💡

- Node incompatível:  
Solução: use nvm use ou instale a versão LTS indicada no projeto.

- Permissões no Linux/macOS (EACCES):  
Solução: evite sudo npm install; use NVM. Se necessário, ajuste permissões da pasta do projeto.

- Cypress não abre no Windows (antivírus/SmartScreen):  
Solução: permita o executável do Cypress na segurança do sistema.

- Falha ao detectar navegador:  
Solução: instale o navegador localmente (Chrome/Edge/Firefox) ou rode com o Electron padrão.

- BaseUrl não acessível:  
Solução: confirme que o servidor está rodando e que a porta/URL está correta no cypress.config.