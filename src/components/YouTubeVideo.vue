<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-sm">
          <div class="card-header text-white text-center">
            <h5>{{ title }}</h5>
          </div>
          <div class="card-body">
            <iframe width="560" height="315" 
              :src="videoUrl" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
          </div>
          <div class="card-footer text-muted text-center">
            {{ description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: "Відео з YouTube",
    },
    description: {
      type: String,
      default: "Перегляньте це відео для додаткової інформації.",
    },
  },
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${this.videoId}`;
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 20px;
}
.card-body {
  display: flex;
  justify-content: center;
}
.card-header {
  background-color: #160e0b;
}
</style>
