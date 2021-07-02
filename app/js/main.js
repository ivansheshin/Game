const section = document.querySelectorAll('.game-object__section');
const button = document.querySelector('.game-information__btn');
let roundValue = document.getElementById('round');

let randomArray = [];
let clickedArray = [];

button.addEventListener('click', () => {

    button.disabled = true;
    addElemRandom();
    randomArray.forEach((item, i) => {
        setTimeout(() => {
            item.classList.add('animation');
            setTimeout(() => {
                item.classList.remove('animation')
            }, 500)
        }, i * 800)
    });
})

section.forEach((item) => {
    item.addEventListener('click', () => {
        clickedArray.push(item);

        if (compareRandomAndClickedArr()) {
            nextRound();
            button.disabled = false;
        } else if (clickedArray.length !== randomArray.length) return
        else {
            endGame();
            button.disabled = false
        }
    })
})


function addElemRandom() {
    const x = section[Math.floor(Math.random() * section.length)]
    randomArray.push(x);
}


function compareRandomAndClickedArr() {
    return (randomArray.length === clickedArray.length && clickedArray.every((elem, index) => elem === randomArray[index]))

}

function nextRound() {
    roundValue.textContent = clickedArray.length;
    clickedArray = [];
}

function endGame() {
    roundValue.textContent = 0;
    randomArray = [];
    clickedArray = [];

}