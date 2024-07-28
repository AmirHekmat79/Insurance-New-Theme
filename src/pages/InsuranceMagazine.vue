<template>
    <q-page style="min-height:400px">  
      <section dir="rtl" class="q-py-lg ">
       <div class="row justify-around items-center text-center q-gutter-sm">
         <div class="col-md-3" v-for="n in 4" :key="n">
            <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-h6">
                Title
                </div>
            </q-img>

            <q-card-section>
                asdad
            </q-card-section>
    </q-card>
         </div>
         <!-- <div class="col-md-5">

         </div> -->
       </div>
      </section>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "InsuranceMagazine",
    components: {
    
    },
  });
  </script>
  
<style scoped>

</style>
  