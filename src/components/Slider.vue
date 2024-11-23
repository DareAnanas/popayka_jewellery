<template>
  <section class="slider_section position-relative">
    <div class="slider_bg_box">
      <img src="@/assets/images/header-image2.jpg" alt="">
    </div>
    <div class="slider_bg"></div>
    <div class="container">
      <div class="col-md-9 col-lg-8">
        <div class="detail-box">
          <h1>
            Ювелірна майстерня
            <br> Попайки
          </h1>
          <p>
            Ми створюємо прикраси, що зберігають емоції та стають частиною ваших історій. 
            Кожен виріб у нас – це поєднання традицій, сучасних технологій та натхнення.
          </p>
          <div>
            <RouterLink to="/shop" class="slider-link">
              До товарів
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.detail-box {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
</style>
