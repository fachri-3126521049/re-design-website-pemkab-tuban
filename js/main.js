
    document.querySelectorAll('.pencarian-cepat a').forEach(link => {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
    });

    document.querySelectorAll('.layanan a').forEach(link => {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
    });

    document.querySelectorAll('.banner-majalah a').forEach(link => {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
    });


    
let lastScrollTop = 0;

const navbar = document.querySelector(".header");

window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY;

    if (currentScroll <= 0) {
        navbar.classList.remove("hide");
    }
    else if (currentScroll > lastScrollTop) {
        navbar.classList.add("hide");
    }
    else {
        navbar.classList.remove("hide");
    }

    lastScrollTop = currentScroll;
});

