<template>
  <div class="row justify-center items-center">
    <q-img src="../../assets/radio.svg" width="32px"></q-img>
    <h6 class="titleStyle text-center q-mx-sm">اخبار</h6>
  </div>
  <div
    class="row justify-center items-center text-center cards-container "
  >
    <div class="col-md-3 q-ma-md " v-for="item in InsuranceNews" :key="item.id">
      <q-card class="card text-white q-pa-sm shadow-1">
        <q-card-section class="text-center">
          <q-img class="card-img" :src="item.src"></q-img>
          <div class="row justify-around items-center">
            <q-badge class="q-pa-sm rounded-borders cursor-pointer" color="blue">
              جزئیات بیشتر
            </q-badge>
            <h6 class="card-title">عنوان خبر</h6>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
  
</template>

<script>
import { defineComponent } from "vue";
import compassion from "../../assets/compassion.png";
import rain from "../../assets/rain.png";
import samples from "../../assets/samples.png";
export default defineComponent({
  name: "InsuranceNews",
  data() {
    return {
      InsuranceNews: [
        { id: 1, src: compassion },
        { id: 2, src: rain },
        { id: 3, src: samples },
      ],
    };
  },
});
</script>

<style scoped>


.titleStyle {
  color: #002247;
}
.card {
  width: 300px;
  height: 300px;
  background: #fff;
}
.card-title {
  color: #002247;
  margin: 20px;
}
.card-img {
  width: 100%;
  height: 100%;
  margin: auto;
  transition: transform 0.3s ease;
}

.card-img:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>
