// Inisialisasi Animasi WOW.js
new WOW().init();

// Spinner Loader - Hilang saat halaman siap
window.addEventListener('load', () => {
    const spinner = document.getElementById('spinner');
    spinner.style.opacity = '0';
    setTimeout(() => {
        spinner.style.display = 'none';
    }, 500);
});

// Efek Navbar dan Tombol Back to Top saat Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const btt = document.querySelector('.back-to-top');

    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        btt.style.display = 'flex';
    } else {
        navbar.classList.remove('scrolled');
        btt.style.display = 'none';
    }
});

// Smooth Scroll untuk navigasi (Opsional karena sudah ada scroll-behavior di CSS)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if(this.hash !== "") {
            // Tutup menu mobile jika terbuka
            const opener = document.querySelector('.navbar-collapse');
            if(opener.classList.contains('show')) {
                opener.classList.remove('show');
            }
        }
    });
});


// Navbar Active berdasarkan klik
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});


document.querySelectorAll('.card-smk2, .card-impl')
  .forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });
