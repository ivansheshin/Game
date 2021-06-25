    const section = document.querySelectorAll('.game-object__section');
    const button = document.querySelector('.game-information__btn');
    const roundValue = document.getElementById('round').textContent;
    const randomArray = [];
    const clickedArray = [];

    section.forEach((item)=>{
        item.addEventListener('click', function (){
            clickedArray.push(item);
        })
    })
    button.addEventListener('click', function(){
        for (let i = 1; i <= 1; i++) {
            addElemRandom ();
        }
        console.log(randomArray)
        randomArray.forEach((item) => {
               item.classList.add('animation'); 

            
            setTimeout(()=>{
                item.classList.remove('animation')
            }, 1000)       
        });

    })

function addElemRandom () {
       let x = section[Math.floor(Math.random()*section.length)]
       randomArray.push(x); 
}


// for (let i = 0; i < newArray.length; i++){
//     for(let k = 0; k < clickedArray.length; k++){
//         if(newArray[i]!==clickedArray[k]){
//             document.getElementById('round').innerHTML = 1;
//         }
//     }
// }