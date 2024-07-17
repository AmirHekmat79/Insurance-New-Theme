<template>
  <div class="column justify-between items-center q-pa-md feature-banner">
    <div class="just-click-title-container q-ml-auto back-move">
      <p class="just-click-title">فقط با چند کلیک</p>
    </div>

    <q-card class="card-feature shadow-8 q-my-md">
      <div class="row justify-center items-center q-gutter-lg">
        <div
          class="text-center"
          v-for="item in insuranceFeatures"
          :key="item.id"
        >
          <div class="feature-img-container">
            <q-img :src="item.src" style="width: 80px"></q-img>
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
});
</script>

<style scoped>
* {
  overflow-x: hidden;
}

.feature-banner {
  background: url(../../assets/Insure_tech_1.jpg);
  background-size: cover;
  background-position: center;
}
.card-feature {
  width: 50vw;
  padding: 50px;
  border-radius: 8px;
  
  background: #cce4ff;
}
.just-click-title-container {
  background: #cce4ff;
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
