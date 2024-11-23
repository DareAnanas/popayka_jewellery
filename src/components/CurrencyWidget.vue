<template>
  <div class="card w-100 shadow-sm">
    <div class="card-header text-white text-center">
      <h5>Курс Долара</h5>
    </div>
    <div class="card-body text-center">
      <div v-if="usdRate">
        <p class="mb-2">
          <strong>Купівля:</strong> ₴{{ parseFloat(usdRate.buy).toFixed(2) }}
        </p>
        <p>
          <strong>Продаж:</strong> ₴{{ parseFloat(usdRate.sale).toFixed(2) }}
        </p>
      </div>
      <div v-else>
        <p>Інформація недоступна</p>
      </div>
    </div>
    <div class="card-footer text-muted text-center">
      Оновлено {{ lastUpdated }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usdRate: null,
      lastUpdated: null,
    };
  },
  methods: {
    fetchCurrencyRates() {
      fetch('api/data/currency-rates')
        .then((response) => response.json())
        .then((data) => {
          this.usdRate = data.find((item) => item.ccy === 'USD');
          this.lastUpdated = new Date().toLocaleString();
        })
        .catch((error) => {
          console.error('Error fetching currency rates:', error);
        });
    },
  },
  mounted() {
    this.fetchCurrencyRates();
  },
};
</script>

<style scoped>
.card {
  max-width: 300px;
  margin: 20px auto;
}
.card-header {
  background-color: #160e0b;
}
</style>
