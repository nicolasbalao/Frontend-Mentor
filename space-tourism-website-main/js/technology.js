const imageTech = document.querySelector(".content__imageTech img");
const nameTech = document.querySelector(".content__description_nameTech");
const descriptionTech = document.querySelector(".content__description_text p");

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
      });
    });

  document
    .querySelector(".content__nav_circle--active")
    .classList.remove("content__nav_circle--active");
  document.getElementById(_id).classList.add("content__nav_circle--active");
}
