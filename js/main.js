const next = document.querySelector(".next-container");
const previous = document.querySelector(".previous-container");
const image = document.querySelector(".image-product");
const menu = document.querySelector(".menu-container");
const iconMenu = document.querySelector(".icon-menu");
const body = document.querySelector("body");
const close = document.querySelector(".close");
const cart = document.querySelector(".cart-icon");
const cartContainer = document.querySelector(".cart-container");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const number = document.querySelector(".number");
const cartTotal = document.querySelector(".cart-total");
const empty = document.querySelector(".empty");
const dollars = document.querySelector(".dollars");
const add = document.querySelector(".btn-add");
const cartNumber = document.querySelector(".cart-number");
const checkout = document.querySelector(".btn-checkout");
const imageClick = document.querySelector(".click-image");
const bigImage = document.querySelector(".big");
const lImages = document.querySelectorAll(".l-image");

let imageArrays = ["images/image-product-1.jpg",
                   "images/image-product-2.jpg",  
                   "images/image-product-3.jpg",  
                   "images/image-product-4.jpg"];  

next.addEventListener("click", () => { 
    for (let i = 0; i< imageArrays.length; ++i){
        url = image.src.substring(image.src.length - imageArrays[i].length);
        if (imageArrays[i] === url){
            if (i == (imageArrays.length - 1)){
                image.src = imageArrays[0];
                break;
            }
            else{
                image.src = imageArrays[i + 1];
                break;
            }
        }
    }
});

previous.addEventListener("click", () => { 
    for (let i = 0; i< imageArrays.length; ++i){
        url = image.src.substring(image.src.length - imageArrays[i].length);
        if (imageArrays[i] === url){
            if (i == 0){
                image.src = imageArrays[imageArrays.length - 1];
                break;
            }
            else{
                image.src = imageArrays[i - 1];
                break;
            }
        }
    }
});

iconMenu.addEventListener("click", () => { 
    menu.classList.toggle('show-menu');
    body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7))';
});

close.addEventListener("click", () => {  
    menu.classList.toggle('show-menu');
    body.style.background = 'linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))';
    body.style.backgroundColor = "white";
});

cart.addEventListener("click", () => { 
    if (cartNumber.textContent > 0)
    {
        cartTotal.style.display = 'block';
        empty.style.display = 'none';
        let total = cartNumber.textContent * 125;
        let dollar = "$";
        dollars.textContent = dollar.concat(total.toString());
    }
    else{
        cartTotal.style.display = 'none';
        empty.style.display = 'block';
    }
    if (cartContainer.style.display == 'none'){
        cartContainer.style.display = 'block';
    }
    else{
        cartContainer.style.display = 'none';
    }        
});

minus.addEventListener("click", () => {  
    if (number.textContent !== "0"){
        number.textContent -= 1;
    }
});

plus.addEventListener("click", () => {  
    console.log(number.value)
    number.textContent = parseInt(number.textContent) + 1;
});

add.addEventListener("click", () => {  
    cartNumber.textContent = parseInt(cartNumber.textContent) + parseInt(number.textContent);
    if (cartNumber.textContent > 0)
    {
        cartNumber.style.display = 'block';
    }
    number.textContent = 0;
});

checkout.addEventListener("click", () => {  
    cartNumber.style.display = 'none';
    cartNumber.textContent = 0;
});

let lastImage = 0;
let actualImage = 0;

lImages.forEach(function(item){
    item.addEventListener("click", function(e) {
        if (item.src.includes("1-thumbnail"))
        {
            image.src = "images/image-product-1.jpg";
            item.classList.add("border");   
            actualImage = 0;     
        }
        else if (item.src.includes("2-thumbnail"))
        {
            image.src = "images/image-product-2.jpg";
            item.classList.add("border"); 
            actualImage = 1;  
        }
        else if (item.src.includes("3-thumbnail"))
        {
            image.src = "images/image-product-3.jpg";
            item.classList.add("border");
            actualImage = 2;   
        }
        else{
            image.src = "images/image-product-4.jpg";
            item.classList.add("border"); 
            actualImage = 3;  
        }

        if (lastImage != actualImage)
        {
            lImages[lastImage].classList.remove("border");
            lastImage = actualImage;
        }        
    });
});

imageClick.addEventListener("click", () => { 
        const nodeList = lImages.childNodes;
        let number = lImages.length;
        console.log(number);
        for (let i = 0; i < nodeList; ++i){
            lImages[i].classList.toggle(".disable-hover");
        }        
        bigImage.style.display = 'block';
        body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7))';
});