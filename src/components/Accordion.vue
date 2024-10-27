<script>
export default {
  name: 'Accordion',
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
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    isActive(index) {
      return this.activeIndex === index;
    },
    onEnter(el) {
      el.style.maxHeight = '0';
      el.style.opacity = '0';
      el.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
      requestAnimationFrame(() => {
        el.style.maxHeight = el.scrollHeight + 'px';
        el.style.opacity = '1';
      });
    },
    onLeave(el) {
      el.style.maxHeight = el.scrollHeight + 'px';
      el.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
      requestAnimationFrame(() => {
        el.style.maxHeight = '0';
        el.style.opacity = '0';
      });
    },
  },
};
</script>

<template>
  <div class="accordion">
    <div 
      v-for="(item, index) in items" 
      :key="index" 
      class="accordion-item"
    >
      <div 
        class="accordion-header" 
        @click="toggle(index)"
      >
        <h3>{{ item.title }}</h3>
      </div>
      <transition
        name="accordion"
        @enter="onEnter"
        @leave="onLeave"
      >
        <div 
          v-show="isActive(index)" 
          ref="content"
          class="accordion-content"
        >
          <p>{{ item.content }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-family: 'Playfair Display', serif;
}
.accordion {
  width: 100%;
  max-width: 600px;
  margin: auto;
  border: 1px solid #ddd;
  overflow: hidden;
}

.accordion-item + .accordion-item {
  border-top: 1px solid #ddd;
}

.accordion-header {
  background-color: #f1f1f1;
  cursor: pointer;
  padding: 15px;
  transition: background-color 0.3s;
}

.accordion-header:hover {
  background-color: #e0e0e0;
}

.accordion-content {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  padding: 10px;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.accordion-enter-from {
  max-height: 0;
  opacity: 0;
}

.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
