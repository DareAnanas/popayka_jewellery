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
          <div class="row">
            <div 
              v-for="contentItem in item.content" 
              :key="contentItem.id" 
              class="col-sm-6 col-md-4 col-lg-3"
              style="margin-top: 25px"
            >
              <div class="box">
                <a href="">
                  <div class="img-box">
                    <img :src="`api/products/${contentItem.id}.png`" alt="">
                  </div>
                  <div class="detail-box">
                    <h6>{{ contentItem.name }}</h6>
                    <h6>
                      Ціна
                      <span>₴{{ contentItem.price }}</span>
                    </h6>
                  </div>
                </a>
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

/* Анімація для акордеону */
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
  max-height: 500px; /* Орієнтовна висота. Можна збільшити за потреби */
  opacity: 1;
}
</style>
