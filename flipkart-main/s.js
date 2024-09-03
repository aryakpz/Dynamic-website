
// let productsApi = "products.json";

// document.addEventListener("DOMContentLoaded", function() {
//     const searchBar = document.getElementById("searchBar");
//     const priceRange = document.getElementById("priceRange");
//     const priceValue = document.getElementById("priceValue");
//     const productsDiv = document.getElementById("products");
 

//     let products;     

//     // Load products from JSON
//     fetch(productsApi)
//         .then(response => response.json())
//         .then(data => {
//             products = data;
//             loadProducts();
//         })
//         .catch(error => console.error('Error loading products:', error));

//     // Update price value display
//     priceValue.textContent = " ₹" + priceRange.value;
//     priceRange.addEventListener("input", function() {
//         priceValue.textContent = " ₹" + this.value;
//         displayProducts(filterProductsByPrice(this.value));
//     });
                
//     // Function to load products
//     function loadProducts() {
//         displayProducts(products);
//     }

//     // Function to display products
//     function displayProducts(products) {
//         productsDiv.innerHTML = "";
//         const searchText = searchBar.value.toLowerCase().trim(); // Get search text
//         const selectedCheckboxes = document.querySelectorAll('.checkbox input[type="checkbox"]:checked');

//         products.forEach(product => {
//             // Check if product matches search text and selected checkboxes
//             if (product.name.toLowerCase().includes(searchText) && isSelected(product, selectedCheckboxes)) {
//                 const productDiv = document.createElement("div");
//                 productDiv.classList.add("product");
//                 productDiv.innerHTML = `
//                     <div class="product-item">
//                         <div class="product-image">
//                             <img src="${product.image}" alt="${product.name}">
//                         </div>
//                         <div class="product-description">
//                             <h2>${product.name}</h2>
//                            <div> <button> ${product.star}</button> <h4>Rating &Reviews</h4></div>
//                             <p>${product.details}</p>
                      
                            
//                         </div>
//                         <div class="product-price">
//                             <h1> ₹${product.price}</h1>
//                             <p><img src="${product.assured}" >
//                             <h3> <s>₹${product.strick}</s> ${product.specific}</h3>
//                             <h5>${product.offer}</h5>   
//                             <h4>Save extra combo offers</h4>
//                             <h5>Upto ₹3500 off on exchange</h5>
                            
//                         </div>
//                     </div>
//                 `;
//                 productsDiv.appendChild(productDiv);
//             }
//         });
//     }

//     // Function to filter products by price
//     function filterProductsByPrice(price) {
//         return products.filter(product => product.price <= price);
//     }

//     // Function to check if a product is selected based on checkboxes
//     function isSelected(product, checkboxes) {
//         if (checkboxes.length === 0) return true;
//         for (let i = 0; i < checkboxes.length; i++) {
//             if (product.name.toLowerCase().includes(checkboxes[i].value.toLowerCase())) {
//                 return true;
//             }
//         }
//         return false;
//     }


//     // Event listener for search bar
//     searchBar.addEventListener("input", function() {
//         displayProducts(filterProductsByPrice(priceRange.value));
//     });

//     // Event listener for checkbox changes
//     const checkboxes = document.querySelectorAll('.checkbox input[type="checkbox"]');
//     checkboxes.forEach(checkbox => {
//         checkbox.addEventListener("change", function() {
//             displayProducts(filterProductsByPrice(priceRange.value));
//         });
//     });

    
//  });



