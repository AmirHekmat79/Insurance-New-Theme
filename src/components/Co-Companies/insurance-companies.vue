<template>
  <div class="q-pa-md q-my-lg text-center Companies-Container">
    <h2 class="company-section-title">شرکت های بیمه</h2>
    <div class="row justify-around items-center text-center q-gutter-md">
      <div class="q-pa-md">
        <q-carousel
          v-model="slide"
          swipeable
          animated
          navigation
          padding
          height="300px"
          class="bg-purple text-white rounded-borders"
        >
          <q-carousel-slide
            name="style"
            class="row justify-around items-center"
            v-for="item in InsuranceCompanies"
            :key="item.id"
          >
            <q-card class="card">
              <q-card-section>
                <q-img :src="item.metaMediaLogoFileUrl"></q-img>
              </q-card-section>
            </q-card>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import apiService from "src/services/api-services";
export default defineComponent({
  name: "InsuranceCompanies",
  data() {
    return {
      InsuranceCompanies: [],
      currentSlide: "0",
      autoplay: true,
      autoplayInterval: 3000,
    };
  },
  setup() {
    return {
      slide: ref("style"),
    };
  },
  mounted() {
    this.getPolicyIntroduction();
  },
  methods: {
    getPolicyIntroduction() {
      console.log(23, "sdasd");
      apiService
        .getPolicyIntroduction("sabz")
        .then((response) => {
          this.InsuranceCompanies =
            response.data.message?.insuranceCentre?.insuranceCompanies || [];
          console.log(this.InsuranceCompanies);
        })
        .catch((error) => {
          console.error("Error fetching insurance centre info:", error);
        });
    },
  },
});
</script>

<style scoped>
.company-section-title {
  font-size: 24px;
}
.card {
  width: 150px;
  height: 150px;
  background: #fff;
}
</style>
