const addBtn = document.querySelector("#addBtn");
const displayTravelList = document.querySelector("#displayTravelList");
const displayVisitedCount = document.querySelector("#displayVisitedCount");
let visitedPlacesCount = 0;

addBtn.addEventListener("click", () => {
  const destinationName = document.querySelector("#destinationName");

  const listElement = document.createElement("li");
  listElement.className = "my-2";

  listElement.innerHTML = `<p>
        <input type="checkbox" 
        class="destinationVisitedCheckbox"
        onChange="countVistedPlaces(this)" /> ${destinationName.value}
     <button class="btn btn-danger" id="deleteBtn" onClick="deleteDestination(this)">Delete</button>
     </p>`;

  displayTravelList.appendChild(listElement);
  destinationName.value = "";
});

function countVistedPlaces(checkbox) {
  if (checkbox.checked) {
    visitedPlacesCount++;
  } else {
    visitedPlacesCount--;
  }
  updateCountView();
}

function deleteDestination(deleteBtn) {
  const listElement = deleteBtn.parentElement.parentElement;
  if (listElement.querySelector(".destinationVisitedCheckbox").checked) {
    visitedPlacesCount--;
    updateCountView();
  }
  listElement.remove();
}

function updateCountView() {
  displayVisitedCount.textContent = `Visited places count: ${visitedPlacesCount}`;
}
