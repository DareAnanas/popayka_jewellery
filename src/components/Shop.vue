<script>
export default {
  data() {
    return {
      jewelryItems: []
    }
  },
  mounted() {
    // Fetch data from the Express server
    fetch('/api/data/products')
      .then(response => response.json())
      .then(data => {
        this.jewelryItems = data;
      })
      .catch(error => {
        console.error('Error fetching jewelry items:', error);
      });
  }
}
</script>

<template>
  <section class="shop_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Останні продукти
        </h2>
      </div>
      <div class="row">
        <div v-for="item in jewelryItems" :key="item.id" class="col-sm-6 col-md-4 col-lg-3" style="margin-top: 25px">
          <div class="box">
            <a href="">
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
              <div class="new">
                <span>
                  Новинка
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <RouterLink to="/shop">
          Перейти до каталогу
        </RouterLink>
      </div>
    </div>
  </section>
</template>