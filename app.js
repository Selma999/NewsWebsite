function bgChanger() {
  if (this.scrollY > this.innerHeight * (1 / 3)) {
    document.body.classList.add('bg-active');
    document.body.classList.remove('bg');
  } else {
    document.body.classList.remove('bg-active');
    document.body.classList.add('bg');
  }
}

window.addEventListener('scroll', bgChanger);
