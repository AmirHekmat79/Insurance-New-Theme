<template>
  <q-page style="min-height:400px">
    <section class="q-py-lg">
      <div class="container q-mx-auto">
        <div class="title q-py-md row justify-center text-center items-center">
          <h5 class="text-weight-bold">شرکت های بیمه</h5>
        
        </div>
      </div>
      <div class="container q-px-lg q-mx-auto">
         <div class="row justify-center items-center text-center q-gutter-md">
          <div class="col-md-2 change-opacity" v-for="item in InsuranceCompanies.filter(item=>item.id!=32).slice(7,9)" :key="item.id">
            <q-card class="card shadow-10">
            <q-card-section>
              <q-img :src="item.metaMediaLogoFileUrl" width="125px"> </q-img>
            </q-card-section>
          </q-card>
          </div>
          <div class="col-md-2" v-for="item in InsuranceCompanies.filter(item=>item.id==32)" :key="item.id">
            <q-card class="card shadow-10">
            <q-card-section>
              <q-img :src="item.metaMediaLogoFileUrl" width="125px"> </q-img>
            </q-card-section>
          </q-card>

          </div>
          <div class="col-md-2 change-opacity" v-for="item in InsuranceCompanies.filter(item=>item.id!=32).slice(3,5)" :key="item.id">
            <q-card class="card shadow-10">
            <q-card-section>
              <q-img :src="item.metaMediaLogoFileUrl" width="125px"> </q-img>
            </q-card-section>
          </q-card>

          </div>



         </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import apiService from "src/services/api-services";
export default defineComponent({
  name: "InsuranceCompanies",
  data() {
    return {
      InsuranceCompanies: [],
      
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
.overflow-auto {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}

.card {
  width: 150px;
  height: 150px;
  background: #fff;
  display: inline-block;
}

.change-opacity{
  opacity: 0.5;
} 
@media screen and (max-width:892px) {
  .change-opacity{
    display: none;
  }
}
</style>
