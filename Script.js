function openLetter() {
    const letter = document.getElementById("letterOverlay");

    if (letter) {
        letter.classList.add("show");
    }

    createExtraHearts();
}

function closeLetter() {
    const letter = document.getElementById("letterOverlay");

    if (letter) {
        letter.classList.remove("show");
    }
}

function createExtraHearts() {

    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.bottom = "-40px";

        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";

        heart.style.zIndex = "150";
        heart.style.pointerEvents = "none";

        heart.style.animation =
            "heartUp " +
            (3 + Math.random() * 3) +
            "s linear forwards";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 6500);
    }
}


// Letter-এর বাইরে click করলে close হবে
document.addEventListener("DOMContentLoaded", function () {

    const overlay =
        document.getElementById("letterOverlay");

    if (overlay) {

        overlay.addEventListener("click", function (event) {

            if (event.target === overlay) {
                closeLetter();
            }

        });

    }

});
