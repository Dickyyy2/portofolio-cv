<template>
  <header class="bg-gray-950 shadow-2xl sticky top-0 z-50 animate-fade-in-down">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-3xl font-extrabold text-white hover:text-blue-500 transition-colors duration-300 flex items-center">
        <span class="text-blue-500 mr-2 transform rotate-45 inline-block text-4xl leading-none">⚡</span> Dicky Robyansyah
      </div>
      <ul class="flex space-x-8">
        <li v-for="link in navLinks" :key="link.id" class="relative group">
          <a :href="link.href" class="text-gray-300 hover:text-blue-400 font-semibold transition-all duration-300 flex items-center text-lg py-2">
            {{ link.text }}
            <span class="ml-1 text-sm text-blue-300 transition-transform duration-300 group-hover:rotate-180">🚀</span>
          </a>
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const navLinks = ref([
  { id: 1, href: '#profil', text: 'Profil' },
  { id: 2, href: '#pendidikan', text: 'Pendidikan' },
  { id: 3, href: '#skill', text: 'Skill' },
  { id: 4, href: '#proyek', text: 'Proyek' },
  { id: 5, href: '#kontak', text: 'Kontak' },
]);
</script>

<style scoped>
.animate-fade-in-down {
  animation: fadeInDown 0.5s ease-out;
}
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
