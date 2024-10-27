<script>
export default {
  data() {
    return {
      cards: []
    }
  },
  mounted() {
    fetch('/api/team_history.json')
      .then(response => response.json())
      .then(data => {
        this.cards = data.cards;
      })
      .catch(error => {
        console.error('Error fetching history cards items:', error);
      });
  }
}
</script>

<template>
  <section class="layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Історія нашої команди
        </h2>
      </div>
      <div class="row card-gap">
        <div v-for="card in cards" class="card">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">
              {{ card.text }}
            </p>
          </div>
        </div>
      </div>
      
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
.card-gap {
  gap: 20px;
}
</style>