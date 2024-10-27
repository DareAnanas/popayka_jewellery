<script setup>
import Catalog from '@/components/Catalog.vue';
import Info from '@/components/FooterInfo.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div>
    <Catalog></Catalog>
    <Info></Info>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.layout_padding {
  padding: 50px;
}
.heading_container {
  margin-bottom: 50px;
}
</style>