// Select DOM elements
const flipIcon = document.querySelector('.flip-icon');
const aTag = document.querySelector('.flip-content');
const iconPlus = document.querySelector('.icon-txt');
const plusIcon = document.querySelector('.plus-icon');
const searchBtn = document.querySelector('.search-btn');
const loginBtn = document.querySelector('.login-btn');
const sellerLink = document.querySelector('.seller-link');
const moreTxt = document.querySelector('.more');
const cartTxt = document.querySelector('.cart');
const btArrow = document.querySelector('.arrow-img');
const cartImg = document.querySelector('.cart-img');
const secondNavItems = document.querySelector('.second-nav-sec');
const headText = document.querySelector('.head-text-sec');
const clearText = document.querySelector('.clear-text');
const categoryHead = document.querySelector('.category-head');
const brandSection = document.querySelector('.brand-sections');
const mobileCards = document.querySelector('.mobile-cards');
const selectedFilters = document.querySelector('.selected-filters');
const clearAllFilter = document.querySelector('.clear-text');
const minPrice = document.querySelector('.select-min');
const maxPrice = document.querySelector('.select-max');
const selectPrice = document.querySelectorAll('.select-price');
const brands = document.querySelectorAll('.brand-c');
const showText = document.querySelector('.showing-result');
const pagination = document.querySelector('.pagination');
const numPages = document.querySelector('.page-num-sec');
const discountCheckbox = document.querySelectorAll('.discount-checkbox');
const minOptions = document.querySelectorAll('.min-options');
const maxOptions = document.querySelectorAll('.max-options');

let pages;
const noProducts = document.querySelector('.no-product-msg');

let products;
let errorMsg;

let minValue = 0;
let maxValue = 9999999999;

let brandArr = [];
let ratingArr = [];
let ramArr = [];
let priceArr = [];
let newFilterArr = [];

let discount = 0;
let discountArr = [];
let ramSize = [];
let rating = 0;

const RES_PER_PAGE = 10;
let curPage = 1;
let minPage;
let maxPage;
let totalLength;
let totalPages;

// Function to add single element with content to the DOM
function addElement(parent, type, content, classes = []) {
  const element = document.createElement(type);
  if (content) element.textContent = content;
  if (classes.length) element.classList.add(...classes);
  parent.appendChild(element);
  return element;
}

// Function to add items to the DOM
function addItems(data) {
  const { nav } = data;

  flipIcon.insertAdjacentHTML(
    'afterbegin',
    `<img src="${nav.icon}" alt="" class="icon-img"/>`
  );
  aTag.textContent = nav.a;

  iconPlus.innerHTML = nav.sp;
  aTag.appendChild(iconPlus);
  plusIcon.src = nav.plus_icon;
  aTag.appendChild(plusIcon);

  addElement(searchBtn, 'img').src = nav.search_svg;
  loginBtn.textContent = nav.login;
  sellerLink.textContent = nav.seller;

  addElement(moreTxt, 'span', nav.more);
  addElement(moreTxt, 'img', null, ['bt-arrow']).src = nav.bt_arrow;

  addElement(cartTxt, 'span', nav.cart);
  cartImg.src = nav.cart_icon;

  addNavSections(data.sec_nav);
  addSidebarSections(data.sidebar);
}     

function addNavSections(sec_nav) {
  sec_nav.sections.forEach((el) => {
    const sectionMarkup = `
      <span class="second-nav-txt">${el}
        <img src="${sec_nav.section_icon}" alt="" class="second-nav-arrow" />
      </span>`;
    secondNavItems.insertAdjacentHTML('beforeend', sectionMarkup);
  });

  sec_nav.sections1.forEach((el) => {
    const linkMarkup = `<a href="" class="second-nav-link">${el}</a>`;
    secondNavItems.insertAdjacentHTML('beforeend', linkMarkup);
  });
}

function addSidebarSections(sidebar) {
  addElement(headText, 'span', sidebar.head);
  addElement(clearText, 'span', sidebar.clear);
  addElement(categoryHead, 'span', sidebar.category);
}

function addMobileCards(data) {
  totalLength = data.length;
  showResults();
  curPage = 1;

  mobileCards.innerHTML = '';
  data.forEach((dt, idx) => {
    if (idx >= minPage - 1 && idx <= maxPage - 1) {
      const cardMarkup = generateCardMarkup(dt);
      mobileCards.insertAdjacentHTML('beforeend', cardMarkup);
    }
  });

  // adding hover effect on all cards
  const cards = document.querySelectorAll('.mobile-cards-flex');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mouseleave', onMouseLeave);
  });

  setupHeartFunctionality();
}

