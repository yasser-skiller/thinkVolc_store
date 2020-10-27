let imgB = document.querySelector('.big-img img'),
    imgA = document.querySelector('.big-img .gl'),
    smallerI = document.querySelectorAll('.smaller img'),
    arr = Array.from(smallerI),
    smallerAAA = document.querySelectorAll('.smaller a'),
    arr_AAA = Array.from(smallerAAA),
    counter = 0;

arr.forEach(a =>{
    a.addEventListener('click',(e) =>{
        e.preventDefault()
        imgB.src = e.target.src
        imgA.href = e.target.src
    })
})
document.querySelector('.Next').addEventListener('click',()=>{
    counter++;
    if(counter === arr.length){
        counter = 0 ;
    }
    imgB.src = arr[counter].src

})

document.querySelector('.pre').addEventListener('click',()=>{
    if(counter > 0){
        counter--;
        imgB.src = arr[counter].src
    }
    if(counter === 0){
        counter = arr.length;
        imgB.src = arr[counter].src
    }

})


imgB.addEventListener('click',()=>{
    arr_AAA.forEach(element => {
        element.href = element.childNodes[0].src ;
        element.setAttribute('data-lightbox',"roadtrip")
    });
})



    
setInterval(() => {
    
    if(document.querySelector("#lightboxOverlay").style.display == "none"){
        arr_AAA.forEach(element => {
            element.href = '#' ;
            element.removeAttribute('data-lightbox');
        });
    }

}, 0);
    
