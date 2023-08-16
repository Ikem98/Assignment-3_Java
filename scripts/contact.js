// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
document.getElementById("submit-button").addEventListener("click", function (){ document.getElementById("contact-page").innerHTML = document.getElementById("contact-page").innerHTML = ""; 
document.getElementById("contact-page").appendChild(newElement);});


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const newElement = document.createElement("p");
newElement.textContent = "Thank you for your message!";
newElement.style.fontSize = "24px";
