var check = document.querySelector(".check")
check.addEventListener('click', idioma);

function idioma() {
    let id = check.checked;
    if (id == true) {
        location.href = "es/index.html";
    } else {
        location.href = "../index.html"
    }
}

let currentIndex = 0;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const slides = document.querySelectorAll('.carousel-item');

    currentIndex = index;

    carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
    });
}
