//change active navbar

const activeDestination = document.querySelector(".Destination");

activeDestination.classList.add("active");

//Change content for destination

//constant to change with json
const imagePlanet = document.querySelector(".planet");
const namePlanet = document.querySelector(".title-name-planet");
const textDescription = document.querySelector(".text-description p");
const valueDistance = document.querySelector(".distance-group .value");
const valueTime = document.querySelector(".travel-time-group .value");
const groupDescription = document.querySelector(
  ".description-caracteristiques-group"
);

function updateData(_planet) {
  fetch("../js/data.json")
    .then((rep) => rep.json())
    .then((data) => {
      data["destinations"].forEach((obj) => {
        if (obj.name == _planet) {
          imagePlanet.src = obj.images.webp;
          namePlanet.innerHTML = obj.name;
          textDescription.innerHTML = obj.description;
          valueDistance.innerHTML = obj.distance;
          valueTime.innerHTML = obj.travel;
        }
        animation();
      });
    });

  document.querySelector(".navigation .active").classList.remove("active");
  document.querySelector(`.${_planet}`).classList.add("active");
}

function animation() {
  //animation
  imagePlanet.classList.remove("anime--planet");
  groupDescription.classList.remove("anime--planet");

  void imagePlanet.offsetWidth;

  imagePlanet.classList.add("anime--planet");
  groupDescription.classList.add("anime--planet");
}
