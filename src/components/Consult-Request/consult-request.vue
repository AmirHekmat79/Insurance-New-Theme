<template>
  <div class="row justify-center text-center q-mx-auto items-center">
      <div class="col-md-8 q-mr-auto ">
       <form>
              <q-input rounded  standout="bg-info text-white" v-model="text" label="نام خانوادگی" />
              <q-input class="q-my-md" rounded standout="bg-info text-white" v-model="text" label="شماره همراه" />
              <q-input rounded  standout="bg-info text-white" v-model="text" label="نوع بیمه" />
              <q-btn class="submit-request q-my-md"> <q-img class="q-mx-sm" src="../../assets/requestSubmit.png" width="20px"></q-img>ثبت درخواست</q-btn>
       </form>
      </div>
    <div class="col-md-3 ">
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
    width:494px;
     height:372px;
}
.submit-request{
    background: #007BFF;
    color: #fff;
}
</style>