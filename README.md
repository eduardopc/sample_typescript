### Intellisense

Para que o intellisense funcione é necessário o import de uma biblioteca de tipos, como por exemplo, para o Express:

> npm i -D @types/express

### Rodando um projeto TS

Para executar um projeto TS é necessário primeiramente a conversão do projeto de TS para JS.

Isto pode ser feito a partir do próprio TS. Uma vez que estamos trabalhando em um projeto TS, dentro da **node_modules** haverá um diretório chamado **.bin**.

Para transformar os arquivos basta executar através do terminal os seguintes comandos:

> npx tsc --init

O comando acima irá criar um arquivo tsconfig.json na raiz do nosso projeto. Neste arquivos diversas configurações podem ser feitas, entre elas o caminho onde os arquivos transformados irão ser criados. Após as devidas parametrizações, executar o seguinte comando:

> npx tsc







