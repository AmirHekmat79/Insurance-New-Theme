<template>
  <div class="column justify-between items-center q-pa-xl">
    <div class="just-click-title-container q-mb-md q-ml-auto back-move">
      <p class="just-click-title">فقط با چند کلیک</p>
    </div>

    <div id="particles-container"></div>
    <q-card class="card-feature shadow-4">
      <div class="row justify-center items-center q-gutter-md">
        <div
          class="text-center"
          v-for="item in insuranceFeatures"
          :key="item.id"
        >
          <div class="feature-img-container">
            <q-img :src="item.src" style="width: 5vw"></q-img>
          </div>
          <span class="feature-title text-h6">{{ item.title }}</span>
        </div>
      </div>
    </q-card>
    <div class="insurance-advice-title-container q-mr-auto front-move">
      <p class="insurance-advice-title">خودت رو بیمه کن!</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import receivePolicy from "../../assets/receivePolicy.png";
import priceComparison from "../../assets/priceComparison.png";
import chooseInsurance from "../../assets/chooseInsurance.png";

export default defineComponent({
  name: "InsuranceFeatures",
  data() {
    return {
      insuranceFeatures: [
        { id: 1, title: "دریافت بیمه نامه ", src: receivePolicy },
        { id: 2, title: "مقایسه قیمت", src: priceComparison },
        { id: 3, title: "انتخاب بیمه", src: chooseInsurance },
      ],
    };
  },

  mounted() {
    particlesJS("particles-container", {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#2980b9" },
        shape: { type: "circle", stroke: { width: 0, color: "#2980b9" } },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 5,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#2980b9",
          opacity: 0.4,
          width: 0.3,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 350, line_linked: { opacity: 0.5 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
  },
});
</script>

<style scoped>
* {
  overflow-x: hidden;
}
.card-feature {
  width: 50%;
  padding: 70px;
  border-radius: 3px;
  border-bottom-right-radius: 20%;
  border-top-left-radius: 20%;
  background: #cce4ff;
}
.just-click-title-container {
  background: #cce4ff;
  color: #003975;
  border-radius: 176px;
  width: 280px;
  height: 114px;
  text-align: center;
  margin-top: 2rem;
}
.just-click-title {
  font-size: 1.5rem;
  text-align: center;
  transform: translateY(30px);
}
.insurance-advice-title-container {
  background: #003975;
  border-radius: 210px;
  color: #fff;
  width: 300px;
  height: 110px;
  margin-top: 2rem;
}
.insurance-advice-title {
  font-size: 1.5rem;
  text-align: center;
  transform: translateY(40px);
  direction: rtl;
}
.feature-img-container {
  background-color: #f0f7ff;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
.feature-title {
  font-weight: bolder;
  font-size: 16px;
}

@keyframes front-move {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes back-move {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.front-move {
  animation: front-move 4s ease forwards;
}

.back-move {
  animation: back-move 4s ease forwards;
}

#particles-container {
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 50%;
  height: 50%;
  z-index: -1;
}
</style>