// for handling mouse events
function onMouseEnter(e) {
  const title = e.target.querySelector('.phone-names');
  title.style.color = '#2874f0';
}  

function onMouseLeave(e) {
  const title = e.target.querySelector('.phone-names');
  title.style.color = '#000';
}

function addBrands(data) {
  const brands = new Set(data.map((dt) => dt.brand));
  brands.forEach((brand) => {
    const brandMarkup = `
      <div class="brand-sec">
        <div class="brand">
          <label for="" class="brand-label">
            <input type="checkbox" class="brand-checkbox brand-c" value="${brand}">
            <div class="brand-name">${brand}</div>
          </label>
        </div>
      </div>`;
    brandSection.insertAdjacentHTML('beforeend', brandMarkup);
  });
}
       
function selectedItems(item, id = '') {
  const arr = selectedFilters.querySelectorAll('.selected-items');
  if (id === 'price') {
    arr.forEach((a) => {
      if (a.id === 'price') {
        a.innerHTML = '';
        a.classList.add('hidden');
      }
    });
  }  

  const selectedItemMarkup = `
    <div id="${id}" class="selected-items" >
      <div class="selected-item" value="${item}" data-value="${item}">
        <div class="x-mark">✕</div>
        <div class="phone-name">${item}</div>
      </div>
    </div>`;

  selectedFilters.insertAdjacentHTML('beforeend', selectedItemMarkup);

  const selectedItem = selectedFilters.querySelectorAll('.selected-item');

  selectedItem.forEach((selected) => {
    selected.addEventListener('click', removeFilterItem);
  });
}

function setupCheckboxes(e) {
  const item = e.target.value;
   
  clearAllFilter.classList.add('hidden');

  if (e.target.checked) {
    selectedFilters.classList.remove('hidden');

    clearAllFilter.classList.remove('hidden');

    selectedItems(item);

    // Adding data to correspondent arrays for sorting
    if (e.target.classList.contains('brand-c')) {
      if (!brandArr.includes(item)) {
        brandArr.push(item);
      }
    }

    if (e.target.classList.contains('rating-checkbox')) {
      rating = Number(item.slice(0, 1).trim());
      ratingArr.push(rating);

      rating = Math.min(...ratingArr);
    }

    if (e.target.classList.contains('ram-checkbox')) {
      ramSize = Number(item.slice(0, 2).trim());
      checkRam();
    }

    if (e.target.classList.contains('discount-checkbox')) {
      checkDiscount();
    }
  }

  if (!e.target.checked) {
    const selectedItems = selectedFilters.querySelectorAll('.selected-items');
    selectedItems.forEach((selected) => {
      console.log(selected.children[0].dataset.value);
      const dataset = selected.children[0].dataset.value;

      if (item === dataset) {
        selected.classList.add('hidden');
      }
    });

    // removing items from an array to filter
    if (e.target.classList.contains('brand-c')) {
      brandArr = brandArr.filter((data) => data !== item);
    }

    if (e.target.classList.contains('rating-checkbox')) {
      rating = Number(item.slice(0, 1).trim());
      checkRating();
    }

    if (e.target.classList.contains('ram-checkbox')) {
      ramSize = +e.target.value.slice(0, 2).trim();
      removeFromRamArr();
    }

    if (e.target.classList.contains('discount-checkbox')) {
      checkDiscount();
    }
  }
  addAllFilters();
}

function removeFromRamArr() {
  if (ramSize === 8) {
    ramArr = ramArr.filter(function (el) {
      return el < ramSize;
    });
  }
  if (ramSize === 1) {
    ramArr = ramArr.filter(function (el) {
      return el > ramSize;
    });
  } else {
    ramArr = ramArr.filter(function (el) {
      return el !== ramSize;
    });
  }
}    

function checkRating() {
  ratingArr = ratingArr.filter(function (el) {
    return el !== rating;
  });

  rating = Math.min(...ratingArr);

  if (ratingArr.length === 0) rating = 0;
}

