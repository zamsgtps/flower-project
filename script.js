onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
  window.addEventListener('click', () => {
  const audio = document.getElementById('bg-music');
  if (audio && audio.paused) {
    audio.play();
  }
});
};
