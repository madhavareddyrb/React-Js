## REACT JS:

# installation

npm - node package manager

npx- node package executer

createing react app:

recat bundlers-CRA and vite,parcel 

We can start react with CRA,vite and parcel

CRA install packages and brings files

With create-react-app

npx create-react-app 01basicreact

Vite bundler is fast compare to CRA and vite just gives files and packages are not installed

npm create vite@latest

Name of project basic vite

Select react

Javascript

for vite project folder -> Cd 01basicvite

Then we can see that package.json and install that packages using: npm i

Look at package.json for all details in dependecies and scripts (how to start project,packages,testing frameworks(CRA))

Rectat won’t work alone for web(react dom) and for app(react native)

CRA- gives all packages and unnecessary packages also

Vite - gives just react, react-dom later we need to configure everything

CRA-Scrips/ start - npm run start - use ls command-we need packages.json to run projects

Vite - dev - npm run dev

## UnderStanding React flow and structure:

Steps:

Go to package.json

CRA:Scripts:

react-scripts package responsible for these

start -> start project

build -> in deploy(production grade)

We mainly work with src:

Only one index.html so because of that we call Single Page Application

React injects there dom nodes instead of html so we call SPA and won’t reload full site

CRA-In index.html we didn’t see any script tags but in view page source we can see that script is injects through bundle thats happening because of react-scripts dependency when we start the scripts injects before going to live

Vite-script tags is connected directly

Cra-remove unnecessary scr files and main files are app.js,index.js

Vite - same remove unnecessary components

App.jsx (components)

Recat DOM - virtual dom which mimics original dom

JSX only returns one element when we try to run 2 h1 or 2 elements it gives error so we can overcome by putting everything under on div or empty tags

run bare minimum application by deleting everything

# app

function App() {
  return(
 <>
 <h1>Hi react</h1>
 </>
  )
}

export default App;

# index
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

Html same



## counter project uses of state:

with Javascript :

1.remove all code

2.create h1,h2 tags and two button one for increment and other for decrement and a p tag footer

3.create a variable counter 

4.pass counter variable to h tags and p tag (this process of injection is called variable injection) add onClick methods on buttons 

5.create a method or funtion to increment and decrement

6.console log the values is it working or not and all things are working well but the counter value is not updating for h tags,p tag after increment or decrementing of values so here react state(hooks) comes into picture.

7.React  takes the control of the UI and it gives a mechanism of state any chnage in UI it will update the whole ui

8.React useState keeps checking for ui and its re render the state

9.import usestare from react

10.useState() (this are know has hooks) this returns in format of array so east to extract  first one variable and second is method const [counter, setCounter] = useState()

11.we can't call counter directly like variable we use method here has we set in useState for now it is setCounter. setCounter(counter++)

12.Its nan because we didn't give value to variable so when we create useState need to pass value like useState(10)

13.Now we can update the value all over the UI 

14.create remove method with state method

15.Try to increment with 4 increment values like counter ++, counter++, counter++ but when we click on addValue it update only 1 value this concept is know has banching

16.It takes all baching and it updates one by one 

17.to avoid this we use a callback with counter increment


## 03 TailwindProps 

npm vite@latest

1.create project has same as all

2.Use these documentation to configure tailwind css https://tailwindcss.com/docs/installation/using-vite

3.