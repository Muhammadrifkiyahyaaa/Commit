//UNTUK MENANGANI SUBMIT PADA FORMULIR KONTAK
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); //UNTUK MENCEGAH REFRESH SAAT FORMULIR DIKIRIM

  //UNTUK MENGAMBIL NILAI YANG TELAH DIINPUT
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  //UNTUK MEMERIKSA APAKAH SEMUA INPUT TELAH DIISI
  if (name && email && message) {
    //UNTUK MEMBERITAHU BAHWA PESAN SUDAH DITERIMA
    alert(`Terima kasih ${name}! Pesan Anda telah diterima.`);

    //UNTUK MERESET FORMULIR
    this.reset();
  }
});

//UNTUK MENGAMBIL SEMUA CODING CLASS "PROJECT"
const projects = document.querySelectorAll(".project");

//UNTUK MENDETEKSI KETIKA GAMBAR MUNCUL DI LAYAR
const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2, //GAMBAR DIANGGAP TERLIHAT JIKA MINIMAL 20% DARI GAMBAR MASUK DI LAYAR
  }
);

//UNTUK MENERAPKAN OBSERVER PADA SETIAP GAMBAR
projects.forEach((project) => {
  projectObserver.observe(project);
});
