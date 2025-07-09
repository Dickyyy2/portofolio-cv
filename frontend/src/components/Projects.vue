<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const projects = ref([]);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects');
    projects.value = response.data;
    console.log('Projects data fetched:', projects.value);
  } catch (err) {
    error.value = 'Gagal memuat data proyek. Periksa koneksi atau backend.';
    console.error('Error fetching projects data:', err);
  }
});
</script>
<template>
  <section id="proyek" class="py-24 bg-gradient-to-br from-white to-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />
      <div v-if="error" class="text-red-500 text-center mb-4">{{ error }}</div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.title" class="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <img :src="project.image" alt="Gambar Proyek" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
            <p class="text-gray-700 mb-4 line-clamp-2">{{ project.description }}</p>
            <div class="mb-4 flex flex-wrap gap-2">
              <span v-for="t in project.tech" :key="t" class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full animate-pulse-once">{{ t }}</span>
            </div>
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold hover:underline flex items-center">
              Lihat Detail → <span class="ml-1 animate-bounce">🚀</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-pulse-once {
  animation: pulse 1s ease-out;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
</style>