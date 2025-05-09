document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");
    const cardsPerPage = 4;
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    const paginationContainer = document.querySelector(".pagination-controls");
  
    let currentPage = 1;
  
    function showPage(page) {
      cards.forEach((card, index) => {
        card.style.display =
          index >= (page - 1) * cardsPerPage && index < page * cardsPerPage
            ? "block"
            : "none";
      });
  
      renderPaginationButtons();
    }
  
    function renderPaginationButtons() {
      paginationContainer.innerHTML = "";
  
      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.classList.toggle("active", i === currentPage);
        btn.addEventListener("click", () => {
          currentPage = i;
          showPage(currentPage);
        });
        paginationContainer.appendChild(btn);
      }
    }
  
    // Initialize
    showPage(currentPage);
  });


document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill-bar");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector(".fill");
        const percentText = entry.target.querySelector(".percent");
        const targetPercent = parseInt(percentText.dataset.percent);
        
        // Animate bar fill
        fill.style.width = fill.dataset.width;

        // Animate percentage count
        let current = 0;
        const interval = setInterval(() => {
          if (current >= targetPercent) {
            percentText.textContent = `${targetPercent}%`;
            clearInterval(interval);
          } else {
            current++;
            percentText.textContent = `${current}%`;
          }
        }, 20); // adjust speed here

        observer.unobserve(entry.target); // run once
      }
    });
  }, { threshold: 0.4 });

  skills.forEach(skill => observer.observe(skill));
});

  