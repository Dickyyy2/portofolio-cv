<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue'; // Import komponen Profil
import Education from './components/Education.vue'; // Import komponen Pendidikan
import Skills from './components/Skills.vue'; // Import komponen Skill
import Projects from './components/Projects.vue'; // Import komponen Proyek
import Contact from './components/Contact.vue'; // Import komponen Kontak

// Jika Anda memiliki AppFooter terpisah, tambahkan di sini
// import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div id="app" class="relative">
    <Navbar />
    <main>
      <Hero />     <Education />
      <Skills />
      <Projects />
      <Contact />     </main>
    </div>
</template>

<style>
/* Global styles from src/assets/main.css will apply */
/* No specific styles needed here for App.vue */
</style>
