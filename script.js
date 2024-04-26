let container = document.querySelector(".container");
let qrInput = document.querySelector("#text")
let generatebtn= document.querySelector("#generate")
let img = document.querySelector("#qr-code")

// let preinput

// generatebtn.onclick = function(){
//     let input =input.value.trim()
// if(!input || input===preinput){
//      return
// }
// else
// preinput= input;
// generatebtn.innerText = Generating QR Code....
// imag.src = https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ertyui=${input};
// img onload = function(){
//     container.classList.add("active")
//     generatebtn,innerText = "Generate QR Code"
// }
// }
function btnClick(){
   let qrValue = qrInput.value.trim();
   img.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ertyui=${qrValue}`;
   img.style.display="block"
   container.style.height="auto"

  
}