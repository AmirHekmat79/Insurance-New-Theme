<template>
    <div  class="row  justify-center text-center  items-center q-py-lg q-gutter-lg">
        <div class="col-md-8 col-xs-12">
         <form>
                <q-input align="right" rounded  standout="bg-info text-white" v-model="text" label="نام خانوادگی" />
                <q-input align="right" class="q-my-md" rounded standout="bg-info text-white" v-model="text" label="شماره همراه" />
                <q-input align="right" rounded  standout="bg-info text-white" v-model="text" label="نوع بیمه"  />
                <q-btn class="submit-request q-my-md"> <q-img class="q-mx-sm" src="../../assets/requestSubmit.png" width="20px"></q-img>ثبت درخواست</q-btn>
         </form>
        </div>
      <div class="col-md-3 col-xs-12">
           <h5>درخواست مشاوره</h5>
           <q-img class="consult-img" src="../../assets/consultRequest.png"></q-img>
      </div>
  </div>
</template>
      
<script>
 import { defineComponent } from 'vue';

   
export default defineComponent({
        name: "ConsultRequest",
 
      
 });
</script>
      
<style scoped>
.consult-img{
    width:494px !important;
     height:372px !important;
     
}
.submit-request{
    background: #007BFF;
    color: #fff;
}
</style>