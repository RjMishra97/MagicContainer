const parent=document.getElementById("container")
const button1=document.getElementById("button1")
const button2=document.getElementById("button2")
const button3=document.getElementById("button3")
let color=["red","green","pink","blue","white","hotpink","gray"]
button1.addEventListener("click",changecolor)

function changecolor(){
    let ind= Math.floor(Math.random()*10)
    parent.style.backgroundColor=color[ind]
    console.log(ind)
}
button2.addEventListener("click",addChild)

function addChild(){
    let smldiv=document.createElement("div")
    smldiv.setAttribute("id","mydiv")
   
    smldiv.style.border="1px solid blue"
    smldiv.style.width="100px"
    smldiv.style.height="50px"
    smldiv.style.margin="20px"
    smldiv.style.backgroundColor="red"
   
    

    parent.appendChild(smldiv)
}

button3.addEventListener("click",removeChild)

function removeChild(){
   
    parent.removeChild(parent.lastElementChild)

   
}