<template>
  <q-page class="flex flex-center ">
   <InsuranceTypeCards/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import InsuranceTypeCards from '../components/Insurance-Type/insurance-type-cards.vue';
export default defineComponent({
  name: 'IndexPage' ,
  components : {
    InsuranceTypeCards
  }
})
</script>

<style scoped>

</style>