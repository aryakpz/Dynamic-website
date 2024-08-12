    const letters = document.querySelectorAll('.letter'); 
    const textarea =document.getElementById('content'); 
    const clickel = document.querySelector('.click'); 
    const keyel=document.querySelector('.keys')

    const spaceel=document.querySelector('#space')
    const back=document.querySelector("#back")
    
    let index=0
    var ar=[]

    clickel.addEventListener('dblclick',()=>{
        textarea.value+=letters[index].textContent   
        
    })

    clickel.addEventListener('click',()=>{
        letters[index].style.backgroundColor='white'
        
         index=(index + 1) 
         if(index >=letters.length )
            {
                index=0  
            }     
         letters[index].style.backgroundColor='skyblue'

    })               
                                             

// keyel.addEventListener('click',(e)=>{
//     const letter=e.target.textContent

//     if(letter==='Backspace')
//         {
//             backr()       
//         }
//         else{
//     textarea.value+=letter
//         }
   
// })

// spaceel.addEventListener('click',()=>{                                                                                                    
//     const sub=document.createElement('span')
//     sub.innerHTML='&nbsp;'
//     textarea.value+=sub.textContent


// })


// function backr(){
// console.log("fnjnjf")
// }
   
