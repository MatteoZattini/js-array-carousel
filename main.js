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

    if( slideSelected - 0 + nSlides % nSlides ){
        slideSelected--;
		console.log(slideSelected)
    } else {
		slideSelected = 4;
	}
	slides[slideSelected].classList.add("active");
    console.log("Selezione -> aggiungi", slideSelected);

})

// ciclo for


// let immagineAttualmenteAttiva;
// let prossimaSlide;


// let slides = document.getElementsByClassName("slide");

// document.getElementById("btnNext").addEventListener("click", function () {	
// 	for (let i = 0; i < slides.length; i++) {
// 		const slide = slides[i];		
		
// 		if (slide.classList.contains("active")) {			
// 			slide.classList.remove("active");		
// 			immagineAttualmenteAttiva = i;			
// 		}
// 	}
	
// 	prossimaSlide = immagineAttualmenteAttiva + 1;
	
// 	if (prossimaSlide >= slides.length) {
// 		prossimaSlide = 0;
// 	}
	
// 	slides[prossimaSlide].classList.add("active");
// 	console.log(`Sposto la selezione da ${immagineAttualmenteAttiva} a ${prossimaSlide}`);
// });

// document.getElementById("btnPrev").addEventListener("click", function () {
//     for (let i = 0; i < slides.length; i++) {
//         const slide = slides[i];

//         if (slide.classList.contains("active")) {			
// 			slide.classList.remove("active");		
// 			immagineAttualmenteAttiva = i;			
// 		}
//     }

//     prossimaSlide = immagineAttualmenteAttiva - 1;

//     if (prossimaSlide < 0) {
//         prossimaSlide = 0 + 4;
//     }

//     slides[prossimaSlide].classList.add("active");
// 	console.log(`Sposto la selezione da ${immagineAttualmenteAttiva} a ${prossimaSlide}`);
// })