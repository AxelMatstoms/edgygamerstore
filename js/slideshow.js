var slides = [];

setupSlideshow("slideFeatured");

function getSlides(slidesID) {
  return slides[slidesID] ? slides[slidesID] : slides[slidesID] = to_a(id(slidesID).firstElementChild.children);
}

function setActiveSlideDot(slidesID, n) {
  const dots = to_a(id(slidesID).getElementsByClassName("dot-container").item(0).children);
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
  const n = getSlides(slidesID).length;
  const active = getSlides(slidesID).filter(slide => slide.style.display == "block").map(slide => getSlides(slidesID).indexOf(slide))[0];
  showSlide(slidesID, (active + 1) % n);
}

function setupSlideshow(slidesID) {
  const n = getSlides(slidesID).length;
  const dCont = c_el("div");
  dCont.className = "dot-container";
  for (i = 0; i < n; i++) {
    const dot = c_el("div");
    const notI = i;
    dot.className = "dot";
    dot.addEventListener("click", (ev) => {
      showSlide(slidesID, notI);
    });
    dCont.appendChild(dot);
  }
  id(slidesID).appendChild(dCont);
  showSlide(slidesID, 0)
}
