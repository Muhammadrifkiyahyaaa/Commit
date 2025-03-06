document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {

    alert(`Terima kasih ${name}! Pesan Anda telah diterima.`);

    this.reset();
  }
});

const projects = document.querySelectorAll(".project");

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2, 
  }
);

projects.forEach((project) => {
  projectObserver.observe(project);
});
