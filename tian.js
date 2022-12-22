const steps = document.querySelectorAll (".step")

steps.forEach(step => {
    step.addEventListener("click", () => {
        step.classList.toggle("active");
    })
})