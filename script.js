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



            // ==============================================  left sec  ===============================================//


            const list = []
            const select = []
            const arr = []

            data.left.forEach(item => {
                const top = document.querySelector('.left-filter');
                top.innerHTML = item.filter;

                //    catagory
                const category = document.querySelector('.left-category');

                category.innerHTML = `<p class="pdata">${item.category}</p>
                                     <span class="spandata"><img src="${item.image}">${item.access}</span>
                                     <p class="mobdata">${item.mobile}</p>`;

                // price
                const price = document.querySelector('.left-price');


                price.innerHTML = item.price;

                const bar = document.createElement('div')
                // rangebar

                bar.className = 'rangebar'
                price.appendChild(bar)
                const limit = document.createElement('div');
                limit.className = 'range'
                limit.innerHTML = `<div class="mainrange">
                                    <div class="lsub">
                                         <div class="lround"></div>

                                    </div>
                                    <div class="midd">
                                    <div class="submidd"></div>
                                    </div>

                                    <div class="rsub">
                                       <div class="rround"></div>

                                    </div>
                                 </div>`

                price.appendChild(limit);



                // ====== minmax


                const minmax = document.querySelector('.minmax')
                const min = document.querySelector('.min')
                const select1 = document.createElement('select')
                item.min.forEach(minvalues => {
                    const values = document.createElement('option')
                    values.innerHTML = minvalues
                    values.className = 'minvalues'
                    values.value = minvalues

                    select1.appendChild(values)
                    min.appendChild(select1)
                })

                minmax.appendChild(min)
                const to = document.createElement('div')
                to.innerHTML = 'to'
                to.className = 'to'

                minmax.appendChild(to)

                const max = document.querySelector('.max')

                const select2 = document.createElement('select')
                item.max.forEach(minvalues => {
                    const values = document.createElement('option')
                    values.innerHTML = minvalues
                    values.className = 'minvalues'
                    values.value = minvalues


                    select2.appendChild(values)
                    max.appendChild(select2)
                })

                minmax.appendChild(max)

                price.appendChild(minmax)


                //  brand
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


                //   brandevent

                bhead.addEventListener('click', () => {

                    bsearch.style.display = bsearch.style.display === 'none' ? 'flex' : 'none'
                    bmaincheck.style.display = bmaincheck.style.display === 'none' ? 'block' : 'none'

                    imgel.style.transform = imgel.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';

                })


                const bmaincheck = document.createElement('div');
                bmaincheck.className = 'bmaincheck';

                //bramd check filter

                function brandfilter(names) {
                    bmaincheck.innerHTML = '';
                    names.forEach(name => {
                        const bcheck = document.createElement('div');
                        bcheck.className = 'bcheck';
                        const check = document.createElement('input');
                        check.type = 'checkbox';
                        check.value = name
                        bcheck.appendChild(check);
                        const label = document.createElement('label');
                        label.innerHTML = name;
                        bcheck.appendChild(label);

                        bmaincheck.appendChild(bcheck);


    
                        // ============ Checkbox filter ==============// 


                        check.addEventListener('change', (e) => {
                            if (check.checked) {
                                list.push(check.value.toLowerCase())
                                console.log(list)
                            } else {
                                list.pop()
                                console.log(list)
                            }

                            checkbox()

                        })


                    });
                      brand.appendChild(bmaincheck)

                    const p = document.createElement('p')
                    p.className = 'more'
                    p.innerHTML = item.more
                    bmaincheck.appendChild(p)

                }
                brandfilter(item.brandnames);

                //asure filter

                const assure = document.querySelector('.assured')
                assure.innerHTML = ` <div><input type="checkbox" class="asurecheck" value="asure"><img src="${item.assure}"></div> 
                <div class="ques"><span>?</span  `

                const asurecheck = document.querySelector('.asurecheck')
                const search = []
                asurecheck.addEventListener('change', (e) => {

                    if (asurecheck.checked) {
                        search.push(asurecheck.value)  
        
                    } 
                    else {
                        search.pop()
                        console.log("no")
                    }
                    asurefunction()
                })


                // function asurefunction() {
                //    
                //         console.log("noo")
                //     } else {
                //         console.log('te')
                //     }
                // }

                function asurefunction()  {

                    if (select.length == 0) {
    
                        display(data.phonesec)  
                        console.log(search)   
                    } else {
                        console.log(search)  
                        const filter = data.phonesec.filter(item =>
                            select.includes(item.asure))
                          
    
                        display(filter);
                    }
    
    
                }



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

            })

               
            const imgel = document.querySelector('.bhead img')

            function checkbox() {

                if (list.length == 0) {

                    display(data.phonesec)     
                } else {
           
                    const filter = data.phonesec.filter(item =>
                        list.includes(item.id.toLowerCase()))

                    display(filter);
                }


            }
            //  ========= rating  =======



            const mainrate = document.querySelector('.section')

            data.section.forEach(item => {
                const sectiondiv = document.createElement('div');
                sectiondiv.className = item.id;
                sectiondiv.id = item.common;

                const rating = document.createElement('div');
                rating.className = 'bhead';

                rating.innerHTML = `<span>${item.name}</span> <img src="assets/icons/angle-up-solid.svg" class="image">`;
                sectiondiv.appendChild(rating);


                const bmainrate = document.createElement('div');
                bmainrate.className = 'bmainrate';

                sectiondiv.appendChild(bmainrate);

                mainrate.appendChild(sectiondiv);

                // dropdown event  ====
                rating.addEventListener('click', () => {
                    const image = rating.querySelector('.image');

                    image.style.transform = image.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';

                    if (bmainrate.style.display === 'none') {
                        bmainrate.style.display = 'block';
                        console.log(bmainrate.style.display);
                    } else {
                        bmainrate.style.display = 'none';
                        console.log(bmainrate.style.display);
                    }
                });



                bmainrate.id = item.subid
                item.checkdatas.forEach(name => {
                    const bcheck = document.createElement('div');
                    bcheck.className = 'bcheck';

                    const check = document.createElement('input');
                    check.type = 'checkbox';
                    check.value = name

                    bcheck.appendChild(check);
                    const label = document.createElement('label');
                    label.innerHTML = name;

                    bcheck.appendChild(label);

                    check.addEventListener('change', (e) => {
                        if (check.checked) {
                            select.push(check.value)
                             arr.push(bmainrate.id)
                            // console.log(arr)
                        } else {
                            select.pop()
                            arr.pop()

                        }   
                        filter()
                    })

                      
                    bmainrate.appendChild(bcheck);
                    sectiondiv.appendChild(bmainrate)
              
                })
                
                mainrate.appendChild(sectiondiv)

            });



            // 

            // function ramfilter(){
            //     console.log("hjhdjh")
            // }


            function filter() {
                if (select.size === 0) {
                    display(data.phonesec);
                    console.log(select)
                    // console.log("no")
                } else {
                    // console.log(select)
                    // if(arr =='ramcheck')
                    //     {
                    //         // console.log("bhbh")
                    //         ramfilter()
                    //     }



                    // const filter= data.phonesec.speciality.filter(item =>{
                    //     item.id.includes()
                    // })
                    display(data.phonesec);
                    // const filter= data.phonesec.filter(item => {
                    // return Array.from(select).some(value => item.name.startsWith(value));
                    // select.has(item.data)

                    // });

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
                list.innerHTML = item.name;
                list.id = item.id

                links.appendChild(list);

                list.addEventListener('click', (e) => {

                    list.style.color = list.style.color === 'blue' ? 'black' : 'blue'
                    list.style.fontFamily = list.style.fontFamily === 'semibold' ? 'regular' : 'semibold'
                    list.style.borderBottom = list.style.borderBottom === '2px solid blue' ? '2px transparent' : '2px solid blue'

                    if (list.id === 'low') {
                        lowtohigh();
                    } else if (list.id === 'high') {
                        hightolow();
                    }

                });
            })

            function lowtohigh() {

                const pricesort = [...data.phonesec]
                    .sort((a, b) => parseFloat(a.price) > parseFloat(b.price));
                display(pricesort);
            }


            // Function to sort from high to low


            function hightolow() {

                const pricesort = [...data.phonesec]
                    .sort((a, b) => parseFloat(b.price) > parseFloat(a.price));

                display(pricesort);
            }


            // ===============================  phone sec   =============================================


            const mainsec = document.querySelector('.mainphones');



            function display(products) {

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



                    // filter: invert(0.4);

                    const heart = document.createElement('div')
                    heart.className = 'heart'

                    const subhrt = document.createElement('div')
                    subhrt.classList = 'subhrt'

                    subhrt.innerHTML = `<img src="${item.heart}" class="hrtimg">`


                    heart.appendChild(subhrt)
                    phone.appendChild(heart)


                    subhrt.addEventListener('click', () => {
                        console.log('ddd')

                        const himg = subhrt.querySelector('.hrtimg')
                        himg.style.filter = himg.style.filter === 'invert(0)' ? 'invert(0.5)' : 'invert(0)';
                    })





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
                        liel.innerHTML = speciality.data;
                        liel.id = speciality.id
                        ulel.appendChild(liel);
                    });
                    leftdata.appendChild(ulel);

                    datasec.appendChild(leftdata);
                    mainph.appendChild(datasec);

                    const right = document.createElement('div');
                    right.className = 'right';
                    right.innerHTML = `<span class="price"> ₹${item.price}</span><img src="${item.img}" class="${item.asure}">`;
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
 

            const page=document.querySelector('.next span')
            page.innerHTML=data.next.page

           
            const pagecount=document.querySelector('.next .pages')

            data.next.number.forEach(list=>{
                const count=document.createElement('div')
                count.className='count'

                count.innerHTML=`<a href="${list.url}">${list.value}</a>`
                pagecount.appendChild(count)
            }

            )
             

            
           const looks=document.querySelector('.sublook')
           const find=document.createElement('div')
           find.className='find'
           find.innerHTML=data.next.looking
           looks.appendChild(find)



           const yes=document.createElement('button')
           yes.className='yesbtn'
           yes.innerHTML=data.next.yes


           looks.appendChild(yes)
    
           const no=document.createElement('button')
           no.className='nobtn'
           no.innerHTML=data.next.no   
           looks.appendChild(no)
    

    
           
           








            


            const footer1 = document.querySelector('.footer1')
            data.footer.foot1.forEach(item => {
                const sec = document.createElement('div')
                sec.className = "footsec"

                const head = document.createElement('div')
                head.className = "foothead"
                head.innerHTML = item.name
                sec.appendChild(head)

                item.loop.forEach(foot => {
                    const list = document.createElement('p')
                    list.innerHTML = foot
                    sec.appendChild(list)
                    // console.log(list)
                })
                footer1.appendChild(sec)

            })




            const bottom = document.querySelector('.bottom')
            data.footer.bottom.forEach(item => {

                const botm = document.createElement('div')
                botm.innerHTML = `${item}`
                bottom.appendChild(botm)


            })






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