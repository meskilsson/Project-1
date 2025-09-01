

document.querySelector(".btn").addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: smooth
    });
});