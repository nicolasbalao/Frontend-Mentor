document.write(`<div class="logo">
<img src="../assets/shared/logo.svg" alt="logo" />
</div>
<div class="menu-hamburger-group">
<div class="hamburger">
  <img src="../assets/shared/icon-hamburger.svg" alt="hamburger" />
</div>
<nav class="menu hidden">
  <img
    class="close-menu"
    src="../assets/shared/icon-close.svg"
    alt="close slide menu"
  />

  <ul>
    <li class="Home">
      <a href="../index.html"> <span>00</span> Home</a>
    </li>
    <li class="Destination">
      <a href="./destination.html"><span>01</span> Destination</a>
    </li>
    <li class="Crew">
      <a href="./crew.html"><span>02</span> Crew</a>
    </li>
    <li class="Technology">
      <a href="./technology.html"><span>03</span> Technology</a>
    </li>
  </ul>
</nav>
</div>
`);

//togle menu smartphone

const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", () => {
  menu.classList.remove("hidden");
});
closeMenu.addEventListener("click", () => {
  menu.classList.add("hidden");
});
