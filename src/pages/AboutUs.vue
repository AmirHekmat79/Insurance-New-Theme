<template>
    <q-page style="min-height:400px">  
      <div class="title q-mx-auto ">
        <q-img src="../../src/assets/aboutus-icon.svg" width="25px"></q-img>
        <span class="text-center q-mx-md text-primary">درباره ما</span>
      </div>
      <section dir="rtl" class="q-py-lg ">
        <div class="row justify-between items-center">
          <div class="col-md-4 q-mx-auto text-right">
          <p class="text-weight-bold">سامانه ایزی بیمه حاصل هم افزایی دانش کسب و کار صنعت بیمه و توانمندی فنی تیم توسعه است. شرکت آسان پردازان عصر دانش با استفاده از تجربه کارشناسان صنعت بیمه و تحلیل نیازمندیهای فعالان صنعت بیمه و با اتکا به توان تیم فنی خود اقدام به طراحی و اجراء سامانه جامع مدیریت عملکرد داخلی نمایندگان و ایجاد بستر فروش الکترونیکی بیمه مختص نمایندگان صنعت بیمه نموده است . ما در ایزی بیمه نگاهی جامع به صنعت بیمه داریم و به دنبال تسهیل و تسریع فرایندهای داخلی مراکز بیمه و بهینه سازی تعاملات و ارتباطات این مراکز با شبکه فروش و مشتریان هستیم. ایزی بیمه یک ابزار توانمندساز است که به نمایندگان و کارگزاران صنعت بیمه کمک میکند تا کیفیت خدمات خود را ارتقاء دهند و وارد فضای بیمه الکترونیک شوند.</p>
         </div>
        <div class="col-md-6 q-mx-auto text-center">
          <q-img width="500px" height="400px" src="../assets/consultRequest.png" ></q-img>
         </div>
        </div>
      </section>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AboutUs",
    components: {
    
    },
  });
  </script>
  
<style scoped>
 p {
    font-size: 14px;
    line-height: 26px;
  }

 .title span {
      font-size: 20px;
      
    }
    .title {
      text-align: center !important;
    }
    @media (max-width: 1023px) {
    .title {
      margin-top: 20px;
    }
  }
</style>
  