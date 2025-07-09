<template>
  <section id="pendidikan" class="relative py-24 bg-gradient-to-br from-gray-50 to-blue-100 overflow-hidden">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22%3E%3Cpath fill=%22%23dbeafe%22 fill-opacity=%220.2%22 d=%22M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,176C672,171,768,181,864,186.7C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z%22/%3E%3C/svg%22)] opacity-70 animate-wave-slow"></div>

    <div class="container mx-auto px-6 z-10 relative">
      <SectionTitle title="Riwayat Pendidikan" class="text-gray-900" />
      <div v-if="loading" class="text-center text-gray-600 text-lg">Memuat data...</div>
      <div v-if="error" class="text-red-500 text-center mb-4 text-lg">{{ error }}</div>

      <div v-if="!loading && !error && educationHistory.length > 0" class="relative mt-12">
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-400 rounded-full shadow-lg"></div>

        <div class="space-y-16">
          <div v-for="(edu, index) in educationHistory" :key="edu.id" :class="{
            'md:flex-row-reverse': index % 2 === 0, // Item kanan
            'md:flex-row': index % 2 !== 0 // Item kiri
          }" class="flex flex-col md:flex-row items-center w-full relative z-10 group">

            <div :class="{
              'md:pr-12 md:text-right': index % 2 === 0,
              'md:pl-12 md:text-left': index % 2 !== 0,
              'animate-fade-in-right': index % 2 === 0,
              'animate-fade-in-left': index % 2 !== 0
            }" class="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
              <p class="font-semibold text-blue-600 text-lg mb-2">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ edu.institution }}</h3>
              <p class="text-gray-700 text-base">{{ edu.major }}</p>
            </div>

            <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl transform group-hover:rotate-180 transition-transform duration-500 absolute md:relative left-1/2 md:left-auto top-full md:top-auto -translate-x-1/2 md:translate-x-0 mt-4 md:mt-0 z-20">
              {{ index + 1 }}
            </div>

            <div class="hidden md:block w-1/2"></div>
          </div>
        </div>
      </div>
      <div v-else-if="!loading && !error && educationHistory.length === 0" class="text-gray-500 text-center mt-8 text-lg">
        Tidak ada data riwayat pendidikan yang tersedia.
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const educationHistory = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education')
    educationHistory.value = response.data
  } catch (err) {
    console.error('Error fetching education data:', err);
    error.value = 'Gagal memuat data riwayat pendidikan. Silakan coba lagi nanti.';
  } finally {
    loading.value = false;
  }
})

onUnmounted(() => {
})
</script>

<style scoped>
.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
  opacity: 0;
}
.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
  opacity: 0;
}
.animate-wave-slow {
  animation: wave 15s infinite linear;
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes wave {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}
</style>
