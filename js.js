let container = document.querySelectorAll("#id")[0]
container.setAttribute("class","container")
let button = document.querySelectorAll("#btn")[0]
button.setAttribute("class", "color button")
let a = document.getElementsByClassName("cont")
Array.from(a).forEach(element => {
    element.onclick = () =>{
        console.log("onclick")
        console.log("1")
    }
}); 
let b = document.getElementById("btn")
b.onclick =()=>{
    console.log("onclick using id")
}