function checkDiscount() {
  const discounts = document.querySelectorAll('.discount-checkbox');

  discount = Infinity;

  discounts.forEach((disc) => {
    if (disc.checked) {
      const off = Number(disc.value.slice(0, 2).trim());

      if (off < discount) {
        discount = off;
      }
    }
  });

  if (discount === Infinity) {
    discount = 0;
  }
}

// Add all filtered data to a new array
function addAllFilters() {
  newFilterArr = products;
  newFilterArr = products.filter((pr) => {
    const discountPercentage = Math.ceil(((pr.mrp - pr.price) / pr.mrp) * 100);

    return (
      (brandArr.length === 0 || brandArr.includes(pr.brand)) &&
      pr.rating.average >= rating &&
      (ramArr.length === 0 || ramArr.includes(pr.ram)) &&
      discountPercentage >= discount &&
      (priceArr.length === 0 || priceArr.includes(pr.price))
    );
  });

  if (newFilterArr) noProducts.classList.add('hidden');

  totalLength = newFilterArr.length;

  totalPages = Math.ceil(totalLength / RES_PER_PAGE);
 
  numPages.textContent = '';
  createPage();
  makePagination();

  displayNoProduct();

  sorting(sItem, newFilterArr);
}

function displayNoProduct() {
  noProducts.innerHTML = '';
  if (newFilterArr.length === 0) {
    noProducts.classList.remove('hidden');

    const html = `
      <div class="message-sec">
        <img class="not-found-img" src="${errorMsg.img}" alt="">
          <span>${errorMsg.msg}</span>
      </div>`;

    noProducts.insertAdjacentHTML('beforeend', html);
  } else {
    noProducts.classList.add('hidden');
  }
}

function checkRam() {
  products.forEach((pr) => {
    if (ramSize >= 8 && pr.ram >= ramSize) {
      ramArr.push(pr.ram);
    } else if (ramSize <= 1 && pr.ram <= ramSize) {
      ramArr.push(pr.ram);
    } else if (pr.ram === ramSize) {
      ramArr.push(pr.ram);
    }
  });
}

function checkPrice() {
  selectPrice.forEach((price) => {
    if (price.classList.contains('select-price')) {
      products.forEach((pr) => {
        if (!priceArr.includes(pr.price)) {
          priceArr.push(pr.price);
        }
      });
    }
  });
  minPrice.value = 'Min';
  maxPrice.value = '30000+';
}

function removeFilterItem(e) {
  const selectParent = e.target.parentNode.parentNode;
  selectParent.innerHTML = '';
  selectParent.classList.add('hidden');

  const targetValue = e.target.parentNode.getAttribute('value');

  const checkBoxes = document.querySelectorAll('.brand-checkbox');
  checkBoxes.forEach((check) => {
    if (check.value === targetValue) {
      check.checked = false;

      if (check.classList.contains('brand-c')) {
        brandArr = brandArr.filter((item) => item != targetValue);
      }

      if (check.classList.contains('rating-checkbox')) {
        rating = Number(targetValue.slice(0, 1).trim());
        checkRating();
      }

      if (check.classList.contains('ram-checkbox')) {
        ramSize = +targetValue.slice(0, 2).trim();
        removeFromRamArr();
      }

      if (check.classList.contains('discount-checkbox')) {
        checkDiscount();
      }
    }
  });
  checkPrice();

  const selectedItem = selectedFilters.querySelectorAll('.selected-item');
  if (selectedItem.length === 0) {
    clearAllFilter.classList.add('hidden');
    selectedFilters.classList.add('hidden');
  }
    
  addAllFilters();   
}

