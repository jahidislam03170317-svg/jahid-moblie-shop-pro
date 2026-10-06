function openLetter() {

    document
        .getElementById("letterOverlay")
        .classList.add("show");

    createExtraHearts();
}


function closeLetter() {

    document
        .getElementById("letterOverlay")
        .classList.remove("show");
}


/* Extra hearts when letter opens */

function createExtraHearts() {

    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom = "-40px";

        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";

        heart.style.zIndex = "150";

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


/* Click outside letter to close */

document
    .getElementById("letterOverlay")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeLetter();
        }

    });
