document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropbtn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();

      const parent = btn.parentElement;

      // cek apakah ini dropdown level 1 (langsung anak dari .main-links > ul)
      const isTopLevel = parent.parentElement.parentElement.classList.contains("main-links");

      if (isTopLevel) {
        // kalau level 1 -> tutup semua menu lain
        document.querySelectorAll(".main-links > ul > .dropdown").forEach(d => {
          if (d !== parent) d.classList.remove("active");
        });
      }

      // toggle dropdown yg diklik
      parent.classList.toggle("active");
    });
  });

  // klik di luar semua menu -> tutup semua
  document.addEventListener("click", e => {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("active"));
    }
  });
});
