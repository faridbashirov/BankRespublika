const ferdiButton=document.getElementById("ferdibutton")
const biznesButton=document.getElementById("biznesbutton")
const biznesService=document.getElementById('bizneservice')
const ferdiService=document.getElementById('ferdiservice')
const modalButton=document.getElementById('searchmodal')
const modalMenu=document.getElementById('modal')
const modalClose=document.getElementById('modalclose')



modalClose.addEventListener('click', ()=>{
    modalMenu.setAttribute('style','display:none')
    document.body.classList.remove("stop-scrolling");
    
})

modalButton.addEventListener('click', ()=>{
    modalMenu.setAttribute('style','display:block')
    document.body.classList.add("stop-scrolling");
  


    
})

ferdiButton.addEventListener("click",()=>{
    ferdiService.setAttribute("style","display:flex ;")
    biznesService.setAttribute("style","display:none ;")
    ferdiButton.setAttribute("style","border-bottom:2px solid #3939ff ")
    ferdiButton.style.color='#3939ff'
    biznesButton.setAttribute("style","border-bottom:0 ")

})

biznesButton.addEventListener("click",()=>{
    ferdiService.setAttribute("style","display:none ;")
    biznesService.setAttribute("style","display:flex ;")
    biznesButton.setAttribute("style","border-bottom:2px solid #3939ff")
    biznesButton.style.color='#3939ff'
    ferdiButton.setAttribute("style","border-bottom:0")
})
