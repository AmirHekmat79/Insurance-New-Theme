<template>
  <q-page class="flex flex-center ">
   <InsuranceTypeCards/>
    <div class="column">
      <div style="width: 100%;">
        <InsuranceFeatures/>
      </div>
      <ConsultRequest/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import InsuranceTypeCards from '../components/Insurance-Type/insurance-type-cards.vue';
import InsuranceFeatures from '../components/Insurance-Options/insurance-features.vue';
import ConsultRequest from '../components/Consult-Request/consult-request.vue';
export default defineComponent({
  name: 'IndexPage' ,
  components : {
    InsuranceTypeCards ,
    InsuranceFeatures,
    ConsultRequest
  }
})
</script>

<style>

</style>