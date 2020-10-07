function bgChanger() {
    if (this.scrollY > this.innerHeight) {
        document.body.classList.add("bg-active");
    }
    else {
        document.body.classList.remove("bg-active");
    }
}

window.addEventListener("scroll", bgChanger);