const section = document.querySelectorAll('.game-object__section');
const button = document.querySelector('.game-information__btn');
// rename const
let roundValue = document.getElementById('round').textContent;


let randomArray = [];
let clickedArray = [];

button.addEventListener('click', function () {
    // stick to codestyle (use only arr func's)

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
    item.addEventListener('click', function () {
        clickedArray.push(item);
        compare(randomArray, clickedArray);
        button.disabled = false
        
//         if (compare(randomArray, clickedArray)) {
//             // nextRound()
//         } else {
//             // endGame()
//         }
    })
})


function addElemRandom() {
        for (let i = 0; i < 1; i++) {
            // wtf
                let x = section[Math.floor(Math.random() * section.length)]
                // use const
                randomArray.push(x);
        }
        
}

function compare(a, b) {
//     if (a.length > b.length) return;

    // use readble var names
    if (randomArray.length === clickedArray.length &&
        a.every((v, i) => v === b[i])) {
        // use some variable for every
            for (let i = 0; i < b.length + 1; i++){
                // do not use loop
                document.getElementById('round').textContent = i
                // use roundValue let
            }

        clickedArray = []
        // put this in nexRound func
    } else if (a.length > b.length) {
// ?
    } 
    else {
        document.getElementById('round').textContent = 0;
        // use roundValue let
        randomArray = []
        clickedArray = []
        // put this in gameOver/endGame func
    }
    // 
}
