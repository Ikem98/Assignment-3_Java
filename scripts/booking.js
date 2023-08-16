

/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?


// pls note I made a slight change to the HTML by adding a className "wow" to blue-hover 
let days = document.getElementsByClassName("wow");
let fullDayButton = document.getElementById("full");
let halfDayButton = document.getElementById("half");
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");
let costLabel = document.getElementById("calculated-cost");
var clear = document.getElementById("clear-button");


monday.addEventListener("click", function () {
    monday.classList.toggle('clicked');
    recalculate();
});

tuesday.addEventListener("click", function () {
    tuesday.classList.toggle('clicked');
    recalculate();
});

wednesday.addEventListener("click", function () {
    wednesday.classList.toggle('clicked');
    recalculate();
});

thursday.addEventListener("click", function () {
    thursday.classList.toggle('clicked');
    recalculate();
});

friday.addEventListener("click", function () {
    friday.classList.toggle('clicked');
    recalculate();
});

clear.addEventListener("click", function () {

    for (let i = 0; i < days.length; i++) {
        days[i].classList.remove('clicked');
    }
    halfDayButton.classList.remove('clicked');
    fullDayButton.classList.remove('clicked');
    costLabel.textContent = "0";
    recalculate();
});

function loadPage() {
    fullDayButton.classList.add('clicked');
    costLabel.textContent = "35";
}

loadPage();
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.



fullDayButton.addEventListener("click", function () {
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    costLabel.textContent = "35";
    recalculate();
});

halfDayButton.addEventListener("click", function () {
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    costLabel.textContent = "20";
    recalculate();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
    let Count = 0;
    for (let i = 0; i < days.length; i++) {
        if (days[i].classList.contains("clicked")) {
            Count++;
        }
    }

    if (fullDayButton.classList.contains("clicked")) {
        costLabel.textContent = Count * 35;
    } else if (halfDayButton.classList.contains("clicked")) {
        costLabel.textContent = Count * 20;
    }
}