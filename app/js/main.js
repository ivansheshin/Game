    const section = document.querySelectorAll('.game-object__section');
    const button = document.querySelector('.game-information__btn');
    const roundValue = document.getElementById('round').textContent;

    let randomArray = [];
    let clickedArray = [];

    button.addEventListener('click', function(){
        addElemRandom (clickedArray);
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

            if(JSON.stringify(clickedArray) == JSON.stringify(randomArray)){
                // alert('ebal tvoy mat\'')
                document.getElementById('round').textContent = clickedArray.length;
                clickedArray = []
            } else {
                // console.log('id')
            }

        })
    })


function addElemRandom (n) {
    for (let i = n; i <= n; n++){
        let x = section[Math.floor(Math.random()*section.length)]
       randomArray.push(x);
    }
        
}

