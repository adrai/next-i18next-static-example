The proof this works on a static server (SSG):

```sh
npm i
npm run out
```

then copy the out folder to a static server or run one locally, i.e. with [http-server](https://github.com/http-party/http-server), like: `http-server -s -p 5000 out`