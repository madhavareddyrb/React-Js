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

# Passing Props to a Component
React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

# Component :
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.

The default props, which are passed to the component when it is rendered, are defined in the component's file. You can override the default props by passing them to the component when you render it.



# 04:BgChanger:

#  here We learn how to use tailwind in react and useState and onClick() function

1.Create Project npm create  vite@latest set up the project and install dependencies

2.remove all app.jsx code and create a div 

3.create 2 buttons inside another div with bottom 

4.To change bg we use useSate to set color Const[color,setColor] = useState('blue')

5.here color is variable and setColor is a method to change color we must use setColor(color) to chnage color

6.to change color we can create an function chnagecolor(ccolor) we use setColor inside functtion to changecolor 

7.On main div we pass color variable using style tag inside div.

8.to change color on click we use onClick() function  

9.You cannot pass the function call directly, like onClick={changeColor("red")}, because it would execute the function immediately when the component renders, not only when the button is clicked.

10.You use an arrow function (() => changeColor("red")) to pass a function reference that only executes the changeColor("red") call when the click event actually occurs.


## 05: Password Changer

Before moving the featurs are :

A slider for changing length of passowrd,copy button copy the password and highlets text to confirm the text is copied,2 checkboxs to include numbers and characters, a input box to display text

how website/componets load how password is generated and re runs gain and again the code to get password

# Memoization concept:

How we can render again and again or  keep on runing and ruing on every click so these is call memonization and MOsts of the methods in the memory.


# STEPS:

1.Project setup nd tailwind setup using js

2.Define useSates for length,password,number,character,

5.input field has a value of password variable and it with readOnly field 

6.copy button 

7.Second div for length,number,character checkboes

8.Input field for length we can set min, max, value(length)  and onChange we need to setLength using event and label for length and pass length variable.

# useCallback: https://react.dev/reference/react/useCallback
React Compiler automatically memoizes values and functions, reducing the need for manual useCallback calls. You can use the compiler to handle memoization automatically.

9.useCallback(fn, dependencies) accepts 2 parameters a function and things what is going to change and we can't change rapidiy to may values so we came with useEffect here to run the function again and again with differnt values

# useEffect: https://react.dev/reference/react/useEffect

10.useEffect: Run piece of code, on different conditions, we chnage, length,include numbers and character 



