<template>
  <div class="row justify-center text-center items-center feature-banner">
    <!-- <div class="img-banner-container">
      <q-img class="fast-banner" src="../../assets/custom-svg-banner.svg"></q-img>
    </div> -->
   
          <div class="just-click-title-container q-ml-auto">
            <p class="just-click-title">فقط با چند کلیک  خودت رو بیمه کن!   </p>
         
          </div>
          <div>
            <LottieAnimation
              :animationData="lottieData"
              :loop="true"
              :autoplay="true"
              :speed="3"
              :backgroundColor="red"
           
              
            />
          </div>
        <div class="row justify-center items-center q-py-sm">
         
            <q-card class="text-center card q-my-sm q-ml-auto" v-for="(item) in insuranceFeatures" :key="item.id">
              <div class="feature-img-container q-mx-lg">
                      <q-img src="../../assets/life-insurance.svg" style="width: 40px"></q-img>
                    </div>
                  <div class="row justify-center items-center">
                    <span class="feature-title text-h6">{{ item.title }}</span>
                  </div>
        </q-card>
          </div>
      </div>
    
 
  
</template>

<script>
import { defineComponent } from "vue";
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
        { id: 1, title: "بیمه مورد نظرت رو انتخاب کن", },
        { id: 2, title: "مشخصات مورد بیمه رو وارد کن", },
        { id: 3, title: "قیمت بیمه رو استعلام کن", },
        { id: 4, title: "درخواستت رو نهایی کن",  },
        { id: 5, title: "بیمه نامه  ات آماده است", },
      ],
      lottieData: lottieData
    };
  },

  
});
</script>

<style scoped>
.card{
  width:300px;
  margin: 5px;
}
.feature-banner {
  background: #EEEEEE;
  /* background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(204, 228, 255, 1) 16%, rgba(204, 228, 255, 1) 100%); */
  background-size: contain;
  background-position: center;
  position: relative;
}
.fast-banner{
  width: 600px;
}




.just-click-title-container {
  color: #003975;
  text-align: right;
  direction: rtl;
}

.just-click-title {
  font-size: 1.5rem;
  text-align: right;
  
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