 /*var indexValue = 1;
        showImg(indexValue);//shows img when page is loaded
        function btm_slide(e){showImg(indexValue = e);}
        function side_slide(e){showImg(indexValue += e);}
        function showImg(e){
          var i;
          const img = document.querySelectorAll('img');// keep all images in the "img" variable
          const slider = document.querySelectorAll('.btm-slides span');
          if(e > img.length){indexValue = 1}  //If e exceeds the number of images, reset indexValue to 1 (wraps around to the first image).
          if(e < 1){indexValue = img.length} //If e is less than 1, set indexValue to the number of images (wraps around to the last image).
          for(i = 0; i < img.length; i++){
            img[i].style.display = "block";//This loop hides all images initially to ensure that no multiple images are shown simultaneously. When switching from one image to another, it ensures the previously displayed image is hidden.
            
             
          }
          for(i = 0; i < slider.length; i++){
            slider[i].style.background = "rgba(255,255,255,0.1)";// other or non active
          }
          img[indexValue-1].style.display = "block";
          slider[indexValue-1].style.background = "black";
        } */

// sliders.js

// Ensure all queries are scoped to .content
const contentElement = document.querySelector('.content');
if (contentElement) {
  let slideIndex = 1;
  showSlides(slideIndex);

  function btm_slide(n) {
    showSlides(slideIndex = n);
  }

  function side_slide(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    let i;
    let slides = contentElement.querySelectorAll('.images img');
    let dots = contentElement.querySelectorAll('.btm-slides span');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    for(i = 0; i < dots.length; i++){
      dots[i].style.background = "rgba(255,255,255,0.1)";// other or non active
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].style.background = "black";

    
    
    
   
    }
  
  
}