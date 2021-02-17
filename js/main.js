
/*---jQuery dropdown menu----*/


$(document).ready(()=>{
    $('#dropbutton').on('click', ()=>{
        $('.dropdown-content').slideDown(300);
    })
    
    $('.dropdown-remove').on('click', ()=>{
        $('.dropdown-content').slideUp(300);
    })
    
   
})



/*------For slide show on homepage-----*/

let slideIndex=0;
showSlides();

function showSlides(){
    let i;
    let slides= document.getElementsByClassName('slideshow');
    for (i=0; i < slides.length; i++){
        slides[i].style.display="none";
    }

    slideIndex++;
    if (slideIndex > slides.length){
        slideIndex=1
    }

    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides, 5000); 
}

