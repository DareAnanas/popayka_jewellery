<template>
  <section class="info_section layout_padding2">
    <div class="container">
      <div class="row info_form_social_row">
        <div class="col-md-8 col-lg-9">
          <div class="info_form">
            <form action="">
              <input type="email" placeholder="Введіть свою пошту">
              <button>
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
        <div class="col-md-4 col-lg-3">

          <div class="social_box">
            <a href="">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="row info_main_row">
        <div class="col-md-6 col-lg-3">
          <div class="info_links">
            <h4>
              Меню
            </h4>
            <div class="info_links_menu">
              <RouterLink to="/">Головна</RouterLink>
              <RouterLink to="/shop">Каталог</RouterLink>
              <RouterLink to="/offers">Пропозиції</RouterLink>
              <RouterLink to="/about">Про нас</RouterLink>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="info_insta">
            <h4>
              Інстаграм
            </h4>
            <div class="insta_box">
              <div class="img-box">
                <img src="@/assets/images/products/1.png" alt="">
              </div>
              <p>
                Малахітові прикраси
              </p>
            </div>
            <div class="insta_box">
              <div class="img-box">
                <img src="@/assets/images/products/2.png" alt="">
              </div>
              <p>
                Золоті ланцюжки
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="info_detail">
            <h4>
              Про нас
            </h4>
            <p class="mb-0">
              Наша ювелірна майстерня об’єднує досвідчених митців та інноваторів. Ми віримо, що кожна прикраса має розповідати історію, відображати емоції та надихати.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <h4>
            Контакти
          </h4>
          <div class="info_contact">
            <a href="">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                вул. Немирівська 13
              </span>
            </a>
            <a href="">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>
                тел. +380989745446
              </span>
            </a>
            <a href="">
              <i class="fa fa-envelope"></i>
              <span>
                popyaka.jewellry@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>