// const users = [
//     { name: 'Alice', age: 24 },
//     { name: 'Bob', age: 27 },
//     { name: 'Charlie', age: 30 },
//   ];

// function find(arr){
//    let a=[]
//     arr.forEach(item=>{
//         if(item.age >25)
//             {
//                 a.push(item.name)  
//             }
//     })
//     return(a)
// }

// const b=find(users)
// console.log(b)



// function user(arr){
//    return users .filter(arr =>arr.age >25).map(arr => arr.name)

// }

// user(users)


// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']; 

// function find(arr){

//     // arr.forEach(item=>{

//     // })

//     for(let i=0;i<=arr.length;i++){
//         for(let j=i;j<=arr.length;j++)
//         if(arr[i]===arr[j])
//             {
//                console.log(arr[j])
//             }
//     }

// }


// console.log(find(fruits))


// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple',"mango"];

//  function find(arr)
//  {
//     const obj={}

//     arr.forEach(item =>{
//         if(obj[item]){
//             obj[item]++;
//         }
//         else
//         {
//             obj[item]=1
//         }

//     })
//     return obj
//  }

// console.log(find(fruits))


// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];



// function find(a,b){
//     const c=[]
//     a.forEach(item=>{
//         b.forEach(data=>{
//             if(item == data)
//                 {
//                     c.push(item)
//                 }
//         })
//     })
//     return c
// }

// console.log(find(arr1,arr2))


// const people = [
//     { name: 'Alice', age: 24 },
//     { name: 'Bob', age: 24 },
//     { name: 'Charlie', age: 30 },
//   ];


// function groupBy(arr, property) {
//     const grouped = {};

//     arr.forEach(item => {
//       const key = item[property];
//       if (!grouped[key]) {
//         grouped[key] = [];
//       }
//       grouped[key].push(item);
//     });

//     return grouped;
//   }
//   console.log( groupBy(people,'age'))



// const b=[2,4,5,6,2,10,5,10]

// function find(arr){
//     const obj={}

//     const c={}
//     arr.forEach(item=>{
//     if(obj[item])
//         {
//             obj[item]++
//         }
//         else{
//             obj[item]=1
//         }
//     })
//  return c
// }

// console.log(find(b))





// function fib(num){
//     let a=0;
//     let b=1;
//     let c=0

//     while(c <= num)
//         {

//         console.log(c)
//         c=a+b;
//         a=b;
//         b=c;


//         }
// }
// let ar=10
// //fib(ar)

// function fib(num) {
//     let a = 0;
//     let b = 1;
//     let c = 0;
//     let j=0
//     // console.log(c)  
//     while (c <= num) {
//         c = a + b; 
//         a = b;       
//         b = c;  

//         console.log(a)   
//         if(c==num){
//              j=1
//         }

//     }

//     if(j==1)
//         {
//             console.log("yes")
//         }
//         else{
//             console.log("no")
//         }

//     }


// fib(21);








// const a = "heisllo this is aryais"
// const b = "is"

// function find(p,q) {
//     let main = p.length
//     let sub = q.length
//     let c = 0

//     for (let i = 0; i <= main - sub; i++) {
//         let match = true
//         for (let j = 0; j< sub; j++) {
//             if (p[i + j] !== q[j]) {
//                 match = false
//                 break
//             }
//         }
//         if (match) {
//             c++
//         }
//     }
//     return c
// }
// console.log(find(a,b))



const bel=document.querySelector('body')
const btnel=document.createElement('button')
const ulel=document.querySelector('#ul')



btnel.addEventListener('click',()=>{
    console.log('click')
    ulel.style.display = ulel.style.display ==='block'?'none':'block'
})
btnel.innerHTML='click'
bel.appendChild(btnel)