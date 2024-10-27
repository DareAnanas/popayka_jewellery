<script>
import Accordion from '@/components/Accordion.vue';
export default {
  components: {
     Accordion,
  },
  data() {
    return {
      accordionItems: [
        { title: 'Знижка 15% на прикраси з діамантами', content: 'Елемент' },
        { title: 'Знижка до 10% на вироби з малахіту', content: 'Знижка до 10% на вироби з малахіту' },
        { title: 'Платинові вироби 20% знижка', content: 'Content for item 3.' },
      ],
      jewelryItems: []
    };
  },
  mounted() {
    // Fetch data from the Express server
    fetch('/api/data/products')
      .then(response => response.json())
      .then(data => {
        this.jewelryItems = data.slice(0, 3);
      })
      .catch(error => {
        console.error('Error fetching jewelry items:', error);
      })
  }
};

</script>

<template>
  <section class="layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Пропозиції
        </h2>
      </div>
      <Accordion :items="accordionItems" :contentItems="jewelryItems"/>
    </div>
  </section>
</template>

<style scoped>
.layout_padding {
  padding: 50px 50px 0 50px;
}
.heading_container {
  margin-bottom: 50px;
}
</style>