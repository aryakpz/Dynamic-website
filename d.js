// // ................................
// const progress = document.getElementById('progress')
// const circles = document.querySelectorAll('.circle')
// const prev = document.getElementById('prev')
// const next = document.getElementById('next')
// let currentActive = 1 // it represents whichever one is active
// next.addEventListener('click', ()=>{
//     currentActive++
//     if(currentActive > circles.length){
//         currentActive = circles.length
//     }                                         
//     update()
// })
//     console.log(currentActive)              
// // to set the values of prev btn:
// prev.addEventListener('click',()=>{
//     currentActive --
//     if(currentActive < 1){
//         currentActive = 1
//     }
//     update()
// })
// // setting up a fn called update()  it will
// function update(){
//     circles.forEach((circle,idx) => {
//         if(idx < currentActive) {
//             circle.classList.add('active')
//             console.log(idx,currentActive)
//           } else {
//             circle.classList.remove('active')
//           }
//         })
//     const actives = document.querySelectorAll('.active')
//     // console.log(actives.length/circles.length * 100)
//     progress.style.width = (actives.length - 1) / (circles.length - 1 ) * 100 + '%'
//     // to set the prev and next btn active and disabled
//     if (currentActive === 1){
//         prev.disabled = true
//     } else if (currentActive === circles.length){
//         next.disabled = true
//     } else {
//         prev.disabled = false
//         next.disabled = false
//     }
// }


function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        // console.log(i)

    
        for (let j = 1; j <= n - i; j++) {
            str += ' ';
            // console.log(j)
        }

        
        for (let k = 1; k <= 2 * i-1 ; k++) {
            str += '*';
            // console.log(k)
        }

        console.log(str);
    }
}

printPyramid(6);













// 





// =======================================================================================================================




// document.addEventListener('DOMContentLoaded', () => {


//     fetch('filter.json')
//         .then(response => response.json())
//         .then(data => {




//         const check=document.querySelector('.filter')
//         const products = document.querySelector('.product')

//         const search = document.getElementById('search')

//         const select=new Set()



//         data.checkbox.forEach(item=>{

//             const box=document.createElement('input')
//             const label=document.createElement('label')
//             label.className='label'
//             box.type='checkbox'
//             box.value=item.val
//             box.id=item.id
//             label.innerHTML=item.val

//             check.appendChild(box)
//             check.appendChild(label)
//             console.log(box.value)



//             box.addEventListener('change',(e)=>{

//                 if (box.checked)
//                     {
//                         select.add(box.id)

//                     }
//                 else
//                     {
//                         select.delete(box.id)
//                         console.log(select)
//                     }

//                 checkboxfilter()         
//             })

//         })


//         const checkboxfilter=()=>{

//             if(select.size===0){
//                 console.log('not')
//                 display(data.content)
//             }
//             else{
//                 console.log('yes')
//                 console.log(select)

//                   const filter=data.content.filter(item=>
//                   select.has(item.id.toString())

//                   )

//             display(filter);

//             }

//         }

//             const display = (product) => {

//                products.innerHTML = ''
//                product.forEach(item => {

//                     const items = document.createElement('div')

//                     items.className = 'productitems'

//                     items.innerHTML = `
//                 <img src="${item.img}"><br>
//                 <p>${item.price}</p>
//                 <br><h4>${item.name}</h4>
//                 <br><h5>${item.brand}</h5>`

//                     products.appendChild(items)
//                 })
//                 // console.log(product)
//             }
//             display(data.content)  
//             search.addEventListener('input',(e)=>{
//                 const value=e.target.value.toLowerCase();

//                 const filter=data.content.filter(items=>
//                     items.name.toLowerCase().includes(value) ||
//                     items.brand.toLowerCase().includes(value)
//                 )
//                 display(filter)

//             })

//             const rangeel=document.querySelector('.range')

//             data.range.forEach(item =>{

//                 const input=document.createElement('input')
//                 input.type='text'
//                 input.placeholder='Enter price'
//                 const label=document.createElement('label')
//                 label.innerText=item.name

//                 rangeel.appendChild(label)
//                 rangeel.appendChild(input)     

//             })

//        })
// })