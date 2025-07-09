<script setup>
import SectionTitle from './SectionTitle.vue';
</script>
<template>
  <footer id="kontak" class="py-24 bg-gray-900 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />
      <p class="text-lg md:text-xl text-gray-300 mb-8">Saya siap terhubung dan membantu Anda!</p>
      <a href="mailto:emailanda@example.com" class="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg mb-12 inline-block">
        Kirim Email
      </a>
      <div class="flex justify-center space-x-8 mb-8">
        <a href="#" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="#" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110">
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
      <p class="text-gray-500 text-sm">
        © {{ new Date().getFullYear() }} Dicky Robyansyah. Dibuat dengan ❤️
      </p>
    </div>
  </footer>
</template>