# TypeScript

| indexes | examples |
|---|---|
| [Type Checking]() | *[reference]()* |
| [Classes]() | *[reference]()* |
| [Interfaces]() | *[reference]()* | 
| [Generics]() | *[reference]()* |

*[reference]()*

#### What is TypeScript
TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.

TypeScript file format is `.ts`. The `tsc` *TypeScript Compiler* compiles the TypeScript to browserfriendly javaScript.

#### Instalation
```
tsc --init & npm init -y
```

Add `package.json` to the project
Add `tsconfig.json` with default settings to the project.

**Change `scripts` in `package.json`.**
```diff
"scripts": {
+   "start": "node ./build/main.js",
+   "dev": "tsc -w & nodemon ./build/main.js",
+   "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

These scripts will give you acces to call `tsc` through the npm.

**Change `outDir`in `tsconfig.json` to targeted distribution folder.**
```diff
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
-   "outDir": "./",
+   "outDir": "build",
    "strict": true,
    "esModuleInterop": true 
  }
```

#### npm commands

* `npm start` runs the main js file.
* `npm run dev` starts typescript watchmode and nodemon to listen for changes.
* `npm run build` compiles typescript to javascript.

#### tsc commands

* `tsc` compiles typescript to javascript.
* `tsc -w` starts typescript watchmode.

