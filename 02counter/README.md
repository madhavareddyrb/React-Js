# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


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
