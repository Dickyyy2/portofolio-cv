<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const skills = ref([]);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills');
    skills.value = response.data;
    console.log('Skills data fetched:', skills.value);
  } catch (err) {
    error.value = 'Gagal memuat data keahlian. Periksa koneksi atau backend.';
    console.error('Error fetching skills data:', err);
  }
});
</script>
<template>
  <section id="skill" class="py-24 bg-gradient-to-br from-gray-100 to-blue-50 relative overflow-hidden">
    <div class="container mx-auto px-6 z-10">
      <SectionTitle title="Keahlian & Teknologi" />
      <div v-if="error" class="text-red-500 text-center mb-4">{{ error }}</div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="skill in skills" :key="skill.name" class="bg-white p-6 rounded-xl shadow-lg text-center transform hover:-translate-y-4 hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-br from-blue-50 to-purple-50 cursor-pointer group">
          <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full transition-all duration-300 group-hover:bg-blue-200">
            <img :src="`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${skill.name.toLowerCase().replace(/ /g, '-').replace(/&/g, '').replace(/\./g, '')}.svg`" :alt="skill.name + ' Icon'" class="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{{ skill.name }}</h3>
          <div class="w-28 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div :style="{ width: skill.level === 'Mahir' ? '90%' : skill.level === 'Menengah' ? '70%' : '50%', background: 'linear-gradient(to right, #3b82f6, #9333ea)' }" class="h-full rounded-full transition-all duration-500"></div>
          </div>
          <p class="text-gray-600 mt-2 text-lg font-medium">{{ skill.level }} <span class="text-green-500 animate-pulse">★</span></p>
        </div>
      </div>
    </div>
    <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22%3E%3Cpath fill=%22%23dbeafe%22 fill-opacity=%220.1%22 d=%22M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,176C672,171,768,181,864,186.7C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z%22/%3E%3C/svg%22)] opacity-30 animate-wave-slow"></div>
  </section>
</template>

<style scoped>
.animate-pulse {
  animation: pulse 1.5s infinite;
}
.animate-wave-slow {
  animation: wave 15s infinite linear;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
@keyframes wave {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}
</style>