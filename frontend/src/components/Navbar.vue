<template>
  <header class="bg-gray-950 dark:bg-gray-800 shadow-2xl sticky top-0 z-50 transition-colors duration-300 animate-fade-in-down">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#hero" class="text-2xl font-extrabold text-white hover:text-blue-500 transition-colors duration-300 flex items-center">
        <span class="text-blue-500 mr-2 transform rotate-45 inline-block text-3xl leading-none">⚡</span> Dicky Robyansyah
      </a>

      <div class="flex items-center space-x-6">
        <ul class="hidden md:flex space-x-8">
          <li v-for="link in navLinks" :key="link.id" class="relative group">
            <a :href="link.href" class="text-gray-300 hover:text-blue-400 font-semibold transition-all duration-300 flex items-center text-lg py-2">
              {{ link.text }}
              <span class="ml-1 text-sm text-blue-300 transition-transform duration-300 group-hover:rotate-180">🚀</span>
            </a>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        <button @click="toggleMobileMenu"
                class="md:hidden w-10 h-10 flex items-center justify-center rounded-md bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10 relative">
          <div class="hamburger-icon" :class="{ 'open': isMobileMenuOpen }">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </button>
      </div>
    </nav>

    <Transition name="slide-down">
      <div v-if="isMobileMenuOpen" class="md:hidden bg-gray-900 dark:bg-gray-700 shadow-lg pb-4">
        <ul class="flex flex-col items-center space-y-4 py-4">
          <li v-for="link in navLinks" :key="link.id">
            <a :href="link.href" @click="closeMobileMenu"
               class="text-gray-300 hover:text-blue-400 font-semibold transition-colors duration-300 text-xl py-2 px-4 block">
              {{ link.text }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const navLinks = ref([
  { id: 1, href: '#hero', text: 'Home' },
  { id: 2, href: '#education', text: 'Pendidikan' },
  { id: 3, href: '#skills', text: 'Keahlian' },
  { id: 4, href: '#projects', text: 'Proyek' },
  { id: 5, href: '#contact', text: 'Kontak' },
]);

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
.animate-fade-in-down {
  animation: fadeInDown 0.5s ease-out;
}
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.3s ease-out;
  max-height: 300px;
  overflow: hidden;
}

.slide-down-enter-from, .slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}

/* Custom Hamburger Icon Styles */
.hamburger-icon {
  width: 24px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
}

.bar {
  width: 100%;
  height: 3px;
  background-color: #f3f4f6;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.hamburger-icon.open .bar:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}

.hamburger-icon.open .bar:nth-child(2) {
  opacity: 0;
}

.hamburger-icon.open .bar:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
}
</style>
