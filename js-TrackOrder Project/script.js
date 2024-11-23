
let count = 0;
let newName = '';
let nextName = '';


let data = document.getElementById('next');

data.addEventListener('click', () => {

        ++count;

        if (count > 0) {
            toEnableButton();
        }
        if (count == 1) {
            newName = 'first';
            nextName = 'second';
            document.getElementById('cnt').innerHTML = "Add shipping address for successful delivery";
        }
        else if (count == 2) {
            newName = 'second';
            nextName = 'third';
            document.getElementById('cnt').innerHTML = "Complete payment to complete the order";

        } else if (count == 3) {
            newName = 'third';
            nextName = 'fourth';
            document.getElementById('cnt').innerHTML = "Ready to get Delivered!";
            const button = document.getElementById('next');
            button.innerHTML = 'Finish';

        } else {
            newName = 'fourth';
            nextName = '';
            document.getElementById('cnt').innerHTML = "Order delivered Successfully!🎉";

            const button = document.getElementById('next');
            button.classList.add('inactive'); 
            button.onclick = null;

            toDisableButton();
        }

        let circles = document.getElementById(newName);

        circles.style.backgroundColor = 'rgb(7, 205, 113)';
        circles.innerHTML = '✔️';

        if(circles.nextElementSibling){
            const nextLine = circles.nextElementSibling;
        nextLine.style.backgroundColor = "green";
        }
        

        if (nextName.length != 0) {
            let nextCircle = document.getElementById(nextName);
            nextCircle.style.backgroundColor = 'blueviolet';
            nextCircle.style.color = 'white';
        }
});

let data1 = document.getElementById('previous');
let previousName = '';
let nextValue = '0';
let previousValue = '0';

toDisableButton();

data1.addEventListener('click', () => {

        --count;

        if (count <= 0) {
            toDisableButton();
        }

        if (count == 1) {
            nextName = 'third';
            previousName = 'second';
            nextValue = '3';
            previousValue = '2';
            document.getElementById('cnt').innerHTML = "Add shipping address for successful delivery";
        }
        else if (count == 0) {
            nextName = 'second';
            previousName = 'first';
            nextValue = '2';
            previousValue = '1';
            document.getElementById('cnt').innerHTML = "Add contact details for further communications.";
        }
        else if (count == 2) {
            nextName = 'fourth';
            previousName = 'third';
            nextValue = '4';
            previousValue = '3';
            document.getElementById('cnt').innerHTML = "Complete payment to complete the order";
            const button = document.getElementById('next');
            button.innerHTML = 'Next';
        }

        let nextCircle = document.getElementById(nextName);
        let previousCircle = document.getElementById(previousName);

        nextCircle.style.backgroundColor = 'grey';
        nextCircle.innerHTML = nextValue;
        nextCircle.style.color = 'black';

        previousCircle.style.backgroundColor = 'blue';
        previousCircle.innerHTML = previousValue;

        const nextLine = previousCircle.nextElementSibling;
        nextLine.style.backgroundColor = "grey";
});

function toEnableButton() {

    const button = document.getElementById('previous');
    button.classList.remove('inactive');
    button.classList.add('active');
    button.disabled = false;
}

function toDisableButton() {

    const button = document.getElementById('previous');
    button.classList.remove('active');
    button.classList.add('inactive');
    button.disabled = true;
}




