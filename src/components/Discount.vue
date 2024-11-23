<script>
import Accordion from '@/components/Accordion.vue';

export default {
  components: {
    Accordion,
  },
  data() {
    return {
      jewelryItems: {
        'діамант': [],
        'малахіт': [],
        'платина': []
      },
      accordionItems: [
        { title: 'Знижка 15% на прикраси з діамантами', content: [] },
        { title: 'Знижка до 10% на вироби з малахіту', content: [] },
        { title: 'Платинові вироби 20% знижка', content: [] },
      ],
    };
  },
  mounted() {
    fetch('/api/data/products-extended')
      .then(response => response.json())
      .then(data => {
        this.jewelryItems['діамант'] = data.filter(item => [5, 11, 14].includes(item.id));
        this.jewelryItems['малахіт'] = data.filter(item => [1, 4, 6].includes(item.id));
        this.jewelryItems['платина'] = data.filter(item => [12].includes(item.id));
        this.accordionItems[0].content = this.jewelryItems['діамант'];
        this.accordionItems[1].content = this.jewelryItems['малахіт'];
        this.accordionItems[2].content = this.jewelryItems['платина'];
      })
      .catch(error => {
        console.error('Error fetching jewelry items:', error);
      });
  }
};
</script>

<template>
  <section class="layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>Пропозиції</h2>
      </div>
      <!-- Вставляємо компонент Accordion -->
      <Accordion :items="accordionItems" />
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
