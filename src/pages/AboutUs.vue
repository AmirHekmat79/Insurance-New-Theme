<template>
    <q-page style="min-height:400px">  
      <section dir="rtl" class="q-py-lg ">
          <div class="title q-py-md q-mr-sm">
            <q-img src="../../src/assets/aboutus-icon.svg" width="25px"></q-img>
            <span class="q-pr-sm text-primary">درباره ما</span>
          </div>
        <div class="q-mx-auto text-center">
          <p class="text-weight-bold">سامانه ایزی بیمه حاصل هم افزایی دانش کسب و کار صنعت بیمه و توانمندی فنی تیم توسعه است. شرکت آسان پردازان عصر دانش با استفاده از تجربه کارشناسان صنعت بیمه و تحلیل نیازمندیهای فعالان صنعت بیمه و با اتکا به توان تیم فنی خود اقدام به طراحی و اجراء سامانه جامع مدیریت عملکرد داخلی نمایندگان و ایجاد بستر فروش الکترونیکی بیمه مختص نمایندگان صنعت بیمه نموده است . ما در ایزی بیمه نگاهی جامع به صنعت بیمه داریم و به دنبال تسهیل و تسریع فرایندهای داخلی مراکز بیمه و بهینه سازی تعاملات و ارتباطات این مراکز با شبکه فروش و مشتریان هستیم. ایزی بیمه یک ابزار توانمندساز است که به نمایندگان و کارگزاران صنعت بیمه کمک میکند تا کیفیت خدمات خود را ارتقاء دهند و وارد فضای بیمه الکترونیک شوند.</p>

          <div>
            <q-separator inset spaced="50px"/>
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
    line-height: 24px;
  }

 .title span {
      font-size: 20px;
    }

    @media (max-width: 1023px) {
    .title {
      margin-top: 30px;
    }
  }
</style>
  