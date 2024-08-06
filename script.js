

document.addEventListener('DOMContentLoaded', () => {



    fetch('product.json')

        .then(response => response.json())
        .then(data => {

            const navbar = document.querySelector(".subnav");

            data.nav.forEach(item => {
                const logo = document.querySelector('.fliplogo');
                const top = document.createElement('div');
                top.className = 'toplogo';
                top.innerHTML = `<img src="${item.fliplogo}">`;

                const bottom = document.createElement('div');
                bottom.className = 'bottomlogo';
                bottom.innerHTML = `${item.explore} <span id="plus">${item.plus}</span><img src="${item.plogo}" alt="no">`;
                top.appendChild(bottom);
                logo.appendChild(top);

                const button = document.querySelector(".navbutton");
                button.innerHTML = item.login;

                const seller = document.querySelector(".seller");
                seller.textContent = item.seller;

                const more = document.querySelector(".more");
                more.innerHTML = `${item.more} <img src="${item.down}">`;

                const cart = document.querySelector(".cart");
                cart.innerHTML = `<img src="${item.cartimg}"> ${item.cart}`;

                const search = document.querySelector(".search");

                const searchinput = document.createElement('input');
                searchinput.className = 'input';
                searchinput.placeholder = 'Search for products, brands and more';

                search.appendChild(searchinput);
                const img = document.createElement('img');
                img.src = item.search;
                search.appendChild(img);






                const dropdown = document.querySelector('.dropmenu .subnav');
                data.drop.forEach(item => {
                    const list = document.createElement('span');
                    list.innerHTML = `${item.data} <img src="${item.icon}">`;
                    dropdown.appendChild(list);
                });
    





 // =======================Searchbar event filter ==================================================//





                searchinput.addEventListener('input', (e) => {
                    const value = e.target.value.toLowerCase();
                    const filter = data.phonesec.filter(item => 
                        item.name.toLowerCase().includes(value));
                    display(filter);
                });
            });



// ==============================================left sec===============================================//
            const list =new Set()
           
            data.left.forEach(item => {
                const top = document.querySelector('.left-filter');
                top.innerHTML = item.filter;
                

                const category = document.querySelector('.left-category');
                
                category.innerHTML = `<p class="pdata">${item.category}</p>
                                     <span class="spandata"><img src="${item.image}">${item.access}</span>
                                     <p class="mobdata">${item.mobile}</p>`;
                

                const price =document.querySelector('.left-price');
                price.innerHTML = item.price;
                const limit = document.createElement('input');
                limit.type = 'range';
                price.appendChild(limit);
        

           
            const brand = document.querySelector('.left-brand');
            const bhead = document.createElement('div');
            bhead.className = 'bhead';
            bhead.innerHTML = `<span>${item.brand}</span> <img src="assets/icons/angle-up-solid.svg">`;
            brand.appendChild(bhead);

            const bsearch = document.createElement('div');
            bsearch.className = 'bsearch';
            bsearch.innerHTML = `
                <img src="${item.bimg}">
                <input type="text" placeholder="Search Brand" class="inputsearch">`;
            brand.appendChild(bsearch);



            const bdrop=document.querySelector('.bhead')
            bdrop.addEventListener('click',()=>{

                console.log('dd')
                bsearch.style.display = bsearch.style.display ==='flex'?'none':'flex'
                bmaincheck.style.display = bmaincheck.style.display==='block'?'none':'block'
                // img.style.transform= img.style.transform==='rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)';
            
            })
    

            const bmaincheck = document.createElement('div');
            bmaincheck.className = 'bmaincheck';


            function brandfilter(names) {
                bmaincheck.innerHTML = ''; 
                names.forEach(name => {
                    const bcheck = document.createElement('div');
                    bcheck.className = 'bcheck';

                    const check = document.createElement('input');
                    check.type = 'checkbox';
                    check.value=name
                    bcheck.appendChild(check);
                    const label = document.createElement('label');
                    label.innerHTML = name;
                    bcheck.appendChild(label);

                    bmaincheck.appendChild(bcheck);

                // ============ Checkbox filter ==============//


                    check.addEventListener('change',(e)=>{
                        if(check.checked){
                               list.add(check.value.toLowerCase())
                               console.log(list)
                        }
                        else{
                             list.delete(check.value.toLowerCase())
                             console.log(list)
                        }


                        checkbox()

                    })





                });
                brand.appendChild(bmaincheck) 


            }

            brandfilter(item.brandnames);

                 //======================== left search ===================================//

            const inputSearch = bsearch.querySelector('.inputsearch');
            inputSearch.addEventListener('input', (e) => {
                const value = e.target.value.toLowerCase();
                // console.log(value);
                const filter = item.brandnames.filter(name =>
                    name.toLowerCase().includes(value)
                );
                brandfilter(filter);
            });


        //========= rating
            const mainrate=document.querySelector('.rating')

            const rating = document.createElement('div');
            rating.className = 'bhead';
            rating.innerHTML = `<span>${item.brand}</span> <img src="assets/icons/angle-up-solid.svg">`;
            mainrate.appendChild(rating);
         


            item.rates.forEach(name => {
                const bcheck = document.createElement('div');
                bcheck.className = 'bcheck';

                const check = document.createElement('input');
                check.type = 'checkbox';
                check.value=name
                bcheck.appendChild(check);
                const label = document.createElement('label');
                label.innerHTML = name;
                bcheck.appendChild(label);

                mainrate.appendChild(bcheck);
            }
            
            )



            
        });
            


        function checkbox(){

            if(list.size===0){
               console.log('not')
               display(data.phonesec)
            }
            else{
                console.log('yes')
       //    console.log(list)
                                    
                const filter=data.phonesec.filter(item=>
                list.has(item.id.toLowerCase()) )

                 display(filter);
          }
         

        }




     



// ========================================   right sec==============================================

                



                const home = document.querySelector('.homedata');
                data.right.forEach(item => {
                    const list = document.createElement('span');
                    list.innerHTML = `<span id="p">${item.val} </span><img src="${item.icon}">`;
                    home.appendChild(list);

                    
                });

                const content = document.querySelector('.contentdata');
                content.innerHTML = data.content;

                const links = document.querySelector('.links');
                data.link.forEach(item => {
                    const list = document.createElement('span');
                    list.innerHTML = item;
                    links.appendChild(list);
                });



// ===============================  phone sec   =============================================


            const mainsec = document.querySelector('.mainphones');



            function display(products) {
                console.log(products)
                mainsec.innerHTML = '';
                products.forEach(item => {
                    const mainph = document.createElement('div');
                    mainph.className = 'phones';

                    const phone = document.createElement('div');
                    phone.className = 'imagesec';

                    const datasec = document.createElement('div');
                    datasec.className = 'datasec';

                    const leftdata = document.createElement('div');
                    leftdata.className = 'leftpart';

                    const rightdata = document.createElement('div');
                    rightdata.className = 'rightpart';

                    const img = document.createElement('div');
                    img.className = 'phoneimage';
                    img.innerHTML = `<img src="${item.phone}">`;
                    phone.appendChild(img);

                    const tick = document.createElement('div');
                    tick.className = 'add';

                    const check = document.createElement('input');
                    const label = document.createElement('label');
                    check.type = 'checkbox';
                    label.innerHTML = item.compare;
                    check.value = item.compare;

                    tick.appendChild(check);
                    tick.appendChild(label);

                    phone.appendChild(tick);
                    mainph.appendChild(phone);

                    const h1 = document.createElement('h1');
                    h1.innerHTML = item.name;
                    leftdata.appendChild(h1);

                    const rating = document.createElement('div');
                    rating.className = 'rate';
                    rating.innerHTML = `<div class="subrate"><span class="rating">${item.data}</span> <span class="review">${item.review}</span></div>`;
                    leftdata.appendChild(rating);

                    const ulel = document.createElement('ul');
                    item.speciality.forEach(speciality => {
                        const liel = document.createElement('li');
                        liel.innerHTML = speciality;
                        ulel.appendChild(liel);
                    });
                    leftdata.appendChild(ulel);

                    datasec.appendChild(leftdata);
                    mainph.appendChild(datasec);

                    const right = document.createElement('div');
                    right.className = 'right';
                    right.innerHTML = `<span class="price">${item.price}</span><img src="${item.img}">`;
                    rightdata.appendChild(right);

                    const off = document.createElement('div');
                    off.className = 'off';
                    off.innerHTML = `<span class="strike"><strike>${item.strike}</strike></span>
                                     <span class="off">${item.off}</span>`;
                    rightdata.appendChild(off);

                    const free = document.createElement('div');
                    free.innerHTML = `<span class="free">${item.free}</span>`;
                    rightdata.appendChild(free);

                    const save = document.createElement('div');
                    save.className = 'save';
                    save.innerHTML = `<span class="save">${item.save}</span>`;
                    rightdata.appendChild(save);

                    const exchange = document.createElement('div');
                    exchange.innerHTML = `<span class="exchange">${item.exchange}</span>`;
                    rightdata.appendChild(exchange);

                    datasec.appendChild(rightdata);
                    mainph.appendChild(datasec);
                    mainsec.appendChild(mainph);
                });
            }

            display(data.phonesec);
        });
});
















































































































































































































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
