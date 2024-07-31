<template>
    <q-page style="min-height:400px">  
      <section dir="rtl" class="q-py-lg ">
         <div class="blogDetails">
        <div v-for="item in magazines.filter(item=>item.id == $route.params.blogId)" :key="item.id">
            <h6 class="text-center">هر آنچه راجع به {{ item.title }} نیاز است بدانید</h6>
           <div class="column justify-center items-center">
            <q-img width="600px" height="400px" :src="item.src"></q-img>
            <p>{{ item.caption }}</p>
           </div>
          </div>
         </div>
      </section>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "BlogDetails",
    data(){
      return{
        magazines : [
                {id : 1 , title : 'بیمه مسافرتی' , src:'src/assets/national-insurance.jpg'  , caption : 'بیمه مسافرتی، بیمه ایست که از شما در برابر خطراتی که در طول سفر تهدیدتان میکند، محافظت میکند.'} ,
                {id : 2 , title : 'بیمه عمر' , src:'src/assets/rain.png' , caption : ' بیمه عمر از دیدگاه حقوقی، قراردادی است که به موجب آن بیمه‌گر در مقابل دریافت حق‌بیمه از بیمه‌گذار متعهد می‌شود'} ,
                {id : 3 , title : 'بیمه بدنه' , src:'src/assets/body-insurance.jpg' , caption : 'همچنین مزیت های دیگری نیز دارد.بیمه بدنه، بیمه‌های اختیاری است که میتواند به عنوان مکمل بیمه شخص ثالث استفاده شود.    .'} ,
                {id : 4 , title : 'بیمه آتش سوزی' , src:'src/assets/fire-insurance.jpg' , caption : 'بیمه آتش سوزی ساختمان، بیمه‌های اختیاری است که متأسفانه لزوم خرید آن، زمانی که خیلی دیر شده است، احساس میشود...'} ,
                {id : 5 , title : 'بیمه شخص ثالث' , src:'src/assets/car-insurance.jpg' , caption : 'بیمه شخص ثالث، طرح بیمه‌های الزامی برای دارندگان وسایل نقلیه موتوری است.'} ,

            ]
      }
    }
    
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
  