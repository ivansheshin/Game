const section = document.querySelectorAll('.game-object__section');
const button = document.querySelector('.game-information__btn');
let roundValue = document.getElementById('round').textContent;


let randomArray = [];
let clickedArray = [];

button.addEventListener('click', function () {

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
    })
})


function addElemRandom() {
        for (let i = 0; i < 1; i++) {
                let x = section[Math.floor(Math.random() * section.length)]
                randomArray.push(x);
        }
        
}

function compare(a, b) {
    if (a.length === b.length &&
        a.every((v, i) => v === b[i])) {
            for (let i = 0; i < b.length + 1; i++){
                document.getElementById('round').textContent = i
            }
        // document.getElementById('round').textContent = b.length
        // document.getElementById('round').textContent = +roundValue + 1
        clickedArray = []
    } else if (a.length > b.length) {

    } 
    else {
        document.getElementById('round').textContent = 0;
        randomArray = []
        clickedArray = []
    }
}