const leftCheckboxes = document.querySelectorAll(".leftSideButtons");
const rightCheckboxes = document.querySelectorAll(".rightSideButtons");
const greaterThanButton = document.getElementById("gtButton");
const lessThanButton = document.getElementById("ltButton");
const doubleGreaterThanButton = document.getElementById("doubleGtButton");
const doubleLessThanButton = document.getElementById("doubleLtButton");

// Function to update the state of the ">" button
function updateGreaterThanButton() {
    const anyLeftChecked = Array.from(document.querySelectorAll('.leftSideButtons:checked'));
    greaterThanButton.disabled = anyLeftChecked.length === 0;
}

// Function to update the state of the "<" button
function updateLessThanButton() {
    const anyRightChecked = Array.from(document.querySelectorAll('.rightSideButtons:checked'));
    lessThanButton.disabled = anyRightChecked.length === 0;
}

// Attach event listeners to dynamically update button states
leftCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", updateGreaterThanButton);
});

rightCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", updateLessThanButton);
});

// Initial state update
updateGreaterThanButton();
updateLessThanButton();

// Event listeners for single move buttons
greaterThanButton.addEventListener('click', () => {
    enableButton('doubleLtButton');

    const checkedBoxes = document.querySelectorAll('.leftSideButtons:checked');
    const selectedValues = Array.from(checkedBoxes).map(cb => cb.value);

    checkedBoxes.forEach(item => item.parentNode.remove());
    addValues(selectedValues, 'lastBox');

    if (document.querySelectorAll('.leftSideButtons').length === 0) {
        disableButton('doubleGtButton');
    }

    greaterThanButton.disabled = true;
});

lessThanButton.addEventListener('click', () => {
    enableButton('doubleGtButton');

    const checkedBoxes = document.querySelectorAll('.rightSideButtons:checked');
    const selectedValues = Array.from(checkedBoxes).map(cb => cb.value);

    checkedBoxes.forEach(item => item.parentNode.remove());
    addValues(selectedValues, 'firstBox');

    if (document.querySelectorAll('.rightSideButtons').length === 0) {
        disableButton('doubleLtButton');
    }

    lessThanButton.disabled = true;
});

// Event listeners for double move buttons
doubleGreaterThanButton.addEventListener('click', () => {
    enableButton('doubleLtButton');
    moveAllItems('leftSideButtons', 'lastBox');

    if (document.querySelectorAll('.leftSideButtons').length === 0) {
        disableButton('doubleGtButton');
    }
});

doubleLessThanButton.addEventListener('click', () => {
    enableButton('doubleGtButton');
    moveAllItems('rightSideButtons', 'firstBox');

    if (document.querySelectorAll('.rightSideButtons').length === 0) {
        disableButton('doubleLtButton');
    }
});

// Function to move all items from one group to another
function moveAllItems(sourceClass, targetBox) {
    const allCheckboxes = document.querySelectorAll(`.${sourceClass}`);
    const selectedValues = Array.from(allCheckboxes).map(cb => cb.value);

    allCheckboxes.forEach(item => item.parentNode.remove());
    addValues(selectedValues, targetBox);
}


// Function to add values to a specified box
function addValues(array, boxType) {
    for (let x of array) {
        const f = document.getElementById(boxType);
        const ele = document.createElement('label');
        if (boxType === 'firstBox') {
            ele.innerHTML = `<input type="checkbox" class="leftSideButtons" value="${x}"> ${x}`;
            ele.querySelector('input').addEventListener('change', updateGreaterThanButton);
        } else {
            ele.innerHTML = `<input type="checkbox" class="rightSideButtons" value="${x}"> ${x}`;
            ele.querySelector('input').addEventListener('change', updateLessThanButton);
        }
        f.appendChild(ele);
    }
}

// Enable/disable button helpers
function enableButton(buttonName) {
    const button = document.getElementById(buttonName);
    button.classList.remove('disabled');
    button.disabled = false;
}

function disableButton(buttonName) {
    const button = document.getElementById(buttonName);
    button.classList.add('disabled');
    button.disabled = true;
}



