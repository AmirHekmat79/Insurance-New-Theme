<template>
    <div  class="row  justify-center text-center  items-center q-py-lg q-gutter-md">
        <div class="col-md-4 col-xs-12">
         <form>
                <q-input  rounded  standout="bg-info text-white" v-model="text" label="نام خانوادگی" />
                <q-input  class="q-my-md" rounded standout="bg-info text-white" v-model="text" label="شماره همراه" />
                <q-input  rounded  standout="bg-info text-white" v-model="text" label="نوع بیمه"  />
                <q-btn class="submit-request q-my-md"> <q-img class="q-mx-sm" src="../../assets/requestSubmit.png" width="20px"></q-img>ثبت درخواست</q-btn>
         </form>
        </div>
      <div class="col-md-6 col-xs-12">
           <h5 class=" consult-title">درخواست مشاوره</h5>
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
    width:490px !important;
     height:372px !important;
     
}
.submit-request{
    background: #007BFF;
    color: #fff;
}
.consult-title{
    font-size: 20px;
    font-weight: bolder;
}
</style>