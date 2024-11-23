const leftCheckboxes = document.querySelectorAll(".options1");
const rightCheckboxes = document.querySelectorAll(".options2");
const greaterThanButton = document.getElementById("gtButton");
const lessThanButton = document.getElementById("ltButton");
const doublegreaterThanButton = document.getElementById("doubleGtButton");
const doublelessThanButton = document.getElementById("doubleLtButton");

// Function to enable or disable the ">" button
// function updateGreaterThanButton() {
//   const anyLeftChecked = Array.from(leftCheckboxes).some(checkbox => checkbox.checked);
//   greaterThanButton.disabled = !anyLeftChecked;
// }
function updateGreaterThanButton() {
    const anyLeftChecked = Array.from(leftCheckboxes).filter(checkbox => checkbox.checked);
    console.log(anyLeftChecked);
    if(anyLeftChecked.length!=0){
        greaterThanButton.disabled = false;
    }else{
        greaterThanButton.disabled = true;
    }

  }

// Function to enable or disable the "<" button
// function updateLessThanButton() {
//   const anyRightChecked = Array.from(rightCheckboxes).some(checkbox => checkbox.checked);
//   console.log(anyRightChecked);
//   lessThanButton.disabled = !anyRightChecked;
// }
function updateLessThanButton() {
    const anyRightChecked = Array.from(rightCheckboxes).filter(checkbox => checkbox.checked);
    console.log(anyRightChecked);
    if(anyRightChecked.length!=0){
        lessThanButton.disabled = false;
    }else{
        lessThanButton.disabled = true;
    }

}

// Attach event listeners to left checkboxes
leftCheckboxes.forEach(checkbox => {
  checkbox.addEventListener("change", updateGreaterThanButton);
});

// Attach event listeners to right checkboxes
rightCheckboxes.forEach(checkbox => {
  checkbox.addEventListener("change", updateLessThanButton);
});


// Initial state update
updateGreaterThanButton();
updateLessThanButton();



let gtValues = document.getElementById('gtButton');

gtValues.addEventListener('click', () => {

    enableButton('doubleLtButton');

    const checkedBoxes = document.querySelectorAll('.options1:checked');
    console.log(checkedBoxes);

    const selectedValues = Array.from(checkedBoxes).map(cb => cb.value);
    console.log(selectedValues);

    checkedBoxes.forEach((item) => {
        const parent = item.parentNode;
        parent.remove();
    })

    addValues(selectedValues, 'lastBox');

    const firstDivElements = document.getElementById('firstBox');
    const firstDiv = firstDivElements.querySelectorAll('input');

    if (firstDiv.length === 0) {
        disableButton('doubleGtButton');
    }

    greaterThanButton.disabled = true;


});

let ltValues = document.getElementById('ltButton');

ltValues.addEventListener('click', () => {

    enableButton('doubleGtButton');
    //ltValues.disabled = true; // Disable immediately after clicking

    const checkedBoxes = document.querySelectorAll('.options2:checked');
    console.log(checkedBoxes);

    const selectedValues = Array.from(checkedBoxes).map(cb => cb.value);
    console.log(selectedValues);

    checkedBoxes.forEach((item) => {
        const parent = item.parentNode;
        parent.remove();
    })

    addValues(selectedValues, 'firstBox');

    const firstDivElements = document.getElementById('lastBox');
    const firstDiv = firstDivElements.querySelectorAll('input');

    if (firstDiv.length === 0) {
        disableButton('doubleLtButton');
    }

    lessThanButton.disabled = true;

});

let doubleLtValues = document.getElementById('doubleLtButton');

doubleLtValues.addEventListener('click', () => {

    enableButton('doubleGtButton');
    

    const checkedBoxes = document.querySelectorAll('.options2');
    console.log(checkedBoxes);

    const selectedValues = Array.from(checkedBoxes).map(cb => cb.value);
    console.log(selectedValues);

    checkedBoxes.forEach((item) => {
        const parent = item.parentNode;
        parent.remove();
    })

    addValues(selectedValues, 'firstBox');

    const firstDivElements = document.getElementById('lastBox');
    const firstDiv = firstDivElements.querySelectorAll('input');

    if (firstDiv.length === 0) {
        disableButton('doubleLtButton');
    }

});

let doubleGtValues = document.getElementById('doubleGtButton');

doubleGtValues.addEventListener('click', () => {

    enableButton('doubleLtButton');

    const checkedBoxes = document.querySelectorAll('.options1');
    console.log(checkedBoxes);

    const selectedValues = Array.from(checkedBoxes).map(cb => cb.value);
    console.log(selectedValues);

    checkedBoxes.forEach((item) => {
        const parent = item.parentNode;
        parent.remove();
    })

    addValues(selectedValues, 'lastBox');

    const firstDivElements = document.getElementById('firstBox');
    const firstDiv = firstDivElements.querySelectorAll('input');

    if (firstDiv.length === 0) {
        disableButton('doubleGtButton');

    }

});

function addValues(array, boxType) {

    for (let x of array) {

        let f = document.getElementById(boxType);
        let ele = document.createElement('label');
        if (boxType === 'firstBox') {
            ele.innerHTML = `<input type="checkbox" class="options1" value = ${x} > ${x}`;
        } else {
            ele.innerHTML = `<input type="checkbox" class="options2" value = ${x} > ${x}`;
        }

        f.appendChild(ele);
    }
}

function enableButton(buttonName) {
    const getButton = document.getElementById(buttonName);
    getButton.style.opacity = 1;
    getButton.style.cursor = 'pointer';
}
function disableButton(buttonName) {
    const getButton = document.getElementById(buttonName);
    getButton.style.opacity = 0.5;
    getButton.style.cursor = 'not-allowed';
    //getButton.style.disabled = 'true';
}

