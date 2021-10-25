"use strict";

// get items to be removed
const checkboxItems = document.querySelector(".checkbox-items");
const removeButtons = document.querySelectorAll(".remove-item");
const completedList = document.querySelector(".completed-list");
const checkbox = document.querySelectorAll(".checkbox");
const removeIcons = document.querySelectorAll(".remove-icon");
const addItem = document.querySelector(".add-item");
const checkboxList = document.querySelector(".checkbox-list");
const checkboxItem = document.querySelectorAll(".checkbox-item");

// turn checkboxItems(node list) into array
let checkboxItemsArr = Array.from(checkboxItems);
let removeButtonsArr = Array.from(removeButtons);

let completedCount = 0;

// add items to to-do list

function addItemTodoList() {
	addItem.addEventListener("click", function () {
		let text = prompt("add a new to-do item");

		// tried cloning existing node, had some issues

		// let clonedNode = checkboxList.firstElementChild.cloneNode(true);
		// checkboxItem[0].innerHTML = text;
		// checkboxList.prepend(clonedNode);
		// checkboxItems[0].insertAdjacentElement("beforebegin", clonedNode);

		// got rid of already existing todo items, have one with display: none
		// need to show it and add the text to the text area in it
		let clone = checkboxItems.cloneNode(true);
		let textNode = clone.childNodes[3];
		let removeButton = clone.childNodes[5];

		// add elements to coresponding arrays

		checkboxItemsArr.push(clone);
		removeButtonsArr.push(removeButton);
		clone.classList.remove("hidden");
		textNode.textContent = text;
		checkboxList.prepend(clone);
	});
}

function addItemsToCompletedList() {
	for (let i = 0; i < checkboxItems.length; i++) {
		// click checkmark to complete item
		checkbox[i].addEventListener("click", function () {
			completedList.prepend(checkboxItems[i]);

			checkboxItems[i].classList.remove("checkbox-items");
			checkboxItems[i].classList.add("checkbox-completed-items");
			removeButtons[i].classList.remove("remove-item");
			removeButtons[i].classList.add("remove-completed-item");
			removeIcons[i].classList.remove("remove-icon");
			removeIcons[i].classList.add("remove-completed-icon");
			checkbox[i].classList.remove("checkbox");
			checkbox[i].classList.add("checkbox-completed");

			completedCount += 1;
			removeItemsFromCompleted();
		});
	}
}

// click remove button to remove item next to it

function removeItems() {
	// for (let i = 0; i < checkboxItemsArr.length; i++) {
	// 	removeButtonsArr[i].addEventListener("click", function () {
	// 		// checkboxItemsArr[i].remove();
	// 	});
	// }
	console.log(checkboxItemsArr.length);
}

// When completed items gets to 3, delete the oldest item on list

function removeItemsFromCompleted() {
	if (completedCount > 3) {
		completedList.removeChild(completedList.lastElementChild);
	}
}

addItemTodoList();
addItemsToCompletedList();
removeItems();
