const ferdiClient=document.getElementById("ferdiclient")
const biznesClient=document.getElementById("biznesclient")
const ferdiCarts = document.querySelectorAll('.ferdi');
const biznesCarts = document.querySelectorAll('.biznes');





ferdiClient.addEventListener("click",()=>{
    ferdiCarts.forEach(fc => {
        fc.style.display = 'block';
      
      });
    biznesCarts.forEach(bc => {
        bc.style.display = 'none';
      
    });
    ferdiClient.setAttribute("style","border-bottom:2px solid #3939ff ")
    ferdiClient.style.color='#3939ff'
    biznesClient.setAttribute("style","border-bottom:0 ")

})

biznesClient.addEventListener("click",()=>{
    ferdiCarts.forEach(fc => {
        fc.style.display = 'none';
      
      });
    biznesCarts.forEach(bc => {
        bc.style.display = 'block';
      
    });
    biznesClient.setAttribute("style","border-bottom:2px solid #3939ff")
    biznesClient.style.color='#3939ff'
    ferdiClient.setAttribute("style","border-bottom:0")
})
