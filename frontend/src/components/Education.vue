<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const educationHistory = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('/api/education')
    educationHistory.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <section id="pendidikan" class="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
    <div class="container mx-auto px-6 z-10">
      <SectionTitle title="Riwayat Pendidikan" />
      <div v-if="loading" class="text-center text-gray-600">Memuat data...</div>
      <div v-if="error" class="text-red-500 text-center mb-4">{{ error }}</div>
      <div class="relative">
        <div class="absolute h-full border-r-4 border-dashed border-blue-300 transform -translate-x-1/2 left-1/2"></div>
        <div class="space-y-12">
          <div v-for="(edu, index) in educationHistory" :key="edu.id" class="flex items-center justify-between w-full group hover:bg-gray-50 p-6 rounded-xl shadow-md transition-all duration-500 transform hover:scale-105 hover:shadow-lg">
            <div v-if="index % 2 === 0" class="w-1/2 pr-8 text-right animate-fade-in-right">
              <p class="font-semibold text-blue-600 text-lg mb-2">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ edu.institution }}</h3>
              <p class="text-gray-700">{{ edu.major }}</p>
            </div>
            <div v-else class="w-1/2 pl-8 text-left animate-fade-in-left">
              <p class="font-semibold text-blue-600 text-lg mb-2">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ edu.institution }}</h3>
              <p class="text-gray-700">{{ edu.major }}</p>
            </div>
            <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl transform group-hover:rotate-180 transition-transform duration-500">
              {{ index + 1 }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22%3E%3Cpath fill=%22%23dbeafe%22 fill-opacity=%220.1%22 d=%22M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,176C672,171,768,181,864,186.7C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z%22/%3E%3C/svg%22)] opacity-50 animate-wave"></div>
  </section>
</template>

<style scoped>
.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
}
.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
}
.animate-wave {
  animation: wave 12s infinite linear;
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