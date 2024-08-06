// function add(a)
// {
//  let l=0
//  for(let i=0;i< a.length;i++){
//     l=l+a[i]
//  }
//  return l
// }

// let a=[1,4,5,1,2,3,20,30,56,44,32,34,5,5,6,66]
// sum=add(a)
// console.log(sum)


// let a=["arya","anjali","maya"]
// let b="maa"

// function check(a,b){
//    a.forEach(item=>{
//       if(item==b)
//          {
//          console.log("yes")
//       }
//       else
//       {
//          console.log("no")
//       }

//    })
// }

// check(a,b)



// let a=5

// function f(a){
//    let s=1
//   for(let i=1;i<=5;i++){
//     s=s*i
//   }
//   return s
// }


// let sum=f(a)
// console.log(sum)


// let a=[1,0,12,23,4,,0,5,2,8,12,9,40,0]
// let odd=[]
// let even=[]


// function check(a){
//    let c=0
  
//    a.forEach(item =>{
//       if(item==0)
//          {
//             c= c+1
//          }
//       else if(item % 2==0)
//          {
//             even.push(item)
           
//          }
//          else 
//          {
//             odd.push(item)
//          }
//    })
//    console.log(odd)
//    console.log(even)
//    console.log("zero :",c)
 
// }
// check(a)

// let a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]


// const prime=a.filter(item=>{
//    if(item<=1){
//       return false;
//    }
//    for(let i=2;i<item;i++)
//       {
//          console.log(item,i)
//          if(item%i ===0 )
//        
//             return false
//       }
//       return true
// })

// console.log(prime)


const body=document.querySelector('body')
const bt=document.createElement('button')
const h1=document.querySelector('h1')

bt.innerHTML='click plz......'
body.appendChild(bt)


let a=["car","jeep","bus","lorry","omni"]

bt.addEventListener('click',()=>{
console.log("cicked")
// body.style.background=body.style.background==='red'?'blue':'ed'
h1.style.display=h1.style.display==='block'?'none':'block'

})



let input=document.createElement('input')
body.appendChild(input)

const p=document.createElement('p')
input.addEventListener('input',(e)=>{

    const value=e.target.value

    const filter=a.filter(item=>
        item.includes(value)
    )

   p.innerHTML=filter
})
body.appendChild(p)




a.forEach(item=>{
    const check=document.createElement('input')
    const label=document.createElement('label')

    const demo= new Set()


    check.type='checkbox'
    label.innerHTML=item
    check.value=item
    body.append(check)
    body.appendChild(label)
    check.addEventListener('change',(e)=>{
    
        // const value=e.target.value
        // console.log(value

        if(check.checked){
            demo.add(check.value)
        }
        else{
            demo.delete(check.value)
        }

      display()
    })



    function display(){
        if(demo.size === 0)
            {
                console.log("no")
            }
            else{
                console.log("yes")

                const value=a.filter(item=>{
                    demo.has(item)

                
                })
                console.log(demo)
            }

    }

})


