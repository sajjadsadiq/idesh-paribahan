const SeatButtons = document.querySelectorAll(".paribahan-seat-list button");

let selectedSeatCount = 0;

// handle seat functionality
function handleSeatSelection(event) {
  const clickedSeatButton = event.target;
  const seatNameText = clickedSeatButton.innerText;

  // Check if seat is already selected
  if (clickedSeatButton.classList.contains("selected")) {
    alert("This seat is already selected!");
    return;
  } else {
    // Check if the maximum seat limit is reached
    if (selectedSeatCount >= 4) {
      alert("You can only select up to 4 seats!");
      return;
    }
    selectedSeatCount++;

    // Enable Apply button if 4 seats selected
    if (selectedSeatCount === 4) {
      const applyButton = document.getElementById("grand-total-btn");
      applyButton.disabled = false;
    }

    clickedSeatButton.classList.add("selected");
    // Set Background
    setBackgroundColor(seatNameText);

    // create element

    // create new element
    const seatName = document.createElement("p");
    seatName.innerText = seatNameText;
    const seatClass = document.createElement("p");
    seatClass.innerText = "Economoy";
    const seatPrice = document.createElement("p");
    seatPrice.innerText = 550;

    // Create a container seat details
    const selectedSeatContainer = document.createElement("div");
    selectedSeatContainer.classList.add(
      ...["selected-seat", "flex", "items-center", "justify-between", "py-2"]
    );

    // Append the paragraphs to the container
    selectedSeatContainer.appendChild(seatName);
    selectedSeatContainer.appendChild(seatClass);
    selectedSeatContainer.appendChild(seatPrice);

    // Seat Container Append Parent
    const selectedSeatContainerElement = document.getElementById(
      "selected-seat-container-parent"
    );
    selectedSeatContainerElement.appendChild(selectedSeatContainer);

    // Total Seat Number
    const totalSeatNumber = document.getElementById("total-seat-number");
    totalSeatNumber.innerText = parseInt(totalSeatNumber.innerText) - 1;

    // Seat Count
    const seatCount = document.getElementById("seat-count");
    const seatCountNum = (seatCount.innerText =
      parseInt(seatCount.innerText) + 1);

    // total Price
    const perSeatPrice = 550;
    const totalSeatPrice = perSeatPrice * seatCountNum;
    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText = totalSeatPrice;
  }
}

// Grand Total
function grandTotalBtn() {
  const coupenField = document.getElementById("coupen-field");
  const coupen = coupenField.value;
  const totalPriceText = document.getElementById("total-price");
  const totalPrice = totalPriceText.innerText;

  if (coupen === "NEW15") {
    const grandTotal = document.getElementById("grand-total");
    grandTotal.innerText = totalPrice * 0.85;
  } else if (coupen === "Couple 20") {
    const grandTotal = document.getElementById("grand-total");
    grandTotal.innerText = totalPrice * 0.8;
  }
  hideElementById("coupenBox");
}

// Add Event Listener Seat Button
for (const seatButton of SeatButtons) {
  seatButton.addEventListener("click", handleSeatSelection);
}
