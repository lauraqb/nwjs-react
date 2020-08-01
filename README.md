This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# `NW.Js`

## Installation of current project
1. Navigate to the project folder with a CLI
2. Run the following:
   ```
   npm install 
   ```
3. Si hay problemas al reiniciar, volver a (?):
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
- Importante, haber las instrucciones del tutorial y haber instalado ```npm install nwjs-builder-phoenix --save-dev```
    ```bash 
     yarn nwjs-pack
    ```

# TUTORIAL
## Installation in a new project
- Seguir este tutorial: https://www.onbirkod.com/how-to-build-an-nw-js-app-using-create-react-app/
- Install: 
    ```bash 
    npm i nw@sdk --save 
    ```
    ```bash 
    npm i concurrently --dev
    ```
    ```bash 
    npm i wait-on --dev
    ```
- Create a main.js file under the public directory:

    ```
    const startUrl = process.env.NWJS_START_URL || '../build/index.html';
    nw.Window.open(startUrl, {}, function(win) {});
    ```
- Modify package.json file an add:
    ```
    {
        ...
        "main": "./public/main.js", 
        "scripts": {
            ...
            "nwjs-dev": "concurrently \"set BROWSER=none&&yarn start\" \"wait-on http://localhost:3000 &&set NWJS_START_URL=http://localhost:3000&&nw .\" ",

    },
    ```


