const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    }

});

//Contact Me button when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelectorAll('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    });
}

//Create Reverse Index Function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

//back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)

        }, (index + 1) * 200 + 100)

    })

}

//opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//opening animation
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

//page left animation
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200);


//opening animation(all page right animation)
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)
})


document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.querySelector(".contact-me");

    contactBtn.addEventListener("click", function (e) {
        e.preventDefault(); // prevent default jump

        if (window.innerWidth >= 768) {
            // Desktop (book-style page turning)
            document.querySelector('[data-page="turn-1"]').click(); // Go to page 2
            setTimeout(() => {
                document.querySelector('[data-page="turn-2"]').click(); // Go to page 4
            }, 400);
            setTimeout(() => {
                document.querySelector('[data-page="turn-3"]').click(); // Go to page 6
            }, 800);
        } else {
            // Mobile (just scroll to contact section)
            const contactSection = document.getElementById("contact");
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});


setTimeout(() => {
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
}, 1200);




document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.book-page');
    let current = 0;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function updateMobileView() {
        if (!isMobile()) return;

        pages.forEach((page, index) => {
            page.classList.remove('active');
            if (index === current) {
                page.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    function navigate(dir) {
        if (!isMobile()) return;

        const next = current + dir;
        if (next >= 0 && next < pages.length) {
            current = next;
            updateMobileView();
        }
    }

    // Set initial mobile page view
    updateMobileView();

    // Handle arrow clicks
    document.querySelectorAll('.nextprev-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const isBack = btn.classList.contains('back');
            navigate(isBack ? -1 : 1);
        });
    });

    // Optional: handle screen resize
    window.addEventListener('resize', () => {
        updateMobileView();
    });
});

// modal

const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("projectModal");

openBtn.onclick = function () {
    modal.style.display = "block";
}

closeBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
