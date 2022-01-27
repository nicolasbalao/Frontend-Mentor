//Display slide menu
const btnOpen = document.getElementById("openMenu");
const btnClose = document.getElementById("closeMenu");

const slideMenu = document.querySelector(".menu");

btnOpen.addEventListener("click", () => {
  slideMenu.classList.remove("hidden");
});

btnClose.addEventListener("click", () => {
  slideMenu.classList.add("hidden");
});

//display cart
const btnCart = document.getElementById("toggleCart");
const cart = document.querySelector(".cart");

btnCart.addEventListener("click", () => {
  cart.classList.toggle("hidden");
});

//mobile lightbox

const srcImages = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];
const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");
const heroImage = document.querySelector(".product-hero");
const thumbsPic = document.querySelectorAll(".pic img");

let countImages = 0;

nextBtn.addEventListener("click", () => {
  countImages++;
  if (countImages >= srcImages.length) {
    countImages = srcImages.length - 1;
    return;
  }

  heroImage.src = srcImages[countImages];
});

previousBtn.addEventListener("click", () => {
  countImages--;
  if (countImages < 0) {
    countImages = 0;
    return;
  }

  heroImage.src = srcImages[countImages];
});

thumbsPic.forEach((pic) => {
  pic.addEventListener("click", () => {
    const picActive = document.querySelector(".pic-active");
    console.log(picActive);

    let src = pic.src.replace("-thumbnail", "");
    heroImage.src = src;
    picActive.classList.remove("pic-active");
    pic.parentElement.classList.add("pic-active");
  });
});

//count product and add product to the cart

const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const counterDiv = document.querySelector(".counter");

const counterProductInCart = document.querySelector(".cart-count");

const divProductInCart = document.querySelector(".product-in-cart");
const addProduct = document.querySelector(".btn");
const msgEmptyCart = document.querySelector(".msg-empty");
const btnCheckout = document.querySelector(".checkout");
const price = 125;
let counter = 1;

btnPlus.addEventListener("click", () => {
  counter++;
  updateCounter();
});

btnMinus.addEventListener("click", () => {
  if (counter - 1 > 0) {
    counter--;
    updateCounter();
  }
});

addProduct.addEventListener("click", () => {
  updateProductInCart();
});

function updateProductInCart() {
  if (counter > 0) {
    const itemToAdd = `
    <div class="item">
              <img
                src="images/image-product-1-thumbnail.jpg"
                alt="thumbnail"
                class="product-img"
              />
              <div class="details">
                <div class="product-name">Autum Limited Edition...</div>
                <div class="price-group">
                  <div class="price">$${price} x</div>
                  <div class="count">${counter}</div>
                  <div class="total-amount">$${parseInt(price) * counter}</div>
                </div>
              </div>
              <img
                src="images/icon-delete.svg"
                alt="icon delete"
                id="btnDelete"
              />
            </div> 
    `;

    counterProductInCart.classList.remove("hidden");
    updateCounterProductInCart();

    msgEmptyCart.classList.add("hidden");
    btnCheckout.classList.remove("hidden");
    divProductInCart.innerHTML = itemToAdd;
  } else {
    counterProductInCart.classList.add("hidden");
    divProductInCart.innerHTML = "";
    msgEmptyCart.classList.remove("hidden");
    btnCheckout.classList.add("hidden");
  }

  const btnDelete = document.getElementById("btnDelete");
  btnDelete.addEventListener("click", () => {
    if (counter != 0) {
      counter--;
      updateProductInCart();
      updateCounterProductInCart();
    }
  });
}

function updateCounter() {
  counterDiv.innerHTML = counter;
}

function updateCounterProductInCart() {
  counterProductInCart.textContent = counter;
}

//Galery
