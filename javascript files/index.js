let availableSeats = 40;
let seatCount = 0;
const className = "Economy";
let price = 550;
let ticketPrice = 0;



const seatButtons = document.getElementsByClassName("seat-button");
for (let seatButton of seatButtons) {
  seatButton.addEventListener("click", seatButtonClickHandler);
}

function seatButtonClickHandler() {
  if (seatCount >= 4) {
    for (let button of seatButtons) {
      if (button !== this) {
        button.setAttribute("disabled", true);
      }
    }

    alert("You cannot select more than 4 tickets");
    return;
  }
 
  let ticketContainer = document.getElementById("ticket-container");
  let classContainer = document.getElementById("class-container");
  let priceContainer = document.getElementById("price-container");
  let ticketText = document.createElement("p");
  let classText = document.createElement("p");
  let priceText = document.createElement("p");
  ticketText = this.innerText;
  classText = className;
  priceText = price;
  ticketContainer.append(ticketText);
  ticketContainer.appendChild(document.createElement("br"));
  classContainer.append(classText);
  classContainer.appendChild(document.createElement("br"));
  priceContainer.append(priceText);
  priceContainer.appendChild(document.createElement("br"));

  if (priceContainer.children.length === 4) {
    hideAttribute("input-field", "disabled");
    hideAttribute("apply-btn", "disabled");
  }

  ticketPrice += 550;
  getElementById("total-price", ticketPrice);
  getElementById("grand-total", ticketPrice);

  this.classList.add("bg-green-400");
  availableSeats--;
  seatCount++;
  getElementById("available-seats", availableSeats);
  getElementById("seat-count", seatCount);

  this.removeEventListener("click", seatButtonClickHandler);

}

function getElementById(elementId, value) {
  document.getElementById(elementId).innerText = value;
}

function hideAttribute(inputId, attribute) {
  document.getElementById(inputId).removeAttribute(attribute);
  return;
}

function addAttribute(inputId, attribute) {
  document.getElementById(inputId).setAttribute(attribute,true);
  return;
}



