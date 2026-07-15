/* ==========================================
   WIDE CHOICE SUPERMARKET
   script.js - Part 1
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeApp();

});

function initializeApp(){

    mobileMenu();

    darkMode();

    shoppingCart();

    wishlist();

    searchProducts();

    filterProducts();

    scrollButton();

    newsletter();

}


/* ==========================
   MOBILE MENU
========================== */

function mobileMenu(){

    const menuBtn=document.querySelector(".menu-btn");

    const nav=document.querySelector("nav");

    if(!menuBtn || !nav) return;

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

}


/* ==========================
   DARK MODE
========================== */

function darkMode(){

    const toggle=document.querySelector("#darkMode");

    if(!toggle) return;

    if(localStorage.getItem("theme")==="dark"){

        document.body.classList.add("dark");

        toggle.checked=true;

    }

    toggle.addEventListener("change",()=>{

        if(toggle.checked){

            document.body.classList.add("dark");

            localStorage.setItem("theme","dark");

        }else{

            document.body.classList.remove("dark");

            localStorage.setItem("theme","light");

        }

    });

}


/* ==========================
   SHOPPING CART
========================== */

let cart=JSON.parse(localStorage.getItem("cart")) || [];

function shoppingCart(){

    updateCartCount();

}

function addToCart(id,name,price,image){

    cart.push({

        id:id,

        name:name,

        price:price,

        image:image,

        qty:1

    });

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();

    alert(name+" added to cart.");

}

function updateCartCount(){

    const count=document.querySelector("#cartCount");

    if(count){

        count.innerText=cart.length;

    }

}


/* ==========================
   WISHLIST
========================== */

let wishlistData=JSON.parse(localStorage.getItem("wishlist")) || [];

function wishlist(){

}

function addWishlist(id,name){

    wishlistData.push({

        id:id,

        name:name

    });

    localStorage.setItem("wishlist",JSON.stringify(wishlistData));

    alert(name+" added to wishlist");

}


/* ==========================
   SEARCH
========================== */

function searchProducts(){

    const input=document.querySelector("#search");

    if(!input) return;

    input.addEventListener("keyup",()=>{

        const value=input.value.toLowerCase();

        const products=document.querySelectorAll(".product");

        products.forEach(product=>{

            let text=product.innerText.toLowerCase();

            product.style.display=text.includes(value)?"block":"none";

        });

    });

}


/* ==========================
   CATEGORY FILTER
========================== */

function filterProducts(){

    const buttons=document.querySelectorAll(".filter-btn");

    const cards=document.querySelectorAll(".product");

    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            let category=button.dataset.filter;

            cards.forEach(card=>{

                if(category==="all"){

                    card.style.display="block";

                }else{

                    card.style.display=

                    card.dataset.category===category

                    ?"block"

                    :"none";

                }

            });

        });

    });

}


/* ==========================
   SCROLL BUTTON
========================== */

function scrollButton(){

    const btn=document.querySelector("#topBtn");

    if(!btn) return;

    window.addEventListener("scroll",()=>{

        btn.style.display=

        window.scrollY>300

        ?"block"

        :"none";

    });

    btn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/* ==========================
   NEWSLETTER
========================== */

function newsletter(){

    const form=document.querySelector("#newsletter");

    if(!form) return;

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const email=form.email.value;

        if(email===""){

            alert("Please enter your email.");

            return;

        }

        alert("Thank you for subscribing!");

        form.reset();

    });

}
