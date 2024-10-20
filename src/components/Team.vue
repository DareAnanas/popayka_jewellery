<script>
export default {
  data() {
    return {
      workers: []
    }
  },
  methods: {
    getWorkerAlign(index) {
      if (index % 2 == 0) {
        return 'justify-content-start';
      } else {
        return 'justify-content-end';
      }
    }
  },
  mounted() {
    // Fetch data from the Express server
    fetch('/api/data/workers')
      .then(response => response.json())
      .then(data => {
        this.workers = data;
      })
      .catch(error => {
        console.error('Error fetching workers:', error);
      });
  }
}
</script>

<template>
  <section class="layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Команда нашої майстерні
        </h2>
      </div>

      <div v-for="(worker, index) in workers" :key="worker.id" class="row" :class="getWorkerAlign(index)">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4 d-flex align-items-center">
              <img :src="`/api/workers/${index+1}.jpg`" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ worker.name }}</h5>
                <p class="card-text"><small class="text-muted">{{ worker.position }}</small></p>
                <p class="card-text">{{ worker.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.layout_padding {
  padding: 50px;
}
.heading_container {
  margin-bottom: 50px;
}
</style>