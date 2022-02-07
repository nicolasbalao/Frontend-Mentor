//ELEMENT HTML

const imagePeople = document.querySelector(".content__imagePeople img");
const role = document.querySelector(".content__description_job");
const namePeople = document.querySelector(".content__description_name");
const bio = document.querySelector(".content__description_text p");
const contentDescription = document.querySelector(".content__description");

const test = document.getElementById("0");
const navBarDestination = document.querySelector(".Crew");

navBarDestination.classList.add("active");

function updateData(_role, _id) {
  console.log("click");
  fetch("../js/data.json")
    .then((rep) => rep.json())
    .then((data) => {
      data["crew"].forEach((obj) => {
        if (obj.role == _role) {
          imagePeople.src = obj.images.webp;
          role.innerHTML = obj.role;
          bio.innerHTML = obj.bio;
          namePeople.innerHTML = obj.name;
        }

        animation();
      });
    });

  document
    .querySelector(".content__nav_dote--active")
    .classList.remove("content__nav_dote--active");
  document.getElementById(_id).classList.add("content__nav_dote--active");
}

function animation() {
  imagePeople.classList.remove("anime");
  contentDescription.classList.remove("anime");

  //DOM REFLOW
  void contentDescription.offsetWidth;

  imagePeople.classList.add("anime");
  contentDescription.classList.add("anime");
}
