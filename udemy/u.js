// const panelel=document.querySelectorAll('.panel')


// panelel.forEach((panel)=>{
//     panel.addEventListener('click',()=>{
//         console.log("pifj")
//         remove()
//         panel.classList.add('active')
//     })
// })



// function remove(){
//     panelel.forEach(panel=>{
//      panel.classList.remove('active')
//     })
// }  






const btnel=document.querySelector('.btn')
const search=document.querySelector('.search')
const input=document.querySelector('.input')


btnel.addEventListener('click',()=>{
    search.classList.toggle('active')
    input.focuc()
})