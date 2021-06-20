    const sectionBlue = document.querySelector('.game-object__section[data-id="1"');
    const sectionYellow = document.querySelector('.game-object__section[data-id="2"');
    const sectionGreen = document.querySelector('.game-object__section[data-id="3"');
    const sectionRed = document.querySelector('.game-object__section[data-id="4"');
    const button = document.querySelector('.game-information__btn');

    const arraySection = [sectionBlue, sectionYellow, sectionGreen, sectionRed];
    const random = arraySection[Math.floor(Math.random()*arraySection.length)];



    const newArray = [];
    const clickedArray = [];
    sectionBlue.addEventListener ('click', function() {
        clickedArray.push(sectionBlue);
    });
    sectionYellow.addEventListener ('click', function() {
        clickedArray.push(sectionYellow);
    });
    sectionGreen.addEventListener ('click', function() {
        clickedArray.push(sectionGreen);
    });
    sectionRed.addEventListener ('click', function() {
        clickedArray.push(sectionRed);
    });

    button.addEventListener('click', function(){
        addElemArr(1);
        const roundInfo = document.getElementById('round').innerHTML = newArray.length + 1; 
        roundInfo;
        for (let i = 0; i < newArray.length; i++){
            newArray[i].classList.add(':hover');
        }

        
})
console.log(newArray);


function addElemArr (n) {

    for (let i = 1; i <= n; i++) {
        
        let x = arraySection[Math.floor(Math.random()*arraySection.length)]
        newArray.push(x);
    }

    console.log(newArray)
}

for (let i = 0; i < newArray.length; i++){
    for(let k = 0; k < clickedArray.length; k++){
        if(newArray[i]===clickedArray[k]){

        }
    }
}