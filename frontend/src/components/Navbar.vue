<template>
  <header class="bg-white shadow-lg sticky top-0 z-50 animate-fade-in-down">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 flex items-center">
        <span class="text-blue-600 mr-2"></span> Dicky Robyansyah
      </div>
      <ul class="flex space-x-8">
        <li v-for="link in navLinks" :key="link.id" class="relative group">
          <a :href="link.href" class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-1 transition-all duration-300 flex items-center">
            {{ link.text }}
            <span class="ml-1 transition-transform duration-300 group-hover:rotate-180">↻</span>
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