# Blog

Blog utilizando [JSON Server](https://github.com/typicode/json-server) para armazenamento dos posts.

Para rodar o projeto:

No diretório:

1) Instale as dependências
```
npm install
```
2) Rode o app 
```
npm start
```
3) Abra outro terminal no mesmo diretório e rode o JSON Server na porta 8000
```
npx json-server --watch data/db.json --port 8000
```
