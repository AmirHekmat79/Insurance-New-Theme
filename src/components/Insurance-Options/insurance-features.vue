<template>
 <div class="column justify-between items-center q-pa-lg">
  <div class="just-click-title-container  q-ml-auto"><p class="just-click-title">فقط با چند کلیک</p>  </div>
<div class="row justify-between items-center">
  <div class="col-md-3 col-sm-4 col-xs-12 q-ma-sm text-center " v-for="item in insuranceFeatures" :key="item.id">
   <div class="feature-img-container"><q-img :src="item.src" width="100px"></q-img></div>
   <span class="feature-title text-h6">{{ item.title }}</span>
  </div>
</div>
<div  class="insurance-advice-title-container q-mr-auto"><p class="insurance-advice-title">خودت رو  بیمه کن!</p> </div>
 </div>
</template>
   
   <script>
  import { defineComponent } from 'vue';
  import receivePolicy from  '../../assets/receivePolicy.png';
  import priceComparison from  '../../assets/priceComparison.png';
  import chooseInsurance from  '../../assets/chooseInsurance.png';

   export default defineComponent({
     name: "InsuranceFeatures",
     data(){
    return{
      insuranceFeatures : [
        {id : 1 , title : 'دریافت بیمه نامه ' ,  src : receivePolicy} ,
        {id : 2 , title : 'مقایسه قیمت' , src : priceComparison } ,
        {id : 3 , title : 'انتخاب بیمه' , src : chooseInsurance } ,
      ]
    }
  }
   
   });
   </script>
   
   <style scoped>
   .just-click-title-container{
    background: #CCE4FF;
    color : #003975;
    border-radius: 176px;
    width: 346px;
    height: 114px;
    text-align: center;
    margin-top: 4rem;
   }
   .just-click-title{
    font-size: 2rem;
    text-align: center;
    transform: translateY(30px);
   }
   .insurance-advice-title-container{
    background: #003975;
    border-radius: 210px;
    color : #fff;
    width: 435px;
    height: 150px;
    margin-top: 4rem;
   }
   .insurance-advice-title{
    font-size: 2rem;
    text-align: center;
    transform: translateY(40px);
   }
   .feature-img-container{
    background-color: #F0F7FF;
    border-radius: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
   }
   .feature-title{
    font-weight: bolder;
    font-size: 16px;
   }
   </style>