const imageTech = document.querySelector(".content__imageTech img");
const nameTech = document.querySelector(".content__description_nameTech");
const descriptionTech = document.querySelector(".content__description_text p");
const contentDescription = document.querySelector(".content__description");

const navBarDestination = document.querySelector(".Technology");

navBarDestination.classList.add("active");

updateData("Launch vehicle", "0");

function updateData(_name, _id) {
  fetch("../js/data.json")
    .then((rep) => rep.json())
    .then((data) => {
      data["technology"].forEach((obj) => {
        if (obj.name == _name) {
          if (window.innerWidth >= 1440) {
            imageTech.src = obj.images.portrait;
          } else {
            imageTech.src = obj.images.landscape;
          }
          nameTech.innerHTML = obj.name;
          descriptionTech.innerHTML = obj.description;
        }

        animation();
      });
    });

  document
    .querySelector(".content__nav_circle--active")
    .classList.remove("content__nav_circle--active");
  document.getElementById(_id).classList.add("content__nav_circle--active");
}

function animation() {
  imageTech.classList.remove("anime");
  contentDescription.classList.remove("anime");

  void imageTech.offsetWidth;

  imageTech.classList.add("anime");
  contentDescription.classList.add("anime");
}
