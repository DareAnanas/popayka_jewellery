<script>
export default {
  data() {
    return {
      isActiveNav: false
    }
  },
  methods: {
    openNav() {
      this.isActiveNav = !this.isActiveNav;
    }
  },
  computed: {
    innerpageHeader() {
      return this.$route.name != 'home';
    }
  }
}
</script>

<template>
  <!-- header section strats -->
  <header class="header_section" :class="{innerpage_header: innerpageHeader}">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <RouterLink class="navbar-brand" to="/">
          <span>
            <img class="logo" src="@/assets/images/popayka jewelery logo.png" alt="">
            Popayka Jewelery
          </span>
        </RouterLink>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Головна<span class="sr-only">(current)</span></RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/shop">Каталог<span class="sr-only">(current)</span></RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/offers">Пропозиції<span class="sr-only">(current)</span></RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">Про нас<span class="sr-only">(current)</span></RouterLink>
            </li>
          </ul>
        </div>
        <div class="" id="">

          <div class="custom_menu-btn" :class="{'menu_btn-style': isActiveNav}">
            <button @click="openNav">
              <span class="s-1"> </span>
              <span class="s-2"> </span>
              <span class="s-3"> </span>
            </button>
            <div id="myNav" class="overlay" :class="{menu_width: isActiveNav}">
              <div class="overlay-content">
                <RouterLink @click="openNav" to="/">Головна</RouterLink>
                <RouterLink @click="openNav" to="/shop">Каталог</RouterLink>
                <RouterLink @click="openNav" to="/offers">Пропозиції</RouterLink>
                <RouterLink @click="openNav" to="/about">Про нас</RouterLink>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </div>
  </header>
  <!-- end header section -->
</template>

<style scoped>
.logo {
  width: 50px;
}
.nav-link {
  color: white;
}
.nav-link:hover {
  color: #fd9c6b;
}
</style>