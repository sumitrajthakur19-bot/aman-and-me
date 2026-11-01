
const exploreBtn = document.getElementById("exploreBtn");
const message = document.getElementById("message");

exploreBtn.addEventListener("click", function () {
    message.textContent =
        "Thanks for visiting! Our team is building something awesome.";

    exploreBtn.textContent = "Explored!";
    exploreBtn.disabled = true;
});
