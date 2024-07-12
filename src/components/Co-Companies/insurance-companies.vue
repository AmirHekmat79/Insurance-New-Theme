<template>
  <div class="q-pa-md q-my-lg text-center Companies-Container">
    <h2 class="company-section-title">شرکت های بیمه</h2>
    <div class="row justify-around items-center text-center q-gutter-md">
      <div
        class="col-md-1 company-container"
        v-for="item in InsuranceCompanies.slice(0, 6)"
        :key="item.id"
      >
        <q-card class="card">
          <q-card-section>
            <q-img :src="item.metaMediaLogoFileUrl"></q-img>
          </q-card-section>
        </q-card>
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
      numSlides: 0,
    };
  },

  mounted() {
    this.getPolicyIntroduction();
  },
  methods: {
    prevSlide() {
      this.currentSlide = (parseInt(this.currentSlide) - 1).toString();
    },
    nextSlide() {
      this.currentSlide = (parseInt(this.currentSlide) + 1).toString();
    },
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
  watch: {
    currentSlide(newSlide) {
      if (newSlide === this.numSlides.toString()) {
        this.currentSlide = "0"; // Reset the slide to the first one
      }
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
