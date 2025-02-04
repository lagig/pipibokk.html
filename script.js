document.addEventListener("DOMContentLoaded", function () {
    const title = "PiPibak - Криптовалютные услуги";
    let i = 0;
    function type() {
        if (i < title.length) {
            document.getElementById("animated-title").textContent += title[i];
            i++;
            setTimeout(type, 100);
        }
    }
    type();
});
