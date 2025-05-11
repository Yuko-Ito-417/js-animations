const accordions = document.querySelectorAll('.list-item');
accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('active');
    const content = accordion.querySelector('.list-content');
    if (content.offsetHeight > 0) {
      content.style.height = '0px';
    } else {
      content.style.height = `${content.scrollHeight}px`;
    }
  });
})
