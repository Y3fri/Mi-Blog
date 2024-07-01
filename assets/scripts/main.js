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
const items = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    items[currentIndex].classList.remove('active');
    currentIndex = index;
    items[currentIndex].classList.add('active');
}


document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            
            button.classList.toggle('active');

            if (button.classList.contains('active')) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});