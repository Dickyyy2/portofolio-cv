// backend/data.js
const educationHistory = [ 
    { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
    { id: 2, period: '2020 - 2023', institution: 'SMKN 7 Samarinda', major: 'Rekayasa Perangkat Lunak' } 
];
const skills = [ 
    { name: 'Vue.js', level: 'Mahir', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'JavaScript', level: 'Mahir', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind CSS', level: 'Mahir', logo: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
    { name: 'Laravel', level: 'Menengah', logo: 'https://www.svgrepo.com/show/353985/laravel.svg' },
    { name: 'Git & GitHub', level: 'Mahir', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'HTML5 & CSS3', level: 'Mahir', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' }, 
];
const projects = [
    {
        title: 'Game Clash of Clans Clone',
        image: '/images/coc.jpg', // UBAH KE PATH LOKAL
        description: 'Platform e-commerce lengkap dengan fitur produk, keranjang belanja, checkout, dan manajemen admin. Dirancang untuk skalabilitas dan pengalaman pengguna yang mulus.',
        tech: ['Vue.js', 'Laravel', 'MySQL', 'Stripe API'],
        link: '#', // Ganti dengan link demo atau '#'
    },
    {
        title: 'Game Mobile Legends Analyzer',
        image: '/images/mobilelegends.jpg', // UBAH KE PATH LOKAL
        description: 'Dashboard manajemen data real-time untuk memvisualisasikan metrik bisnis penting, dengan filter dinamis dan grafik interaktif.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js'],
        link: '#',
    },
    {
        title: 'Game Roblox Creator',
        image: '/images/roblox.jpg', // UBAH KE PATH LOKAL
        description: 'Aplikasi web intuitif untuk melacak dan mengelola tugas harian, dengan fitur notifikasi dan kolaborasi tim.',
        tech: ['Vue.js', 'Firebase', 'Vuetify'],
        link: '#',
    },
    // Anda bisa menambahkan proyek lain di sini
];
module.exports = { educationHistory, skills, projects };