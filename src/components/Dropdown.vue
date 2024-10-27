<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Select an option',
    },
  },
  data() {
    return {
      isOpen: false,
      selected: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      console.log('closeDropdown')
      this.isOpen = false;
    },
    selectOption(option) {
      this.selected = option;
      this.$emit('update:modelValue', option);
      this.closeDropdown();
    },
  },
};
</script>

<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" @click="toggleDropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{ selected || placeholder }}
    </button>
    <ul v-if="isOpen" @click.outside="closeDropdown" class="dropdown-menu show" aria-labelledby="dropdownMenuButton">
      <li 
      class="dropdown-item"
      v-for="(option, index) in options"
      @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown-item:hover {
  background-color: #333;
}
</style>
