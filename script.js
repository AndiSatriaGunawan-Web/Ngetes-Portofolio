// Efek interaksi tombol sederhana
const button = document.querySelector('.btn-neon');

button.addEventListener('mouseover', () => {
    console.log('User hovering on exploration button');
    // Kamu bisa menambahkan suara hover atau efek partikel di sini nanti
});

// Smooth Scroll sederhana
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Efek Mouse Spotlight pada Card
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
    card.onmousemove = e => {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
});

const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const links = document.querySelectorAll('a, button, .project-card');

document.addEventListener('mousemove', (e) => {
    // Menggerakkan kursor kecil
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Menggerakkan kursor besar dengan sedikit jeda (via requestAnimationFrame lebih smooth)
    setTimeout(() => {
        follower.style.left = e.clientX - 11 + 'px'; // -11 agar center
        follower.style.top = e.clientY - 11 + 'px';
    }, 50);
});

// Efek saat hover elemen interaktif
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        follower.classList.add('cursor-active');
    });
    link.addEventListener('mouseleave', () => {
        follower.classList.remove('cursor-active');
    });
});

// --- ANIMASI MUNCUL (ScrollReveal) ---
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: false 
});

// Perintah untuk memunculkan elemen
sr.reveal('.reveal', { interval: 200 });
sr.reveal('.hero-content h1', { delay: 300, origin: 'top' });
sr.reveal('.project-card', { interval: 300, distance: '100px' });

// --- EFEK MIRING 3D (Vanilla Tilt) ---
// Pastikan baris ini ada agar kartu bisa miring saat disentuh
VanillaTilt.init(document.querySelectorAll(".project-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
});

// Tambahkan ini di bagian ScrollReveal di script.js
sr.reveal('.about-img', { origin: 'left', delay: 400 });
sr.reveal('.about-text', { origin: 'right', delay: 600 });

// Logic untuk Mobile Menu
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-list');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Tutup menu otomatis saat link diklik
document.querySelectorAll('.nav-list li a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));