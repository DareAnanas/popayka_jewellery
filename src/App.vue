<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
</script>

<template>
  <Header></Header>
  <RouterView></RouterView>
</template>

<style scoped>

</style>
