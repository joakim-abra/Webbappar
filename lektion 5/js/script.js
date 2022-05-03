// alert("Scipt loaded!")

let x=5
console.log(typeof x) //Skriver ut number

let y="Hello"
console.log(typeof y) //skriver ut string

let z = [1,2,3,4,5]
console.log(typeof z) //skriver ut Object


console.log(s) // Ger undefined i konsollen
var s = 5 
console.log(s) // Ger 5

var t = null
console.log(t) //null

1=='1' //True
1==='1' //False
1==1 //true
1===1 //true
false==[] //true
false==0 //true
false===0 //false
false===[] //false
false!=[] //false
false!==[] //true
'2' !=2 //false
'2'!==2 //true
'3'> 1 //true

//Ternary
var p = t === null ? 3 : 1
console.log(p)

let arr = [1,2,3,,4,5]

console.log("For let i = 0; i<arr.length;i++)")
for(let i = 0; i<arr.length;i++)
{
    console.log(arr[i])
}

//hoppar över tomt värde i array.
console.log("for (let i in arr)")
for (let i in arr){
    console.log(arr[i])
}

console.log("for (let i of arr)")
for (let i of arr){
    console.log(i)
}
//Hoppar över tomma element/index
console.log("arr.forEach((elem) =>console.log(elem))")
arr.forEach((elem) =>console.log(elem))
//Skriver ut index för elementen
//elem = värdet, i=index
console.log("arr.forEach((elem,i)=>console.log(i))")
arr.forEach((elem,i)=>console.log(elem,i))


// OBS måste använda dessa fnuttar " ` " jämte +-tecknet
function greet(name){
    
    return `Hello, ${name}!`
}
let message  = greet("Jim")

console.log(message)

//Kan lagra funktioner i variabler

let f = function (){
    return `Hello!`
}

console.log(f())

const greeting = (name) => `Hello, ${name}!`
const greetingMessage = greeting("Jim")
console.log(greetingMessage)

function buttonAlert(){
    alert("I have been clicked")
}


let val=0

function increase(){
    if(val<10)
    {
    val++
    }
}


function decrease(){
    if(val>0)
    {
    val--
    }
}

function print(){
    alert(val)
}

function reset(){
    val=0
}

//Objekt för en person
const person ={
    name: "Jim",
    profession: "Educator",
}
//Ändra fields för en person
person.profession = "Teacher"
person["profession"] = "Teacher"

const user = {
    name:  "Jim",
    age: 33,
    teach: (className) => `I am teaching ${className}`
}
//Printa värden i konsollen
console.log(user.name)
console.log(user["name"])
console.log(user.teach("Webbapplikationer"))
console.log(user)

//Skapa en klass. fieldsen behöver inte deklareras datatyper.
class User{
    name
    age

    //Konstruktor
    constructor(name, age)
    {
        this.name = name
        this.age = age
    }
}


const newUser = new User("Jim",33)
console.log(newUser)
//hämtar alla element med tag-namn (<button>)
const tags = document.getElementsByTagName("button")
console.log(tags)
//Hämtar första element med id (.newColor)
const selector = document.querySelector(".newColor")
console.log(selector)

//Hämtar första element med id
const button = document.querySelector("#btnCountUp")
console.log(button)

//Hämtar samtliga element med klass eller id
const selector2 = document.querySelectorAll(".newColor")
console.log(selector2)

//Hittar närmaste föräldraelementet (visar main eftersom p ligger i main.>
//const selector = document.querySelector(".newColor").parentElement
const parent = selector.parentElement
console.log(parent)

//Hämtar samtliga underlement till id:et #main (<main id="#main">)
const children = document.querySelector("#main").children
console.log(children)

// const p = selector.closest("#main")

//Hämtar efterföljande element på samma nivå
// const next = document.querySelector(".newColor").nextElementSibling

//Hämtar föregående element på samma nivå
// const previous = document.querySelector(".newColor").previousElementSibling

//Lägg(ersätter befintlig) till HTML kod till sidan, här till en <div> med id="innerHTML"
document.querySelector("#innerHTML").innerHTML = "<h1 class='newColor'>Hello</h1><p>world</p><a href='http://github.com'>Github</a>"

//hämtar attributet "id" för första elementet med klassen newColor till konstanten getAttr
const getAttr = document.querySelector(".newColor").getAttribute("id")
console.log(getAttr)

//Ändrar attributet id för det första elementet med klass newColor.
document.querySelector(".newColor").setAttribute("id","newID")
console.log(getAttr)

document.querySelector(".newColor").classList.add("btn")

let classes = document.querySelector(".newColor").classList
console.log(classes)

document.querySelector(".newColor").classList.remove("btn")
classes = document.querySelector(".newColor").classList
console.log(classes)

const colors = document.querySelectorAll(".newColor")
colors.forEach((child)=>child.classList.add("btn"))

function testFunction(name){
    console.log(`test function ${name}!`)
}

document.querySelector(".newColor").setAttribute("onclick", `testFunction('Jim')`)

const c  = document.querySelectorAll(".newColor")
c.forEach((child,i)=> child.setAttribute("onclick", `testFunction(${i})`))

document.querySelector(".newColor").classList.toggle("btn")
document.querySelector(".newColor").classList.toggle("btn")
document.querySelector(".newColor").classList.toggle("btn")
