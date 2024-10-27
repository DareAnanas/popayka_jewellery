<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
      // Example: [{ label: 'Red', color: '#FF5733' }, { label: 'Green', color: '#33FF57' }]
    },
    placeholder: {
      type: String,
      default: 'Select a color',
    },
  },
  data() {
    return {
      isOpen: false,
      selectedOption: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.$emit('update:modelValue', option);
      this.closeDropdown();
      console.log(this.isOpen);
    },
  },
};
</script>

<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle d-flex align-items-center" @click="toggleDropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span
        class="color-preview"
        :style="{ backgroundColor: selectedOption?.color || 'transparent' }"
      ></span>
      {{ selectedOption?.label || placeholder }}
    </button>
    <ul v-if="isOpen" class="dropdown-menu show" @click.outside="closeDropdown" aria-labelledby="dropdownMenuButton">
      <li
        class="dropdown-item d-flex align-items-center"
        v-for="(option, index) in options"
        :key="index"
        @click="selectOption(option)"
      >
        <span class="color-circle" :style="{ backgroundColor: option.color }"></span>
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.color-preview {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid black;
}

.dropdown-item:hover {
  background-color: #333;
}

.color-circle {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid black;
}
</style>
