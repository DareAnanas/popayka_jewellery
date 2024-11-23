<script setup>
import Footer from '@/components/Footer.vue';
import Info from '@/components/FooterInfo.vue';
import Discount from '@/components/Discount.vue';
import CurrencyWidget from '@/components/CurrencyWidget.vue';
import YouTubeVideo from '@/components/YouTubeVideo.vue';
</script>

<template>
  <div>
    <Discount></Discount>
    <YouTubeVideo 
      videoId="64DiJ1eqAXQ?si=s-ZA364Q4TotfnKg" 
      title="Як виготовити золотий браслет?" 
      description="Дізнайтеся більше про виготовлення ювелірних прикрас у цьому відео!" 
    />
    <CurrencyWidget></CurrencyWidget>
    <Info></Info>
    <Footer></Footer>
  </div>
</template>

<style scoped>

</style>