let prevButton = document.getElementsByClassName('prev')[0];
console.dir(prevButton);
let nextButton = document.getElementsByClassName('next')[0];
let slides = document.getElementsByClassName("sliderPicture")
console.dir(slides);
function handlerPrevButtonClick(){
for(let i = 0; i < slides.length; i++){
	if(slides[i].className == "sliderPicture visiable"){
		if(slides[i-1] == undefined){
           return;
		}
		slides[i].className = 'sliderPicture';
        slides[i-1].className = "sliderPicture visiable";

	}
}
}

function handlerNextButtonClick(){
	for(let i = 0; i <= slides.length; i++){
		if(slides[i].className == "sliderPicture visiable"){
		  if(slides[i+1] == undefined){
			  return;
		  }
		  slides[i].className = 'sliderPicture';
		  slides[i + 1].className = "sliderPicture visiable";
		  return;
		}
	}
}
prevButton.addEventListener('click',handlerPrevButtonClick);
nextButton.addEventListener('click',handlerNextButtonClick);