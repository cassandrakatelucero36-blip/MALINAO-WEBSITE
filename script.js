/*=========================================
Explore Philippines
script.js
=========================================*/

/*================ SEARCH DESTINATIONS ================*/

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let cards=document.querySelectorAll(".destination-card");

cards.forEach(card=>{

let text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

/*================ CATEGORY FILTER ================*/

const filterButtons=document.querySelectorAll(".filter-buttons button");

const destinationCards=document.querySelectorAll(".destination-card");

const galleryImages=document.querySelectorAll(".gallery-grid img");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.dataset.filter;

if(destinationCards.length){

destinationCards.forEach(card=>{

if(filter==="all"||card.dataset.category===filter){

card.style.display="block";

}else{

card.style.display="none";

}

});

}

if(galleryImages.length){

galleryImages.forEach(img=>{

if(filter==="all"||img.dataset.category===filter){

img.style.display="block";

}else{

img.style.display="none";

}

});

}

});

});

/*================ NEWSLETTER ================*/

const newsletter=document.getElementById("newsletterForm");

if(newsletter){

newsletter.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you for subscribing!");

newsletter.reset();

});

}

/*================ CONTACT FORM ================*/

const contact=document.getElementById("contactForm");

if(contact){

contact.addEventListener("submit",function(e){

e.preventDefault();

alert("Your message has been sent successfully!");

contact.reset();

});

}

/*================ BACK TO TOP ================*/

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(topBtn){

if(document.body.scrollTop>300||document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

};

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*================ ACTIVE NAVIGATION ================*/

const currentPage=location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link=>{

if(link.getAttribute("href")===currentPage){

link.classList.add("active");

}

});