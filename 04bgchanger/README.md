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

