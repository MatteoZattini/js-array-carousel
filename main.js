let slides = document.getElementsByClassName("slide");

let nSlides = slides.length

let slideSelected = 0

document.getElementById("btnNext").addEventListener('click', function(){
    slides[slideSelected].classList.remove("active")
    if( slideSelected < nSlides - 1 ){
        slideSelected++;
    } else {
		slideSelected = 0;
	}
	slides[slideSelected].classList.add("active");
	console.log("Selezione -> aggiungi", slideSelected);
})

document.getElementById("btnPrev").addEventListener('click', function(){
    slides[slideSelected].classList.remove("active")
    if( slideSelected < nSlides - 1 ){
        slideSelected--;
    } else {
        slideSelected = 4;
    }
    slides[slideSelected].classList.add("active")

})