// Add min-max price to filter box
function minMaxPriceFilter(e) {
  
  let value;

  if (e.target.id === 'min') {
    minValue = e.target.value === 'Min' ? 0 : Number(e.target.value);

    value = e.target.value + '-' + maxPrice.value;
  } else if (e.target.id === 'max') {
    maxValue = e.target.value === '30000+' ? Infinity : Number(e.target.value);

    value = minPrice.value + '-' + e.target.value;
  }

  minOptions.forEach((min) => {
    console.log(maxValue);
    if (+min.value >= maxValue) {
      min.classList.add('hidden');
    } else {
      min.classList.remove('hidden');
    }
  });    

  maxOptions.forEach((max) => {
    console.log(minValue);
    if (+max.value <= minValue) {
      max.classList.add('hidden');
    } else {
      max.classList.remove('hidden');
    }
  });

  selectedItems(value, 'price');

  if (selectedFilters.classList.contains('hidden')) {
    selectedFilters.classList.remove('hidden');
  }

  if (clearAllFilter.classList.contains('hidden')) {
    clearAllFilter.classList.remove('hidden');
  }

  priceArr = [];
  products.forEach((pr) => {
    if (pr.price >= minValue && pr.price <= maxValue) {
      if (!priceArr.includes(pr.price)) {
        priceArr.push(pr.price);
      }
    }
  });
  addAllFilters();
}

function clearAll() {
  console.log('cleared');
  selectedFilters.innerHTML = '';
  selectedFilters.classList.add('hidden');
  clearAllFilter.classList.add('hidden');

  const checkBoxes = document.querySelectorAll('.brand-checkbox');
  checkBoxes.forEach((check) => {
    check.checked = false;
  });

  minPrice.value = 'Min';
  maxPrice.value = '30000+';

  newFilterArr = [];
  brandArr = [];
  ramArr = [];
  priceArr = [];
  rating = 0;
  discount = 0;

  addAllFilters();
}

// Filters
var sItem = 'Relevance';

const sortingItems = document.querySelectorAll('.sort-option');

sortingItems.forEach((item) => {
  item.addEventListener('click', sortItems);
});

function sortItems(e) {
  const highlight = document.querySelector('.underline');
  highlight.classList.remove('underline');
  e.target.classList.add('underline');
  sItem = e.target.innerText;
  mobileCards.innerHTML = '';

  addAllFilters();
}

function sorting(item, arr) {
  if (item === 'Relevance') {
    arr.sort((a, b) => a.p_no - b.p_no);
  } else if (item === 'Popularity') {
    arr.sort((a, b) => b.rating.average - a.rating.average);
  } else if (item === 'Price -- Low to High') {
    arr.sort((a, b) => a.price - b.price);
  } else if (item === 'Price -- High to Low') {
    arr.sort((a, b) => b.price - a.price);
  } else if (item === 'Newest First') {
    arr.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
  }
  addMobileCards(arr);
}

// Pagination section

function calcPage() {
  maxPage = curPage * RES_PER_PAGE;
  minPage = maxPage - RES_PER_PAGE + 1;
  if (maxPage > totalLength) maxPage = totalLength;

  if (maxPage === 0) minPage = 0;
}

function showResults() {
  calcPage();
  showText.textContent = `Showing ${minPage} – ${maxPage} of ${totalLength} results for "mobile"`;
  if (totalLength > RES_PER_PAGE) {
    pagination.classList.remove('hidden');
  } else {
    pagination.classList.add('hidden');
  }
}

function createPage() {
  for (let i = 1; i <= totalPages; i++) {
    const html = `
      <a href="" class="page-link ${
        i === 1 ? 'page-active' : ''
      }" data-page="${i}">${i}</a>
      `;

    numPages.insertAdjacentHTML('beforeend', html);
  }
}

function makePagination() {
  totalPages = Math.ceil(totalLength / RES_PER_PAGE);

  if (totalPages > 1 && newFilterArr.length === 0) {
    numPages.textContent = '';
    createPage();
  }

  pages = document.querySelectorAll('.page-link');

  pages.forEach((page) => {
    page.addEventListener('click', function (e) {
      e.preventDefault();

      window.scrollTo({ top: 0, behavior: 'smooth' });

      const targetPage = Number(e.target.getAttribute('data-page'));
      curPage = targetPage;

      removeAll();

      if (newFilterArr.length === 0) {
        addMobileCards(products);
      } else {
        addMobileCards(newFilterArr);
      }

      e.target.classList.add('page-active');
    });
  });
}

