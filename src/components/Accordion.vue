<template>
  <div class="accordion">
    <div 
      v-for="(item, index) in items" 
      :key="index" 
      class="accordion-item"
    >
      <!-- Заголовок акордеона -->
      <div 
        class="accordion-header"
        @click="toggleAccordion(index)"
      >
        <h4>{{ item.title }}</h4>
      </div>

      <!-- Контент акордеона з анімацією -->
      <transition name="accordion">
        <div 
          v-if="activeIndex === index" 
          class="accordion-content"
        >
          <div class="row justify-content-center">
            <div 
              v-for="contentItem in item.content" 
              :key="contentItem.id" 
              class="col-sm-6 col-md-4 col-lg-3"
            >
              <div class="card h-100 shadow-sm">
                <!-- Зображення картки -->
                <img 
                  :src="`api/products/${contentItem.id}.png`" 
                  class="card-img-top" 
                  :alt="contentItem.name"
                >
                <!-- Тіло картки -->
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title text-center">{{ contentItem.name }}</h5>
                  <p class="card-text text-center text-muted mb-3">
                    Ціна: <span class="fw-bold">₴{{ contentItem.price }}</span>
                  </p>
                  <!-- Кнопка -->
                  <div class="mt-auto align-self-center">
                    <a href="https://gems.ua/" class="btn-box">
                      Детальніше
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: null,
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.accordion-item {
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
}

.accordion-header {
  background: #f7f7f7;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
}

.accordion-content {
  padding: 20px;
  background: #fff;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}

.accordion-header h4 {
  font-family: 'Playfair Display';
}

.btn-box {
  display: inline-block;
  padding: 10px 40px;
  background-color: #fd9c6b;
  color: #ffffff;
  border-radius: 5px;
  border: 1px solid #fd9c6b;
  -webkit-transition: all .2s;
  transition: all .2s;
}

.btn-box:hover {
  background-color: transparent;
  color: #fd9c6b;
}
</style>
