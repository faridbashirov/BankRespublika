const next=document.getElementById('novbeti')
const prev= document.getElementById('geriye')
const submit= document.getElementById('submit')
const firstStep= document.getElementById('step1')
const secondStep= document.getElementById('step2')
const img=document.querySelectorAll('.img')[0]
const imgTitle=document.querySelectorAll('.imgtitle')



next.addEventListener('click',()=>{
    next.style.display='none'
    prev.style.display='block'
    submit.style.display='block'
    firstStep.style.display='none'
    secondStep.style.display='block'
})

prev.addEventListener('click',()=>{
    prev.style.display='none'
    next.style.display='block'
    submit.style.display='none'
    secondStep.style.display='none'
    firstStep.style.display='block'
})



document.getElementById("kart").addEventListener('change', (event) => {
    imgTitle.forEach(title => {
        if(title.innerText===event.target.value){
            img.innerHTML=`<img src="${title.nextElementSibling.innerText}" width="213px" height="133px" alt=""></img>`


        }
    });
  });