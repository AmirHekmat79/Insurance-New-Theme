<template>
  <div class="row justify-around text-center items-center feature-banner">
    <!-- <div class="img-banner-container">
      <q-img class="fast-banner" src="../../assets/custom-svg-banner.svg"></q-img>
    </div> -->
    <div>
            <LottieAnimation
              :animationData="lottieData"
              :loop="true"
              :autoplay="true"
              :speed="3"
              :backgroundColor="red"
           
              
            />
          </div>
          <div class="insurance-advice-title-container q-my-md">
            <p class="insurance-advice-title">خودت رو بیمه کن!</p>
          </div>
      <div class="card-feature q-mb-sm">
        
        <div class="column justify-center items-center">
          <div class="just-click-title-container q-ml-auto back-move">
            <p class="just-click-title">فقط با چند کلیک</p>
          </div>
          <div class="text-center q-my-md q-ml-auto" v-for="(item, index) in insuranceFeatures" :key="item.id">
            <div class="row justify-around items-center feature-item">
             
              <ul>
                <li>
                  <div class="row justify-center items-center">
                    <span class="feature-title text-h6">{{ item.title }}</span>
                    <div class="feature-img-container q-mx-lg">
                      <q-img :src="item.src" style="width: 30px"></q-img>
                    </div>
                    <div class="circle-number text-white q-my-auto">{{ index + 1 }}</div>
                  </div>
                </li>
                <div class="line q-my-md"></div>
              </ul>
            </div>
          </div>
         
        </div>
      </div>
    
    <q-img src="../../assets/Rectangle22.png" class="wave-img" alt=""></q-img>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import receivePolicy from "../../assets/hand-with-star-icon.svg";
import priceComparison from "../../assets/scale-icon.svg";
import chooseInsurance from "../../assets/privacy-document-icon.svg";
import LottieAnimation from '../lottie-animation.vue';
import lottieData from 'src/custom-lottie-animation.json';
export default defineComponent({
  name: "InsuranceFeatures",
  components:{
    LottieAnimation
  },
  data() {
    return {
      insuranceFeatures: [
        { id: 1, title: "دریافت بیمه نامه ", src: receivePolicy },
        { id: 2, title: "مقایسه قیمت", src: priceComparison },
        { id: 3, title: "انتخاب بیمه", src: chooseInsurance },
      ],
      lottieData: lottieData
    };
  },

  
});
</script>

<style scoped>
ul {
  list-style-type: none;
}

.line {
  border: 1px solid white;
  height: 100%;
  max-height: 160px;
  right: 8px;
  position: relative;
}

.circle-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(90deg, #1099cb, #003975);
  position: relative;
}

.feature-banner {
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(204, 228, 255, 1) 16%, rgba(204, 228, 255, 1) 100%);
  background-size: cover;
  background-position: center;
  position: relative;
}
.fast-banner{
  width: 600px;
}
.card-feature {
  padding: 50px;
  border-radius: 8px;
}

.wave-img {
  position: absolute;
  width: 100%;
  bottom: 0px;
}

.just-click-title-container {
  color: #003975;
  border-radius: 176px;
  width: 280px;
  height: 100px;
  text-align: right;
}

.just-click-title {
  font-size: 1.5rem;
  text-align: right;
  transform: translateY(30px);
}


.insurance-advice-title-container {
  background: #003975;
  color: #fff;
  padding: 10px 25px;
  border-radius: 60px;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-wrap: nowrap;
  position: relative;
  z-index: 333;
  cursor: pointer;
  transition: .3s ease-in-out;
  margin-left:118px !important;
  animation: pulse-white 2s infinite;
}

@keyframes pulse-white {
    0% {
      box-shadow: 0 0 0 0 #2980b9;
    }
    100% {
      box-shadow: 0 0 0 20px transparent;
    }
  }
.insurance-advice-title {
  font-size: 1.5rem;
  text-align: center;
  transform: translateY(10px);
  direction: rtl;
  transition: all 0.7s ease-in-out;
}

.feature-img-container {
  background-color: #f0f7ff;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
}

.feature-title {
  font-weight: bolder;
  font-size: 16px;
}

@media (max-width: 768px) {
  .feature-item {
    flex-direction: column;
    align-items: center;
  }
.fast-banner{
  width: 250px;
}
  .feature-img-container {
  display: none;
}
  .circle-number {
   display: none;
  }

  .line {
    display: none;
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


.back-move {
  animation: back-move 4s ease forwards;
}
</style>