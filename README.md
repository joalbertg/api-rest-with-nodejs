# Api Rest with NodeJs

## Steps to create this project.

run in the console: `npm init -y`

### Install

```cmd
npm install express mongodb
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

### Create `.babelrc` file with:

```js
{
  "presets": [
    "@babel/preset-env"
  ]
}
```
### Install

```cmd
npm install --save-dev @babel/node
```

### Create `src` folder and `index.js` inside the folder, with next code:

```js
const test = 'test';
console.log(test);
```

### Add into the `package.json` under the `scripts` key:

```js
"build": "babel src --out-dir dist"
```
run in console `npm run build`. this should create an `index.js` file, with supported code, inside a `dist` directory.

### Add into the `package.json` under the `scripts` key:

```js
"start": "node dist/index.js"
```

run in console `npm run start`, this after building the project.

### Install

```cmd
npm install -D nodemon
```
### Add into the `package.json` under the `scripts` key:

```js
"dev": "nodemon src/index.js --exec babel-node"
```

`delete` **`dist`** folder and `run`:

`npm run dev` and you'll see this output:

```cmd
...
> nodemon src/index.js --exec babel-node

[nodemon] 1.19.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `babel-node src/index.js`
test
[nodemon] clean exit - waiting for changes before restart
```

## `package.json`

```js
{
  "name": "rest-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "babel src --out-dir dist",
    "dev": "nodemon src/index.js --exec babel-node",
    "start": "node dist/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@babel/polyfill": "^7.4.4",
    "express": "^4.17.1",
    "mongodb": "^3.2.6"
  },
  "devDependencies": {
    "@babel/cli": "^7.4.4",
    "@babel/core": "^7.4.5",
    "@babel/node": "^7.4.5",
    "@babel/preset-env": "^7.4.5",
    "nodemon": "^1.19.1"
  }
}
```
## Server
### Create `server.js` file into `src` with:

```js
import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello world'));

export default app;

```

and change `index.js` file content with:

```js
import '@babel/polyfill';

import app from  './server';

const PORT = 3000;
 const main = async () => {
  await app.listen(PORT);
  console.log(`Server on port, ${PORT}`);
}

main();

```

## Install

```cmd
npm install dotenv --save-dev
```

## Add to `server.js`:

```js
if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}
```

## Create `.env` file with:

```env
NODE_ENV=<environment_name>
PORT=<port_number>
DB_HOST=<db_host_name>
DB_PORT=<db_port_number>

```

## Create `database.js` with:

```js
import MongoClient from 'mongodb';

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '27017';

export const connect = async () => {
  try{
    const client = await MongoClient.connect(
      `mongodb://${DB_HOST}:${DB_PORT}`,
      { useNewUrlParser: true });
    const db = client.db('node-api-rest');
    console.info('DB is connected');

    return db;
  } catch(e) {
    return console.error(e);
  }
}

```
