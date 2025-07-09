<template>
  <section id="kontak" class="relative py-24 bg-gradient-to-br from-gray-900 to-black overflow-hidden text-white">
    <div class="absolute inset-0 bg-cover bg-center parallax-bg" :style="{ backgroundImage: `url('${bgImage}')` }"></div>
    <div class="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

    <div class="container mx-auto px-6 z-20 relative">
      <SectionTitle title="Hubungi Saya" class="text-white" />
      <p class="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed drop-shadow-md">Tertarik untuk bekerja sama atau sekadar ingin menyapa? Klik tombol di bawah ini untuk mengirim email kepada saya.</p>

      <div class="max-w-xl mx-auto bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-2xl animate-fade-in-up flex flex-col items-center">
        <a :href="`mailto:dickyroby@students.amikom.ac.id?subject=Pesan dari Portofolio Anda&body=Halo Dicky, saya tertarik dengan portofolio Anda. [Tulis pesan Anda di sini]%0D%0A%0D%0A[Nama Anda]%0D%0A[Email Anda]`"
           class="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl py-4 rounded-full transition duration-300 shadow-lg transform hover:-translate-y-1 max-w-sm text-center"
           target="_blank" rel="noopener noreferrer">
          Kirim Email Langsung
        </a>
        </div>

      <div class="flex justify-center space-x-8 mt-12 mb-8 text-4xl">
        <a href="https://github.com/Dickyyy2" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110" title="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:youremail@example.com" class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110" title="Email"><i class="fas fa-envelope"></i></a>
      </div>
      <p class="text-gray-500 text-sm mt-4">
        © {{ new Date().getFullYear() }} Dicky Robyansyah
. All Rights Reserved.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SectionTitle from './SectionTitle.vue';
// Axios tidak lagi diperlukan untuk fungsionalitas mailto:
// import axios from 'axios';

const bgImage = ref('https://images.unsplash.com/photo-1582236166453-61b6e41b9d10?q=80&w=1920&h=1080&fit=crop&crop=entropy&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

// Variabel form, isSubmitting, submitMessage tidak diperlukan lagi untuk mailto:
// const form = ref({ name: '', email: '', subject: '', message: '' });
// const isSubmitting = ref(false);
// const submitMessage = ref('');
// const submitMessageType = ref('');

// Fungsi submitForm tidak diperlukan lagi untuk mailto:
/*
const submitForm = async () => {
  // ... (kode submitForm sebelumnya, yang tidak lagi relevan)
};
*/

const parallaxEffect = () => {
  const scrolled = window.scrollY;
  const section = document.getElementById('kontak');
  const parallaxBg = section ? section.querySelector('.parallax-bg') : null;
  if (parallaxBg) {
    const sectionTop = section.offsetTop;
    const yOffset = (scrolled - sectionTop) * 0.3;
    parallaxBg.style.transform = `translateY(${yOffset}px)`;
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
.animate-fade-in-up {
  animation: fadeInFromBottom 1s ease-out forwards;
}

@keyframes fadeInFromBottom {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Style untuk tombol saat disabled tidak lagi relevan */
/*
button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
*/
</style>

