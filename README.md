# NW.Js

## Set up project
1. Navigate to the project folder with a CLI
2. Run the following:
   ```
   yarn
   ```
Note: If there are problems, try to reinstall nw:
- ```yarn add nw@sdk --save```

## Development
### Run
- To run the application directly in your development environment run:
    ```bash
    yarn nwjs-dev 
    ```

### Run Production Build

-   First
  ```
  yarn nwjs-build
  ```
-   Then
  ```
  yarn nwjs-reactbuild
  ```

## Packaging The NW.js App

- Run Build first: 
  ```
  yarn nwjs-build
  ```
- Only windows: 
  ```bash
  yarn nwjs-pack-win
  ```
- All OS: 
  ```bash
  yarn nwjs-pack
  ```

  - Recordatorio: hay que haber hecho las instrucciones del tutorial y haber instalado ```npm install nwjs-builder-phoenix --save-dev```


# Installation Guide

- Install:
  ```
  yarn add nw@sdk --save
  ```
  ```
  yarn add concurrently --dev
  ```
  ```
  yarn add wait-on --dev
  ```
- Install for Packaging the NW.js App
  ```
  yarn add nwjs-builder-phoenix --save-dev
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
