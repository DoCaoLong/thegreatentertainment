addEventListener("load", (event) => {
    // optimize view mobile
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        var meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content =
            "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes";
        document.getElementsByTagName("head")[0].appendChild(meta);
        document.body.style.textAlign = "left";
    }
    // optimize view mobile

    // menu mobile
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
    // close menu mobile

    // back to top
    let scrollTopBtn = document.getElementById("scrollTopBtn");

    if (scrollTopBtn) { // Kiểm tra nếu nút scroll top tồn tại
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        }

        scrollTopBtn.onclick = function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
    }
    // back to top

});

// avtive menu 
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            navLinks.forEach(link => link.classList.remove('active-menu'));
            link.classList.add('active-menu');
        }
    });
});
