This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# NW.Js

## Set up project
1. Navigate to the project folder with a CLI
2. Run the following:
   ```
   npm install 
   ```
Nota: Si hay problemas al reiniciar, volver a (?):
- Hacer otra vez? ```npm install```
- Instalar otra vez? ```npm install nw@sdk --save```

## Development
### Run
- To run the application directly in your development environment run:
    ```bash
    yarn nwjs-dev 
    ```

### Build
-
    ```bash
    yarn nwjs-reactbuild
    ```

## Packaging The NW.js App
- Importante, hacer las instrucciones del tutorial y haber instalado ```npm install nwjs-builder-phoenix --save-dev```
    ```bash 
     yarn nwjs-pack
    ```


# Installation Guide

- Install:
  ```
  npm i nw@sdk --save
  ```
  ```
  npm i concurrently --dev
  ```
  ```
  npm i wait-on --dev
  ```
- Install for Packaging the NW.js App
  ```
  npm install nwjs-builder-phoenix --save-dev
  ```
- Create a main.js file under the src directory:

  ```
  const startUrl = process.env.NWJS_START_URL || '../build/index.html';
  nw.Window.open(startUrl, {}, function(win) {});
  ```

- Modify package.json file an add:

  ```
  {
      ...
      "main": "./src/main.js",
      "homepage":".",
      "build": {
          "nwVersion": "0.47.1" /* <- we need to specify a NW.js version to be used on build process */
      },
      "scripts": {
          ...
          "nwjs-dev": "concurrently \"set BROWSER=none&&yarn start\" \"wait-on http://localhost:3000 &&set NWJS_START_URL=http://localhost:3000&&nw .\" ",
          "nwjs-reactbuild": "nw .",
          "nwjs-pack": "build --tasks win-x86,win-x64,linux-x86,linux-x64,mac-x64 --mirror https://dl.nwjs.io/ ."
      },
  ```

- Add to gitignore:

```
# distribution
/dist
```