function removeAll() {
  pages.forEach((page) => {
    page.classList.remove('page-active');
  });
}

function generateCardMarkup(dt) {
  return `
    <div class="mobile-cards-flex">
      <div class="mobile-cards-padding">
        <a class="card">
          <div class="mobile-image-section">
            <div class="image-sec">
              <img src="${dt.image}" alt="" class="phone-image">
            </div>
            <div class="compare-section">
              <div class="compare-sec">
                <span class="compare-checkbox-sec">
                  <label for="" class="compare-label">
                    <input type="checkbox" class="compare-checkbox">
                  </label>
                </span>
                <label for="" class="compare-label-text">
                  <span>Add to Compare</span>
                </label>
              </div>
            </div>
            <div class="heart-section">
              <div class="heart">
                <img src="assets/image/heart.svg" alt="" class="heart-image">
                <img src="assets/image/redheart.svg" alt="" class="red-heart-image hidden">
              </div>
            </div>
          </div>
          <div class="card-contents-section">
            <div class="card-content-section-1">
              <div class="phone-names">${dt.title}</div>
              <div class="rating-review-sec">
                <div class="product-rating">
                  ${dt.rating.average} 
                  <img src="assets/image/star.svg" alt="" class="rating-star">
                </div>
                <span class="rating-text">
                  ${dt.rating.count} Ratings & ${dt.rating.reviewCount} Reviews
                </span>
              </div>
              <div class="specification-sec">
                <ul class="specification-list">
                  ${dt.highlights
                    .slice(0, 5)
                    .map((spec) => `<li class="list">${spec}</li>`)
                    .join('')}
                </ul>
              </div>
            </div>
            <div class="card-content-section-2">
              <div class="price-details">
                <div class="prices">
                  <div class="price">₹${dt.price}</div>
                  <div class="actual-price">₹${dt.mrp}</div>
                  <div class="off-price"><span>${Math.ceil(
                    ((dt.mrp - dt.price) / dt.mrp) * 100
                  )}% off</span></div>
                </div>
                <div class="delivery-sec"><span class="delivery-text">Free delivery</span></div>
              </div>
              <div class="assured-img1-sec">
                <img src="assets/image/assured.png" alt="" class="assured-img1">
              </div>
              <div class="saver-deal-sec"><div class="saver-text">Saver Deal</div></div>
              <div class="saver-deal-sec ex-section">
                <div class="ex-sec">
                  <div class="ex1">Upto</div>
                  <div class="ex2">₹50,150</div>
                  <div class="ex3"> Off on Exchange</div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>`;
}

function setupHeartFunctionality() {
  const hearts = document.querySelectorAll('.heart');

  hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      const whiteHeart = heart.querySelector('.heart-image');
      const redHeart = heart.querySelector('.red-heart-image');
      whiteHeart.classList.toggle('hidden');
      redHeart.classList.toggle('hidden');
    });
  });
}

// Function to fetch JSON data
async function getJSON() {
  try {
    const response = await fetch('data.json');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    addItems(data);
    return data;
  } catch (err) {
    console.error('Error in fetching data:', err);
  }
}

// Function to get flipCart data

async function getFlipData() {
  try {
    const response = await fetch('flipkart.json');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else if (response.ok) {
      const data1 = await response.json();
      const data = data1.products;
      errorMsg = data1.error_msg;

      products = data;
      init();
    }
  } catch (err) {
    console.error('Error in fetching data:', err);
  }
}

function init(data = products) {
  addBrands(data);
  addMobileCards(data);
  const brandCheckboxes = document.querySelectorAll('.brand-checkbox');

  brandCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', setupCheckboxes);
  });

  makePagination();
}

// EventListeners
clearAllFilter.addEventListener('click', clearAll);

selectPrice.forEach((price) => {
  price.addEventListener('change', minMaxPriceFilter);
});

getJSON();
getFlipData();