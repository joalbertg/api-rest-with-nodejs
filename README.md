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
run in console `npm run build`. this should create an `index.js` file, with supported code, inside a `dist` directory
