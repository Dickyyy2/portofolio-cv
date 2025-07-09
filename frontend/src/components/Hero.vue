<template>
  <section id="profil" class="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden py-20">
    <div class="absolute inset-0 bg-cover bg-center parallax-bg" :style="{ backgroundImage: `url('${bgImage}')` }"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-950 opacity-80 z-10"></div>

    <div class="container mx-auto px-6 z-20 flex flex-col md:flex-row items-center justify-center">
      <div class="md:w-1/2 mb-10 md:mb-0 md:pr-12 text-left animate-slide-in-left">
        <h1 class="text-5xl md:text-6xl font-extrabold text-blue-400 mb-6 drop-shadow-lg">
          Halo, Saya <span class="text-white">Dicky Robyansyah</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed drop-shadow-md">
          Fullstack Developer | Saya memiliki pengalaman 3 tahun dalam pengembangan web dan suka mengotak-atik kode. Saya bersemangat menciptakan solusi digital yang inovatif dan efisien.
        </p>
        <a href="#kontak" class="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
          Hubungi Saya
        </a>
      </div>
      <div class="md:w-1/2 flex justify-center animate-slide-in-right">
        <div class="relative group">
          <img src="@/assets/profile.jpeg" alt="Foto Dicky Robyansyah" class="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-blue-500 transform group-hover:scale-105 transition-transform duration-300" />
          <div class="absolute inset-0 rounded-full border-4 border-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-border"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const bgImage = ref('https://images.unsplash.com/photo-1517486804612-ad986d5e1ee7?q=80&w=1920&h=1080&fit=crop&crop=entropy&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); // Contoh gambar casual outdoor

const parallaxEffect = () => {
  const scrolled = window.scrollY;
  const section = document.getElementById('profil'); // ID section ini
  const parallaxBg = section ? section.querySelector('.parallax-bg') : null;
  if (parallaxBg) {
    const sectionTop = section.offsetTop;
    parallaxBg.style.transform = `translateY(${ (scrolled - sectionTop) * 0.3}px)`; // Sesuaikan intensitas
  }
};

onMounted(() => {
  window.addEventListener('scroll', parallaxEffect);
});

onUnmounted(() => {
  window.removeEventListener('scroll', parallaxEffect);
});
</script>

<style scoped>
.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
  opacity: 0; /* Pastikan awal opacity 0 */
}
.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
  opacity: 0; /* Pastikan awal opacity 0 */
}
@keyframes slideInLeft {
  from { transform: translateX(-100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
@keyframes slideInRight {
  from { transform: translateX(100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
@keyframes pulse-border {
  0% { transform: scale(1); opacity: 0; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0; }
}
</style>
