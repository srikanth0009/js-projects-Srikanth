const firstDivElements = document.getElementById('firstBox');
const firstDiv = firstDivElements.querySelectorAll('input');

// if(firstDiv.length === 0){
//     const getButton = document.getElementById('doubleGtButton');
//     getButton.style.opacity = 0.5;
// }


let gtValues = document.getElementById('gtButton');

//gtValues.addEventListener('click',getData('gtButton'));


gtValues.addEventListener('click', () => {

    const getButton = document.getElementById('doubleLtButton');
        getButton.style.opacity = 1;
        getButton.style.cursor='pointer';


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
        const getButton = document.getElementById('doubleGtButton');
        getButton.style.opacity = 0.5;
        getButton.style.cursor='not-allowed';
    }

});

let ltValues = document.getElementById('ltButton');

ltValues.addEventListener('click', () => {


    const getButton = document.getElementById('doubleGtButton');
        getButton.style.opacity = 1;
        getButton.style.cursor='pointer';


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
        const getButton = document.getElementById('doubleLtButton');
        getButton.style.opacity = 0.5;
        getButton.style.cursor='not-allowed';
    }

});

let doubleLtValues = document.getElementById('doubleLtButton');

doubleLtValues.addEventListener('click', () => {

    const getButton = document.getElementById('doubleGtButton');
        getButton.style.opacity = 1;
        getButton.style.cursor='pointer';


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
        const getButton = document.getElementById('doubleLtButton');
        getButton.style.opacity = 0.5;
        getButton.style.cursor='not-allowed';
    }

});

let doubleGtValues = document.getElementById('doubleGtButton');

doubleGtValues.addEventListener('click', () => {

    const getButton = document.getElementById('doubleLtButton');
        getButton.style.opacity = 1;
        getButton.style.cursor='pointer';


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
        const getButton = document.getElementById('doubleGtButton');
        getButton.style.opacity = 0.5;
        getButton.style.cursor='not-allowed';
    }

});


// function getEventListener(buttonType){

//     const checkedBoxes = document.querySelectorAll('.options:checked');
//     console.log(checkedBoxes);

//     const selectedValues = Array.from(checkedBoxes).map(cb => cb.value);
//     console.log(selectedValues);

//     checkedBoxes.forEach((item)=>{
//         const parent = item.parentNode;
//         parent.remove();
//     });

//     if(buttonType === 'gtButton'){
//         addValues(selectedValues,'firstBox');
//     }else{
//         addValues(selectedValues,'lastBox');
//     }
// }

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




