    const section = document.querySelectorAll('.game-object__section');
    const button = document.querySelector('.game-information__btn');
    const roundValue = document.getElementById('round').textContent;

    let randomArray = [];
    let clickedArray = [];

    button.addEventListener('click', function(){
        addElemRandom (roundValue);
        console.log(randomArray)
        randomArray.forEach((item, i) => {
            setTimeout (()=>{
                item.classList.add('animation');         
            setTimeout(()=>{
                item.classList.remove('animation')
            }, 500)   
            }, i*800)
                   
        });

    })

    section.forEach((item)=>{
        item.addEventListener('click', function (){
            clickedArray.push(item);
            console.log(clickedArray)
            console.log(clickedArray[clickedArray.length - 1])

            compare(randomArray, clickedArray)
            
            

        })
    })


function addElemRandom (n) {
    for (let i = 0; i <= n ; i++){
        let x = section[Math.floor(Math.random()*section.length)]
       randomArray.push(x);
    }
}

function compare (a, b) {
    if (a.length === b.length &&
    a.every((v, i) => v === b[i])){
        document.getElementById('round').textContent = clickedArray.length
        clickedArray = []
        console.log(true)
    } else if (a.length > b.length ) {

    } else {
       document.getElementById('round').textContent = 0;

    }
}
  

