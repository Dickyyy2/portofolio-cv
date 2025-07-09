<template>
  <section id="proyek" class="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden py-20">
    <div class="absolute inset-0 bg-cover bg-center parallax-bg" :style="{ backgroundImage: `url('${bgImage}')` }"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-950 opacity-80 z-10"></div>

    <div class="relative z-20 p-8 max-w-6xl w-full animate-fade-in">
      <h2 class="text-5xl md:text-6xl font-bold mb-12 text-teal-400 drop-shadow-lg">Proyek Unggulan</h2>
      <div v-if="error" class="text-red-500 text-center mb-4">{{ error }}</div>
      <div v-else-if="loading" class="text-gray-300 text-center text-lg">Memuat proyek...</div>
      <div v-else-if="projects.length > 0">
        <div class="bg-gray-800 bg-opacity-70 rounded-xl shadow-xl overflow-hidden mb-12 transform hover:scale-[1.01] transition duration-300 text-left flex flex-col lg:flex-row">
          <img :src="projects[0].image" :alt="projects[0].title" class="w-full lg:w-2/3 h-80 object-cover object-center cursor-pointer flex-shrink-0" @click="openModal(projects[0].image)" />
          <div class="p-8 flex flex-col justify-center flex-grow">
            <h3 class="text-4xl font-bold mb-3 text-teal-400">{{ projects[0].title }}</h3>
            <p class="text-xl mb-4 text-gray-300 leading-relaxed">{{ projects[0].description }}</p>
            <p class="text-base text-gray-400 mb-6">Stack: <span class="font-medium text-white">{{ Array.isArray(projects[0].tech) ? projects[0].tech.join(', ') : '' }}</span></p>
            <div class="flex space-x-4 mt-auto">
              <button @click="openModal(projects[0].image)" class="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full text-lg transition duration-300">
                <i class="fas fa-search-plus mr-2"></i>Lihat Gambar Full
              </button>
              <a v-if="projects[0].link && projects[0].link !== '#'" :href="projects[0].link" target="_blank" class="border-2 border-teal-600 text-teal-400 hover:bg-teal-600 hover:text-white px-5 py-2 rounded-full text-lg transition duration-300">
                <i class="fas fa-link mr-2"></i>Demo
              </a>
              <a v-if="projects[0].githubLink && projects[0].githubLink !== '#'" :href="projects[0].githubLink" target="_blank" class="border-2 border-teal-600 text-teal-400 hover:bg-teal-600 hover:text-white px-5 py-2 rounded-full text-lg transition duration-300">
                <i class="fab fa-github mr-2"></i>Code
              </a>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div v-for="(project, index) in projects.slice(1)" :key="project.title" class="bg-gray-800 bg-opacity-70 rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300 text-left">
            <img :src="project.image" :alt="project.title" class="w-full h-56 object-cover object-center border-b border-gray-700 cursor-pointer" @click="openModal(project.image)" />
            <div class="p-6 flex flex-col h-full">
              <h3 class="text-3xl font-semibold mb-3 text-teal-400">{{ project.title }}</h3>
              <p class="text-lg mb-4 text-gray-300 flex-grow">{{ project.description }}</p>
              <p class="text-sm text-gray-400 mb-6 mt-auto">Stack: <span class="font-medium text-white">{{ Array.isArray(project.tech) ? project.tech.join(', ') : '' }}</span></p>
              <div class="flex space-x-4">
                <button @click="openModal(project.image)" class="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full text-lg transition duration-300">
                  <i class="fas fa-search-plus mr-2"></i>Lihat Gambar Full
                </button>
                <a v-if="project.link && project.link !== '#'" :href="project.link" target="_blank" class="border-2 border-teal-600 text-teal-400 hover:bg-teal-600 hover:text-white px-5 py-2 rounded-full text-lg transition duration-300">
                  <i class="fas fa-link mr-2"></i>Demo
                </a>
                <a v-if="project.githubLink && project.githubLink !== '#'" :href="project.githubLink" target="_blank" class="border-2 border-teal-600 text-teal-400 hover:bg-teal-600 hover:text-white px-5 py-2 rounded-full text-lg transition duration-300">
                  <i class="fab fa-github mr-2"></i>Code
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      <div v-else class="text-gray-300 text-center text-lg mt-8">Tidak ada proyek untuk ditampilkan.</div>
    </div>

    <ImageModal :is-visible="isModalVisible" :image-url="currentModalImage" @close="closeModal" />
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import ImageModal from './ImageModal.vue';

const bgImage = ref('https://images.unsplash.com/photo-1596700028249-f0331070e176?q=80&w=1920&h=1080&fit=crop&crop=entropy&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

const projects = ref([]);
const loading = ref(true);
const error = ref(null);

const isModalVisible = ref(false);
const currentModalImage = ref('');

const openModal = (imageUrl) => {
  currentModalImage.value = imageUrl;
  isModalVisible.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalVisible.value = false;
  currentModalImage.value = '';
  document.body.style.overflow = '';
};

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects');
    projects.value = response.data;
  } catch (err) {
    error.value = 'Gagal memuat data proyek. Periksa koneksi atau backend.';
    console.error('Error fetching projects data:', err);
  } finally {
    loading.value = false;
  }
  window.addEventListener('scroll', parallaxEffect);
});

onUnmounted(() => {
  window.removeEventListener('scroll', parallaxEffect);
});

const parallaxEffect = () => {
  const scrolled = window.scrollY;
  const section = document.getElementById('proyek');
  const parallaxBg = section ? section.querySelector('.parallax-bg') : null;
  if (parallaxBg) {
    const sectionTop = section.offsetTop;
    parallaxBg.style.transform = `translateY(${ (scrolled - sectionTop) * 0.3}px)`;
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}
</style>