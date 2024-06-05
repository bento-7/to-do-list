
let storage = [];

const ui = document.getElementById("uiSec");
const textB = document.getElementById("UItext");
const desc = document.getElementById("UIdesc");
const color = document.getElementById("UIcolor");
const _date = document.getElementById("UIdate");
const addButton = document.getElementById("addButton");
const cancelButton = document.getElementById("cancelButton");
const overdueTasks = document.getElementById("overdue");
// resetCounter();
// console.clear();
listCreator();
function resetCounter(){
  localStorage.clear();
  storage = [];
  console.log(localStorage,storage);
}
function listCreator(){
  let test = (localStorage.length - 1)/ 4;
  for(let i = 0; i < test; i++){
    let index = i + 1
    let listTitle = localStorage.getItem(`item${index}Title`);
    let listDesc = localStorage.getItem(`item${index}Desc`);
    let listDate = localStorage.getItem(`item${index}Date`);
    let listColor = localStorage.getItem(`item${index}Color`);
    storage.push([listTitle,listDesc,listColor,listDate]);
  }
  contentUpdate();
}


function addItem() {

// AI edidted our code to make it functioning
// We spend 5 minutes trying to fix it 
// We googled & asked mr Cannon but just copied the code provided to us by AI
// WE THEN GOT RID OF LIKE OVER HALF OF THE CODE THE AI GAVE US WHICH WAS OURS IN THE FIRST PLACE AND WE YEAH
// we then added in all of the code for bthe input sections

// Adds field for the user to input item
  // ADD IN SPACE FOR DESC
  // we completely deleted every bit of code the AI made
  // like literally not a single line of code that the AI gave us remains 

  ui.setAttribute("data-open", "true");
  color.value = "#f6b73c";
  addButton.style.display = "none";
  cancelButton.style.display = "inherit";

}

function cancel(){
  ui.setAttribute("data-open", "false");
  addButton.style.display = "inherit";
  cancelButton.style.display = "none";
}

function submitTask(){
  console.log(localStorage);
  if(textB.value != "" && _date.value != ""){
    let counter = localStorage.length/4;

    counter++;

    let itemTitle = `item${counter}Title`;
    let itemDesc = `item${counter}Desc`;
    let itemColor = `item${counter}Color`;
    let itemDate = `item${counter}Date`;
    localStorage.setItem(itemTitle,textB.value);
    localStorage.setItem(itemDesc,desc.value);
    localStorage.setItem(itemColor,color.value);
    localStorage.setItem(itemDate,_date.value);
    
    storage.push([textB.value,desc.value,color.value,_date.value]);
    contentUpdate(storage[counter],counter);

    ui.setAttribute("data-open", "false");


  }
}

function dateCompare(){

  let dateCntr = 1;
  
  let dateList = Date().split(" ");
  let curMonth = getMonth(dateList[1]);
  let curDay = dateList[2];
  let curYear = dateList[3];
  let inputDate = storage[dateCntr][3].split("-");
  let inputYear = inputDate[0];
  let inputMonth = inputDate[1];
  let inputDay = inputDate[2];

  if(curYear < inputYear){
// if the current year is less than the input year
// no other details matter
    return "DUE LATER"
  }
  if(curYear == inputYear){
    if(curMonth < inputMonth){
      return "DUE LATER"
    }

    if(curMonth == inputMonth){
      if(curDay < inputDay){
        return "DUE LATER"
      }
      if(curDay == inputDay){
        return "DUE TODAY"
      }

      if(curDay > inputDay){
        return "OVERDUE"
      }
    }

    if(curMonth > inputMonth){
      return "OVERDUE"
    }
  }

  if(curYear > inputYear){
    return "OVERDUE"
  }

}

function getMonth(month){
// if its january return 1; feb ret 2 etc
if(month == "Jan"){
  return 1;
}
if(month == "Feb"){
  return 2;
}
if(month == "Mar"){
  return 3;
}
if(month == "Apr"){
  return 4;
}
if(month == "May"){
  return 5;
}
if(month == "Jun"){
  return 6;
}
if(month == "Jul"){
  return 7;
}
if(month == "Aug"){
  return 8;
}
if(month == "Sep"){
  return 9;
}
if(month == "Oct"){
  return 10;
}
if(month == "Nov"){
  return 11;
}
if(month == "Dec"){
  return 12;
}
}
function contentUpdate(){
  // 0 > title
  // 1 > desc
  // 2 > color
  // 3 > date

  for(let x = 0; x < storage.length-1; x++){

    let counter = x + 1;
    let item = storage[counter];
    
    let itemName = `item${counter}`;
    // console.log(storage,'a');
    // console.log(item,'b');
    // console.log(item[0],item[1],item[2],item[3],'fortnite');
    // console.log(itemName,'c');

    const newItem = document.createElement("div");
    newItem.classList.add("items");
    // newItem.setAttribute("id",itemName);

    const newTag = document.createElement("div");
    newTag.classList.add("tags");
    newTag.setAttribute("id",`${itemName}Tag`);
    newTag.style.backgroundColor = item[2];


    const newTitle = document.createElement("div");
    newTitle.classList.add("titles");
    newTitle.setAttribute("id", `${itemName}Title`);
    newTitle.innerHTML = item[0];


    const newDesc = document.createElement("div");
    newDesc.classList.add("descriptions");
    newDesc.setAttribute("id", `${itemName}Desc`);
    newDesc.innerHTML = item[1];


    const newDate = document.createElement("div");
    newDate.classList.add("dueDates");
    newDate.setAttribute("id", `${itemName}DueDate`);
    newDate.innerHTML = item[3];


    const newButton = document.createElement("button");
    newButton.classList.add("finishButtons");
    newButton.setAttribute("id", `${itemName}Button`);




    newItem.appendChild(newTag);
    newItem.appendChild(newTitle);
    newItem.appendChild(newDesc);
    newItem.appendChild(newDate);
    overdueTasks.appendChild(newItem);
    newItem.appendChild(newButton);

  


  }

}

