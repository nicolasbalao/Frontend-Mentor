

const gridContainer = document.getElementById("grid-container");
const buttonDaily = document.getElementById("btn-daily");
const buttonWeekly = document.getElementById("btn-weekly");
const buttonMonthly = document.getElementById("btn-monthly");




function test(){
  console.log(addCardActivity("work", 34, 12, "assets/icon-work"));
  gridContainer.appendChild(addCardActivity("work", 34, 12, "assets/icon-work.svg"));
}

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
