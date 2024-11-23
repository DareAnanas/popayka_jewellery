<script>
export default {
  data() {
    return {
      activeIndex: 0,
      slides: [
        {
          id: 1,
          name: 'Popayka Junior', 
          comment: `Користувався послугами майстерні Попайки. 
Вироби якісні, вибір широкий, персонал привітний.
Залишився задоволений. Рекомендую!`
        },
        {
          id: 2,
          name: 'Fistashka',
          comment: `Купив ланцюжок до пальто. Тепер ходжу модий. 
Заздріть мені, ха-ха! Якщо хочете як я, то затартеся у Попайки. 
Ну це тємка, я вам кажу.`
        },
        {
          id: 3,
          name: 'Cheremshyna',
          comment: `Найкращий магазин ювелірки. 
Купила подарунок та ще й зі книжкою. 
Все гарно та чудово!`
        },
        {
          id: 4,
          name: 'Derbi',
          comment: `you really got me now
You got me so I don't know where I'm goin'
(Oh yeah) you really got me now
You got me so I can't sleep at night`
        }
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
                    <img :src="`api/clients/${slide.id}.jpg`" alt="" />
                  </div>
                  <div class="detail-box">
                    <div class="name">
                      <h6>
                        {{ slide.name }}
                      </h6>
                    </div>
                    <p>
                      {{ slide.comment }}
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