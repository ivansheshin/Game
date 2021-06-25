    const section = document.querySelectorAll('.game-object__section');
    const button = document.querySelector('.game-information__btn');
    const roundValue = document.getElementById('round').textContent;

    let randomArray = [];
    const clickedArray = [];


    section.forEach((item)=>{
        item.addEventListener('click', function (){
            clickedArray.push(item);
        })
    })
    button.addEventListener('click', function(){
        addElemRandom ();
        console.log(randomArray)
        randomArray.forEach((item, i) => {
            setTimeout (()=>{
                item.classList.add('animation');         
            setTimeout(()=>{
                item.classList.remove('animation')
            }, 500)   
            }, i*800)
                   
        });
        for (let i = 0; i < randomArray.length; i++){
            for(let k = 0; k < clickedArray.length; k++){
                if(randomArray[i]===clickedArray[k]){
                    
                } else {
                    randomArray = [];
                    document.getElementById('round').textContent = 1;
                }
            }
        }
    })

    

function addElemRandom () {
       let x = section[Math.floor(Math.random()*section.length)]
       randomArray.push(x); 
}

