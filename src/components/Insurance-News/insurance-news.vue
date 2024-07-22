<template>
  <div class="feature-banner q-pb-xl ">
    <div class="row justify-center items-center">
      <q-img src="../../assets/radio.svg" width="22px"></q-img>
      <h6 class="titleStyle text-center q-mx-sm">اخبار</h6>
    </div>
    <div class="row justify-center items-center text-center q-gutter-sm q-my-lg q-pb-xl">
      <div
        class="col-lg-2 col-md-4   col-xs-6"
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
      <q-img src="../../assets/Rectangle22.png" class="wave-img" alt=""></q-img>
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
            " بیمه ای است که به موجب آن بیمه گر در مقابل حق بیمه ای که از بیمه گزار دریافت می کند متعهد می شود   و  ...",
        },
      ],
    };
  },
});
</script>

<style scoped>
.feature-banner {
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(204,228,255,1) 20%,rgba(204,228,255,1) 100%); 
background-size:cover;
background-position: center;
position: relative;
}

.wave-img{
position: absolute;
width: 100%;
bottom : 0px;

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