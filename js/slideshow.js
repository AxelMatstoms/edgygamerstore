var slides = [];

setupSlideshow("slideFeatured");

function getSlides(slidesID) {
    return slides[slidesID] ? slides[slidesID] : slides[slidesID] = to_a(id(slidesID).firstElementChild.children);
}

function setActiveSlideDot(slidesID, n) {
    dots = to_a(id(slidesID).getElementsByClassName("dot-container").item(0).children);
    dots.forEach(dot => dot.classList.remove("dot--active"));
    dots[n].classList.add("dot--active");
}

function showSlide(slidesID, n) {
    const slides = getSlides(slidesID);
    slides.forEach(s => s.style = "");
    slides[n].style.display = "block";
    setActiveSlideDot(slidesID, n);
}

function nextSlide(slidesID) {
    let n = getSlides(slidesID).length;
    let active = getSlides(slidesID).filter(slide => slide.style.display == "block").map(slide => getSlides(slidesID).indexOf(slide))[0];
    showSlide(slidesID, (active + 1) % n);
}

function setupSlideshow(slidesID) {
    const n = getSlides(slidesID).length;
    let dCont = document.createElement("div");
    dCont.className = "dot-container";
    for(i = 0; i < n; i++) {
	let dot = document.createElement("div");
	let notI = i;
	dot.className = "dot";
	dot.addEventListener("click", (ev) => {
	    showSlide(slidesID, notI);
	});
	dCont.appendChild(dot);
    }
    id(slidesID).appendChild(dCont);
    showSlide(slidesID, 0)
}
