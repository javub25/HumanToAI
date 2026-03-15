# HumanToAI

HumanToAI is an interactive experience that tells how the world has changed with the evolution of AI.  
Every user can see the evolution of differents categories:

- **Education**
- **Work**
- **Art**
- **Health**
- **Life**

## 📸 Screenshots

| Desktop Image | Mobile Image |
|:---:|:---:|
| <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1773488115/humanToAI_desktop_mlv3ue.png" width="100%" alt="Desktop Image"/> | <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1773488114/humanToAI_mobile_rdsglt.png" width="100%" alt="Mobile Image"/> |


- **[Shots.so](https://shots.so/)** -> Generate desktop and mobile website images.


## 📝  How to install it

```git
  
#Download the repository
git clone "https://github.com/javub25/HumanToAI.git"

#Access the repository
cd projectName

#Install dependencies
ng install
ng dev
```

## 📝 Pre-requisites

- **Node.js >= 24.13.0**
- **npm >= 11.7.0**
- **Angular CLI >= 21.1.0**


## 🛠️ Tech

- **Angular 21**
- **TypeScript 5.9.2**
- **Vitest 4.0.8**
- **Tailwind 4.1.12**


## 🦾 AI Tools

- **[Freepik](https://www.freepik.com/)** -> Generate past / present category images.
- **[Vidu](https://www.vidu.com/)** -> Generate robot video from header.
- **[Leonardo.ai](https://leonardo.ai/)** -> Generate category icons.


## 📖 Documentation

### 1) Architecture

```ts
src/
 ├── app/
 │   ├── features/
 │   ├── layouts/
 │   ├── shared/
 │   ├── testing/
 │   ├── app.css
 │   └── app.ts
 └── assets/
```
&nbsp;
- **`app/`**: The main application code.
- **`features/`**: Application features.
- **`layouts/`**: Components used in the main layout.
- **`shared/`**: Reusable components shared across features.
- **`testing/`**: Testing utilities used across the application.
- **`app.css/`**: Global styles.
- **`app.ts/`**: The main file where the app starts to run.
- **`assets/`**: Static images, icons and videos.



&nbsp;

### 2) Global alias

1️⃣ Go to tsconfig.json  
2️⃣ Add the next lines inside `compilerOptions`

```ts
"baseUrl": "src",
"paths": {
  "@/*": ["*"]
}

```
Everything that starts with `@/` will be resolved to the `src/` folder.


&nbsp;

### 3) Testing with Vitest 🧪

Tests should follow `spec.ts` convention.


Place of my tests:

```ts

src/
 └── app/
     └── features/
         ├── categories/
         │   └── components/
         │       └── categories.list.spec.ts
         │
         └── evolution/
             └── components/
                 └── evolution.spec.ts
```


Run all tests: 
```bash
ng test
```

Run test with coverage:

```bash
ng test --coverage
```

Write a test:

```ts
describe("Group name of the tests", () => {
  test("Test name", () => {
    const number = 1;

    expect(number).toEqual(1);
  });
})
```

&nbsp;

## Credits

- Built by Javier Úbeda
