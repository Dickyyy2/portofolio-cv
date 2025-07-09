<template>
  <section id="profil" class="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center bg-gradient-to-r from-white to-blue-50 rounded-xl shadow-2xl overflow-hidden relative">
    <div class="md:w-1/2 mb-10 md:mb-0 z-10">
      <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 animate-slide-in-left" style="animation-delay: 200ms">
        Halo, Saya <span class="text-blue-600">Dicky Robyansyah</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-700 mb-8 animate-slide-in-left" style="animation-delay: 400ms">
        Fullstack Developer | Saya memiliki pengalaman 3 tahun dalam pengembangan web dan suka mengotak-atik kode.
      </p>
      <a href="#kontak" class="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 animate-slide-in-left hover:scale-105" style="animation-delay: 600ms">
        Hubungi Saya
      </a>
    </div>
    <div class="md:w-1/2 flex justify-center animate-slide-in-right z-10">
      <div class="relative">
        <img src="@/assets/profile.jpeg" alt="Foto Dicky Robyansyah" class="w-80 h-80 rounded-full object-cover shadow-2xl" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-out forwards;
}
.animate-slide-in-right {
  animation: slideInRight 0.6s ease-out forwards;
}
@keyframes slideInLeft {
  from { transform: translateX(-100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
@keyframes slideInRight {
  from { transform: translateX(100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>