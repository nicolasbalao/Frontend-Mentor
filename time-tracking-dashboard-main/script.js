

const buttonDaily = document.getElementById("btn-daily");
const buttonWeekly = document.getElementById("btn-weekly");
const buttonMonthly = document.getElementById("btn-monthly");

//Elment to change

const currentHoursWork = document.getElementById("currentHoursWork");
const previousHoursWork = document.getElementById("previousHoursWork");

const currentHoursPlay = document.getElementById("currentHoursPlay");
const previousHoursPlay = document.getElementById("previousHoursPlay");

const currentHoursStudy = document.getElementById("currentHoursStudy");
const previousHoursStudy = document.getElementById("previousHoursStudy");

const currentHoursExercice = document.getElementById("currentHoursExercice");
const previousHoursExercice = document.getElementById("previousHoursExercice");

const currentHoursSocial = document.getElementById("currentHoursSocial");
const previousHoursSocial = document.getElementById("previousHoursSocial");

const currentHoursSelfCare = document.getElementById("currentHoursSelfCare");
const previousHoursSelfCare = document.getElementById("previousHoursSelfCare");


const allDataToUpdate = [
  [currentHoursWork, previousHoursWork], 
  [currentHoursPlay, previousHoursPlay],
  [currentHoursStudy, previousHoursStudy],
  [currentHoursExercice, previousHoursExercice],
  [currentHoursSocial, previousHoursSocial],
  [currentHoursSelfCare, previousHoursSelfCare],
];


init();
//function 


function init(){
  buttonDaily.className = "active";
  updateData("daily","days");
}
  
buttonDaily.addEventListener("click", ()=>{
  buttonMonthly.className = "";
  buttonWeekly.className = "";
  buttonDaily.className = "active";

  updateData("daily", "days");

});

buttonWeekly.addEventListener("click", ()=>{
  buttonDaily.className = "";
  buttonMonthly.className = "";
  buttonWeekly.className = "active";

  updateData("weekly", "week");

});

buttonMonthly.addEventListener("click", () => {
  buttonDaily.className = "";
  buttonWeekly.className = "";
  buttonMonthly.className = "active";

  updateData("monthly", "month");

});

function updateData(_timeFrame, _title){

  fetch("./data.json")
    .then((rep) => rep.json())
    .then((data) => {
      console.log(data[0].timeframes[_timeFrame].current);
      for(let i = 0; i < allDataToUpdate.length; i++){
        allDataToUpdate[i][0].textContent = data[i].timeframes[_timeFrame].current + "hrs";
        allDataToUpdate[i][1].textContent = `Last  ${_title} - ` + data[i].timeframes[_timeFrame].previous  + "hrs";
      }
    })
}




/*

test
function addCardActivity(_title, _current, _previous, _path){

  const cardActivity = document.createElement("div");
  //div top
  const divTop = document.createElement("div");
  const img = document.createElement("img");
  //div bottom
  const divBottom = document.createElement("div");
  const divBottomTop = document.createElement("div");
  const title = document.createElement("p");
  const moreTripleDote = document.createElement("a");
  const tripleDote = document.createElement("i");

  const divBottomBottom = document.createElement("div");
  const currentHours = document.createElement("span");
  const previousHours = document.createElement("p");

  cardActivity.className = "card-activity";

  divTop.className = "top";
  tripleDote.className = "fas fa-ellipsis-h";

  divBottom.className = "bottom";
  divBottomTop.className = "bottom-top"
  divBottomBottom.className = "bottom-bottom";

  //Init html text
  img.src = _path;
  title.innerHTML = _title;
  currentHours.innerHTML = `${_current}hrs`
  previousHours.innerHTML = `Last Week - ${_previous}hrs` 

  //Assemblage

  //top
  divTop.appendChild(img);

  //bottom
  moreTripleDote.appendChild(tripleDote);

  divBottomTop.appendChild(title);
  divBottomTop.appendChild(moreTripleDote);

  divBottomBottom.appendChild(currentHours);
  divBottomBottom.appendChild(previousHours);

  divBottom.appendChild(divBottomTop);
  divBottom.appendChild(divBottomBottom);

  //cardActivity
  cardActivity.appendChild(divTop);
  cardActivity.appendChild(divBottom);

  return cardActivity;

}
*/
