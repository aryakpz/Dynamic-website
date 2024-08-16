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

                select1.id = 'min-select'
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
                select2.id = 'max-select'
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




                const maxp = document.getElementById('max-select')

                const minp = document.getElementById('min-select')



                maxp.addEventListener('change', update)
                minp.addEventListener('change', update)



                function update() {

                    const max = maxp.options[maxp.selectedIndex].value
                    console.log(max)

                    const min = minp.options[minp.selectedIndex].value
                    console.log(min)


                    const filter = data.phonesec.filter(item => item.price >= min && item.price <= max);

                    display(filter)

                }







                //==== brands
                const brand = document.querySelector('.left-brand');
                const bhead = document.createElement('div');
                bhead.className = 'bhead';
                bhead.innerHTML = `<span>${item.brand}</span><img src="assets/icons/angle-up-solid.svg">`;
                brand.appendChild(bhead);

                const bsearch = document.createElement('div');
                bsearch.className = 'bsearch';
                bsearch.innerHTML = `
                <img src="${item.bimg}">
                <input type="text" placeholder="Search Brand" class="inputsearch">`;
                brand.appendChild(bsearch);


                // ====  brandevent

                bhead.addEventListener('click', () => {

                    bsearch.style.display = bsearch.style.display === 'none' ? 'flex' : 'none'
                    bmaincheck.style.display = bmaincheck.style.display === 'none' ? 'block' : 'none'

                    imgel.style.transform = imgel.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';

                })


                const bmaincheck = document.createElement('div');
                bmaincheck.className = 'bmaincheck';

                //====   bramd check filter

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
                                // console.log(list)
                            } else {
                                list.pop()
                                // console.log(list)
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
                        // console.log("no")
                    }
                    asurefunction()
                })




                function asurefunction() {

                    if (select.length == 0) {

                        display(data.phonesec)
                        // console.log(search)
                    } else {
                        // console.log(search)
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
                        // console.log(bmainrate.style.display);
                    } else {
                        bmainrate.style.display = 'none';
                        // console.log(bmainrate.style.display);
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
                        if (bmainrate.id == 'ramcheck') {
                            ramfilter(check)
                        }

                    })




                    bmainrate.appendChild(bcheck);
                    sectiondiv.appendChild(bmainrate)

                })

                mainrate.appendChild(sectiondiv)

            });

            function ramfilter(filteredPhones) {


                filteredPhones = filteredPhones.filter(phone =>
                    phone.speciality.some(spec =>
                        spec.id === 'ram' && selectedRam.includes(spec.data)
                    ))
                console.log("dj")
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
            const sort = document.createElement('div')
            sort.innerHTML = data.sort.name
            sort.className = data.sort.id
            links.appendChild(sort)
            const sublink = document.createElement('div');
            sublink.className = 'sublink'

            links.appendChild(sublink);

            data.link.forEach(item => {
                const list = document.createElement('span');
                list.innerHTML = item.name;
                list.id = item.id
                list.className = item.class
                sublink.appendChild(list);


                list.addEventListener('click', () => {
                    removeactive()
                    list.classList.add('active')
                    if (list.id === 'high') {
                        hightolow()
                    }

                    else if (list.id === 'low') {
                        lowtohigh()
                    }


                    else {
                        display(data.phonesec)
                    }
                    // console.log(list.className)

                })



                function removeactive() {
                    const linkers = sublink.querySelectorAll('span');
                    linkers.forEach(li => {
                        li.classList.remove('active')

                    })
                }

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
                        // console.log('ddd')

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


  
            const page = document.querySelector('.pagenumber')
            page.innerHTML = `page 1 of 389`

            const pagecount = document.querySelector('.pages')

            const prev = document.createElement('div')
            prev.innerHTML = data.next.prev.value
            prev.className = data.next.prev.class
            pagecount.appendChild(prev)

            data.next.number.forEach(list => {
                const count = document.createElement('div')
                count.id = 'count'
                count.className = list.class
                count.innerHTML = `<a>${list.value}</a>`
                pagecount.appendChild(count)

                count.addEventListener('click', () => {
                    add(count)


                })
            })

            function add(selected) {

                const page = document.querySelector('.pagenumber')
                // console.log(selected.textContent)
                page.innerHTML = `page ${selected.textContent} of 389`


                removecount()
                selected.classList.add('active')
                console.log(selected.textContent)

                const allvar = pagecount.querySelectorAll('div')
                allvar.forEach(item => {



                    if (allvar[1].className == 'active') {
                        prev.style.display = 'none'

                    }

                    else if (allvar[1].className == '') {
                        prev.style.display = 'flex'
                    }

                })
            }

            function removecount() {
                const numbers = pagecount.querySelectorAll('div')
                numbers.forEach(num => {

                    const t = num.classList.remove('active')

                })
            }




            const next = document.createElement('div')
            next.innerHTML = data.next.last.value
            next.className = data.next.last.class
            pagecount.appendChild(next)



            const pages = pagecount.querySelectorAll('div');

            let currentPage = 1;


            //update the pages

            function updatePages() {

                pages.forEach((p, index) => {
                    if (index === currentPage) {
                        console.log(index)
                        p.classList.add('active');
                        const page = document.querySelector('.pagenumber')
                        // console.log(selected.textContent)
                        page.innerHTML = "page " + index + " of 389"

                    }
                    else {
                        p.classList.remove('active');
                    }


                });

                prev.style.display = currentPage === 1 ? 'none' : 'inline';
                next.style.display = currentPage === pages.length - 2 ? 'none' : 'inline';
            }


            // add next and prev event listerners 

            next.addEventListener('click', () => {
                if (currentPage < pages.length - 2) {
                    currentPage++;
                    updatePages();
                }
            });

            prev.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    updatePages();
                }
            });


            updatePages();



            const looks = document.querySelector('.sublook')
            const find = document.createElement('div')
            find.className = 'find'
            find.innerHTML = data.next.looking
            looks.appendChild(find)



            const yes = document.createElement('button')
            yes.className = 'yesbtn'
            yes.innerHTML = data.next.yes


            looks.appendChild(yes)

            const no = document.createElement('button')
            no.className = 'nobtn'
            no.innerHTML = data.next.no
            looks.appendChild(no)




            const footer1 = document.querySelector('.footer1')
            data.footer.foot1.forEach(item => {
                const sec = document.createElement('div')
                sec.className = "footsec"
                sec.id = item.id


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



            });

        });

})
