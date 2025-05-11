const options = {
  threshold: 1
};
const callback = ((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("displayed");
    } else {
      entry.target.classList.remove("displayed");
    }
  });
})
const target = document.querySelectorAll(".box");
const scrollAnime = new IntersectionObserver(callback, options);
target.forEach((box) => {
  scrollAnime.observe(box);
});
