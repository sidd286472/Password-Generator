const characters= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!", "@", "#", "$","&", "*", "(", ")", "_", "-", "+", "=",",", "|", ":",".", "?"];

let password= document.getElementById("main-btn")
let button1= document.getElementById("btn1")
let button2=document.getElementById("btn2")
let button3=document.getElementById("btn3")
let button4=document.getElementById("btn4")


mainbtn.addEventListener("click", function(){
    button1.textContent=""
    button2.textContent=""
    button3.textContent=""
    button4.textContent=""
    button1.textContent= randomPassword()
    button2.textContent= randomPassword()
    button3.textContent= randomPassword()
    button4.textContent= randomPassword()
})


let limit= 11

function randomPassword(){
    let newPassword=""
    for(let i =0; i< limit ; i++)
    {let generatepassword= Math.floor(Math.random()*characters.length)
    newPassword+= characters[generatepassword]
}
return newPassword