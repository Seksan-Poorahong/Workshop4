const btn = document.querySelectorAll("button");

btn.forEach(btn => {
    btn.addEventListener("click", () => {
        document.body.style.backgroundColor = btn.textContent;
    });
});