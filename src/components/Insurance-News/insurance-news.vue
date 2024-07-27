<template>
  <div class="feature-banner  q-py-sm ">
   <div class="text-right q-ma-lg">
    <q-img class="shape1-img3" src="../../assets/shape1.svg" width="20px"></q-img>
   </div>
   <div class="text-right q-ma-lg">
    <q-img class="shape2-img3" src="../../assets/triangle.svg" width="20px"></q-img>
   </div>
  
    <div class="row justify-center items-center">
      <q-img src="../../assets/radio.svg" width="22px"></q-img>
      <h6 class="titleStyle text-center q-mx-sm">اخبار</h6>
    </div>
    <div class="row justify-center items-center text-center q-gutter-md q-my-lg q-pb-xl">
      <div
        class="col-lg-2 col-md-3   col-xs-6"
        v-for="item in InsuranceNews"
        :key="item.id"
      >
        <q-card class="my-card shadow-1">
          <q-img class="card-img" :src="item.src">
            <div class="absolute-bottom text-h6">{{ item.title }}</div>
          </q-img>
  
          <q-card-section dir="rtl">
            {{ item.caption }}
          </q-card-section>
          <q-separator light />
          <q-btn class="details-btn text-center q-my-sm rounded-borders"
            >جزئیات بیشتر</q-btn
          >
        </q-card>
      </div>
      <div class="text-right q-ma-lg">
    <q-img class="shape2-img3" src="../../assets/triangle.svg" width="30px"></q-img>
   </div>
    </div>
    <div class="shape3-img3 text-right q-ma-lg">
    <q-img  src="../../assets/6.png" width="80px"></q-img>
   </div>
    <div class="shape4-img3 text-right q-ma-lg">
    <q-img  src="../../assets/shape5.png" width="25px"></q-img>
   </div>
    <div class="shape6-img3 text-right q-ma-lg">
    <q-img  src="../../assets/shape1.svg" width="15px"></q-img>
   </div>
    <div class="shape5-img3 text-right q-ma-lg">
    <q-img  src="../../assets/shape5.png" width="26px"></q-img>
   </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import compassion from "../../assets/compassion.png";
import rain from "../../assets/rain.png";
import samples from "../../assets/samples.png";
import transportation from "../../assets/transportation 1 (2).png";

export default defineComponent({
  name: "InsuranceNews",
  data() {
    return {
      InsuranceNews: [
        {
          id: 1,
          src: compassion,
          title: "بیمه درمان",
          caption:
            " بیمه درمان یا بیمه تکمیلی درمان یک بیمه‌نامه مکمل بیمه پایه محسوب می شود...",
        },
        {
          id: 2,
          src: rain,
          title: "بیمه کار",
          caption:
            " بیمه کار مبلغی است که برای استفاده از مزایای بیمه به شرکت بیمه پرداخت می شود...",
        },
        {
          id: 3,
          src: samples,
          title: "بیمه سلامت",
          caption:
            "بیمه عمر  قراردادی است که میان یک شرکت بیمه و شخص بیمه شونده  منعقد می‌شود...",
        },
        {
          id: 4,
          src: transportation,
          title: "بیمه حمل و نقل",
          caption:
            "بیمه ای  که به موجب آن بیمه گر در مقابل حق بیمه ای که از بیمه گزار دریافت می کند متعهد می شود ...",
        },
      ],
    };
  },
});
</script>

<style scoped>
.my-card{
 text-align: center;
}
.shape1-img3{
  animation: shape-img3 4s infinite 2s linear;
  position: absolute;
  bottom:10px;
}
.shape2-img3{
  animation: shape-img3 4s infinite 2s linear;
  position: absolute;
  top:20%;
}
.shape3-img3{
  animation: shape-circle-img3 4s infinite 2s linear;
  position: absolute;
  bottom:20px;
}
.shape4-img3{
  animation: shape-circle-img3 4s infinite 2s linear;
  position: absolute;
  bottom:30px;
}
.shape5-img3{
  animation: shape-circle-img3 4s infinite 2s linear;
  position: absolute;
  top:30px;
}
.shape6-img3{
  animation: shape-img3 4s infinite 2s linear;
  position: absolute;
  top:10px;
}

@keyframes shape-img3 {
  0%{
    transform: rotate(360deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
@keyframes shape-circle-img3 {
  0%{
    transform: translate(100px , -30px);
  }
  100%{
    transform: translateX(0px);
  }
}
.feature-banner {
background: #eeeeee;
background-size:cover;
background-position: center;
position: relative;
}


.titleStyle {
  color: #002247;
}

.card-title {
  color: #002247;
  margin: 20px;
}

.card-img {
  transition: transform 0.3s ease;
  
}

.card-img:hover {
  transform: scale(0.9);
  cursor: pointer;
}

.details-btn {
  background: #cce4ff;
}
</style>