<template>
  <div class="row justify-center items-center feature-banner">
    <div class="img-banner-container">
      <q-img
        class="fast-banner"
        src="../../assets/custom-svg-banner.svg"
        width="600px"
      ></q-img>
    </div>
    <div class="row justify-center items-center">
      <div class="card-feature q-my-sm">
        <div class="column justify-center items-center">
          <div class="just-click-title-container q-ml-auto back-move">
            <p class="just-click-title">فقط با چند کلیک</p>
          </div>
          <div
            class="text-center q-my-md q-ml-auto"
            v-for="item in insuranceFeatures"
            :key="item.id"
          >
            <div class="row justify-around items-center">
              <span class="feature-title text-h6">{{ item.title }}</span>
              <div class="feature-img-container q-mx-lg">
                <q-img :src="item.src" style="width: 40px"></q-img>
              </div>
            </div>
          </div>

          <div
            class="insurance-advice-title-container q-my-md q-ml-auto front-move"
          >
            <p class="insurance-advice-title">خودت رو بیمه کن!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import receivePolicy from "../../assets/hand-with-star-icon.svg";
import priceComparison from "../../assets/scale-icon.svg";
import chooseInsurance from "../../assets/privacy-document-icon.svg";

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
});
</script>

<style scoped>
* {
  overflow-x: hidden;
}

.feature-banner {
  background: #eceff1;
  background-size: cover;
  background-position: center;
}
.card-feature {
  width: 50vw;
  padding: 50px;
  border-radius: 8px;
}
.just-click-title-container {
  color: #003975;
  border-radius: 176px;
  width: 280px;
  height: 114px;
  text-align: center;
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
  padding: 20px;
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
</style>
