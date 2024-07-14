<template>
  <q-page style="min-height:400px">
    <section class="q-py-lg">
      <div class="container q-mx-auto">
        <div class="title q-py-md row justify-center text-center items-center">
          <h5 class="text-weight-bold">شرکت های بیمه</h5>
        
        </div>
      </div>
      <div class="container  q-mx-auto">
         <div class="row justify-center items-center text-center q-gutter-md">
          <div class="col-md-1 change-opacity" v-for="item in InsuranceCompanies.filter(item=>item.id!=32).slice(7,10)" :key="item.id">
            <q-card class="card shadow-10">
            <q-card-section>
              <q-img :src="item.metaMediaLogoFileUrl" width="70px"> </q-img>
            </q-card-section>
          </q-card>
        
         </div>
          <div  style="z-index: 1;" class="col-md-2" v-for="item in InsuranceCompanies.filter(item=>item.id==32)" :key="item.id">
            <q-card class="main-card shadow-10">
            <q-card-section>
              <q-img :src="item.metaMediaLogoFileUrl" width="125px"> </q-img>
            </q-card-section>
          </q-card>

          </div>
          <div class="col-md-1 change-opacity" v-for="item in InsuranceCompanies.filter(item=>item.id!=32).slice(3,6)" :key="item.id">
            <q-card class="card shadow-10">
            <q-card-section>
              <q-img :src="item.metaMediaLogoFileUrl" width="70px"> </q-img>
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
.glass{
  background: rgba(255, 255, 255, 0.29);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);  
}
.card {
  width: 100px;
  height: 100px;
  background: #fff;
  display: inline-block;
}
.main-card{
  width: 160px;
  height: 160px;
  background: #fff;
  display: inline-block;
}
.change-opacity{
  opacity: 0.9;
} 
@media screen and (max-width:892px) {
  .change-opacity{
    display: none;
  }
}
</style>
