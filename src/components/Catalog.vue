<script>
import Dropdown from './Dropdown.vue';
import ColorDropdown from './ColorDropdown.vue';

export default {
  components: {
    Dropdown, ColorDropdown
  },
  data() {
    return {
      jewelryItems: [],
      jewelryItemsSorted: [],
      productOptions: [],
      metalOptions: [],
      colorOptions: [],
      selectedProductOption: 'будь-який',
      selectedMetalOption: 'будь-який',
      selectedColorOption: 'будь-який',
      searchText: '' // Додано для тексту пошуку
    }
  },
  methods: {
    filterJewelryItems() {
      this.jewelryItemsSorted = this.jewelryItems;

      if (this.selectedProductOption != 'будь-який') {
        this.jewelryItemsSorted = this.jewelryItemsSorted.filter((item) => {
          return item.type == this.selectedProductOption;
        });
      }

      if (this.selectedMetalOption != 'будь-який') {
        this.jewelryItemsSorted = this.jewelryItemsSorted.filter((item) => {
          return item.metal_name == this.selectedMetalOption;
        });
      }

      if (this.selectedColorOption != 'будь-який') {
        let regex = new RegExp(`\\(${this.selectedColorOption}\\)`, 'gm');
        this.jewelryItemsSorted = this.jewelryItemsSorted.filter((item) => regex.test(item.materials_list));
      }

      if (this.searchText.trim() !== '') {
        const searchLower = this.searchText.toLowerCase();
        this.jewelryItemsSorted = this.jewelryItemsSorted.filter((item) =>
          item.name.toLowerCase().includes(searchLower)
        );
      }
    },
    handleProductSelection(selectedProductOption) {
      this.selectedProductOption = selectedProductOption.toLowerCase();
      this.filterJewelryItems();
    },
    handleMetalSelection(selectedMetalOption) {
      this.selectedMetalOption = selectedMetalOption.toLowerCase();
      this.filterJewelryItems();
    },
    handleColorSelection(selectedColorOption) {
      this.selectedColorOption = selectedColorOption.label.toLowerCase();
      this.filterJewelryItems();
    },
    handleSearchInput(event) {
      this.searchText = event.target.value;
      this.filterJewelryItems();
    }
  },
  mounted() {
    fetch('/api/data/products-extended')
      .then(response => response.json())
      .then(data => {
        this.jewelryItems = data;
        this.jewelryItemsSorted = data;
      })
      .catch(error => {
        console.error('Error fetching jewelry items:', error);
      });

    fetch('/api/data/product-types')
      .then(response => response.json())
      .then(data => {
        this.productOptions.push('Будь-який');
        for (let product of data) {
          this.productOptions.push(product.type.charAt(0).toUpperCase() + product.type.slice(1));
        }
      })
      .catch(error => {
        console.error('Error fetching product types:', error);
      });

    fetch('/api/data/product-metals')
      .then(response => response.json())
      .then(data => {
        this.metalOptions.push('Будь-який');
        for (let metal of data) {
          this.metalOptions.push(metal.name.charAt(0).toUpperCase() + metal.name.slice(1));
        }
      })
      .catch(error => {
        console.error('Error fetching product metals:', error);
      });

    fetch('/api/data/product-colors')
      .then(response => response.json())
      .then(data => {
        this.colorOptions.push({
          label: 'Будь-який', color: 'transparent'
        });
        for (let color of data) {
          this.colorOptions.push({
            label: color.name.charAt(0).toUpperCase() + color.name.slice(1),
            color: color.code
          });
        }
      })
      .catch(error => {
        console.error('Error fetching product types:', error);
      });
  }
}
</script>

<template>
  <section class="shop_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Каталог товарів
        </h2>
      </div>
      <div class="row dropdown-gap align-items-center">
        <div>
          <div class="dropdown-tw">Пошук: </div>
          <input 
            type="text" 
            v-model="searchText" 
            @input="handleSearchInput" 
            placeholder="Введіть назву товару" 
            class="form-control" 
          />
        </div>
        <div>
          <div class="dropdown-tw">Тип виробу: </div>
          <Dropdown 
            :options="productOptions" 
            placeholder="Виберіть тип виробу"
            @update:modelValue="handleProductSelection"
          />
        </div>
        <div>
          <div class="dropdown-tw">Тип металу: </div>
          <Dropdown 
            :options="metalOptions" 
            placeholder="Виберіть тип металу"
            @update:modelValue="handleMetalSelection"
          />
        </div>
        <div>
          <div class="dropdown-tw">Колір вставки: </div>
          <ColorDropdown 
            :options="colorOptions" 
            placeholder="Виберіть колір вставки"
            @update:modelValue="handleColorSelection"
          />
        </div>
      </div>
      <div class="row">
        <div v-for="item in jewelryItemsSorted" :key="item.id" class="col-sm-6 col-md-4 col-lg-3" style="margin-top: 25px">
          <div class="box">
            <a>
              <div class="img-box">
                <img :src="`api/products/${item.id}.png`" alt="">
              </div>
              <div class="detail-box">
                <h6>
                  {{ item.name }}
                </h6>
                <h6>
                  Ціна
                  <span>
                    ₴{{ item.price }}
                  </span>
                </h6>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <a>
          Показати більше
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dropdown-gap {
  gap: 20px;
}
</style>
