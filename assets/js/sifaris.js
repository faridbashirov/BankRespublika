const captcha =document.getElementById("captcha")
const reloadBtn=document.getElementsByClassName("reload-btn")[0]

let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function getCaptcha(){
  for (let i = 0; i < 6; i++) { 
    let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomCharacter}`; 
  }
}
getCaptcha();
reloadBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  removeContent();
  getCaptcha();
});
function removeContent(){
 
 captcha.innerText = "";
 
}
window.onload = function() {
    document.getElementById("checkbox-0").checked = true;
    }
