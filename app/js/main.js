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
        // console.log(randomArray)
        randomArray.forEach((item, i) => {
            setTimeout (()=>{
                item.classList.add('animation');         
            setTimeout(()=>{
                item.classList.remove('animation')
            }, 500)   
            }, i*800)
                   
        });




    })



    if (clickedArray[0]){
        clickedArray[clickedArray.length - 1].addEventListener('click', function(){
            addElemRandom ();
        for (let i = 0; i < randomArray.length; i++){
            for(let k = 0; k < clickedArray.length; k++){
                if(randomArray[i]===clickedArray[k]){
                    alert('ye vjkjltwcerf')
                    // document.getElementById('round').textContent = roundValue + 1;
                } else {
                    // randomArray.length = 0;
                    // document.getElementById('round').textContent = 1009000;
                    alert('sadfa')
                }
            }
        }
    })
    }
    

    // console.log(randomArray)
    

function addElemRandom () {
       let x = section[Math.floor(Math.random()*section.length)]
       randomArray.push(x); 
}

