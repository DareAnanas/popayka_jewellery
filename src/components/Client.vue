<script>
export default {
  data() {
    return {
      activeIndex: 0,
      slides: [
        'First slide', 'Second slide', 'Third slide', 'Fourth slide',
        'Fifth slide', 'Sixth slide'
      ],
      animationPlaying: false,
      noTransition: false,
    }
  },
  methods: {
    translateStyle(index) {
      if (index < this.activeIndex) {
        return 'translateX(-100%)';
      } else if (index == this.activeIndex) {
        return 'translateX(0%)';
      } else {
        return 'translateX(100%)';
      }
    },
    moveLeft() {
      if (this.animationPlaying) return;
      this.animationPlaying = true;

      setTimeout(() => {
        this.animationPlaying = false;
        this.noTransition = false;
      }, 600);

      if (this.activeIndex > 0) {
        this.activeIndex--;
      } else {
        this.noTransition = true;
        this.activeIndex = this.slides.length - 1;
      }
    },
    moveRight() {
      if (this.animationPlaying) return;
      this.animationPlaying = true;
      setTimeout(() => {
        this.animationPlaying = false;
        this.noTransition = false;
      }, 600);

      if (this.activeIndex < this.slides.length - 1) {
        this.activeIndex++;
      } else {
        this.noTransition = true;
        this.activeIndex = 0;
      }
    },
    getTransitionStatus(index) {
      if (this.noTransition) {
        if (index == 0 || index == this.slides.length - 1) {
          return false;
        }
        return true;
      }
      return false;
    },
  }
}
</script>

<template>
  <section class="client_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          Відгуки клієнтів
        </h2>
      </div>
      <div id="carouselExample2Controls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(slide, index) in slides" :key="index" class="carousel-item active" :class="{'no-transition': getTransitionStatus(index)}" :style="{ transform: translateStyle(index) }">
            <div class="row">
              <div class="col-md-11 col-lg-10 mx-auto">
                <div class="box">
                  <div class="img-box">
                    <img src="@/assets/images/client.jpg" alt="" />
                  </div>
                  <div class="detail-box">
                    <div class="name">
                      <h6>
                        {{ slide }}
                      </h6>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable cIt is a long established fact
                      that a reader will be distracted by the readable c
                    </p>
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel_btn-container">
          <a @click="moveLeft" class="carousel-control-prev" role="button" data-slide="prev">
            <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
            <span class="sr-only">Previous</span>
          </a>
          <a @click="moveRight" class="carousel-control-next"role="button" data-slide="next">
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-transition {
  transition: none;
}
</style>