<template>
    <q-page>
      <section dir="rtl" class="container">
        <div class="row justify-center items-center text-center" style="align-items: stretch;">
          <div class="col-md-3 col-xs-12">
            <div class="my-card curve">
              <h5 class="text-center q-pt-lg">مطالب جدید</h5>
              <div class="filter-title-underline1"></div>
              <div class="filter-title-underline2"></div>
              <div v-for="item in magazines" :key="item.id" class="q-my-md">
                <div class="column justify-center items-center">
                  <div class="sub-blog-card">
                    <div class="row justify-around items-center q-ml-sm">
                      <q-img class="card-side-image q-mx-sm" :src="item.src"></q-img>
                      <p class="item-title">{{ item.title }}</p>
                    </div>
                    <div class="row justify-around items-center  q-py-sm">
                      <p class="q-mx-sm item-date text-blue-grey-5">
                        ۲۹ تیر | ۱۴:۳۰
                      </p>
                      <q-btn flat class="cursor-pointer text-primary" @click="navigate(item)">ادامه مطلب</q-btn>
                    </div>
                  </div>
                </div>
                <q-separator light class="q-my-lg" />
              </div>
            </div>
          </div>
          <div class="col-md-6  text-center col-xs-12 q-px-lg">
            <div class="row justify-center items-center q-gutter-sm">
              <div class="col-lg-5 col-md-4 col-sm-6 col-xs-12 card-item" v-for="item in magazines.filter(item => item.id !== 5)" :key="item.id">
                <q-img :src="item.src" class="card-img">
                  <div class="absolute-full text-subtitle2 flex flex-center">
                    {{ item.title }}
                  </div>
                </q-img>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-center  text-center items-center q-px-lg" style="align-items: stretch;">
          <div class="col-md-3 col-xs-12"></div>
          <div class="col-md-6 text-center col-xs-12">
            <div class="row justify-center items-center  q-my-md" v-for="item in magazines" :key="item.id">
              <div class="col-md-12 shadow-10 rounded-borders">
                <div>
                  <div  class="justify-center items-center flex no-wrap ">
                    <div  class="q-pr-sm">
                      <q-img class="rounded-borders" width="300px" height="160px" :src="item.src"></q-img>
                    </div>
                    <div class="q-px-md">
                      <h5>{{ item.title }}</h5> 
                      <div class="q-my-md text-amber"> {{currentDate}}</div>
                      <div class="caption">{{ item.caption }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </q-page>
  </template>
  <script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "InsuranceMagazine",
    data(){
        return{
            magazines : [
                {id : 1 , title : 'بیمه مسافرتی' , src:'src/assets/national-insurance.jpg'  , caption : 'بیمه مسافرتی، بیمه ایست که از شما در برابر خطراتی که در طول سفر تهدیدتان میکند، محافظت میکند.'} ,
                {id : 2 , title : 'بیمه عمر' , src:'src/assets/rain.png' , caption : ' بیمه عمر از دیدگاه حقوقی، قراردادی است که به موجب آن بیمه‌گر در مقابل دریافت حق‌بیمه از بیمه‌گذار متعهد می‌شود'} ,
                {id : 3 , title : 'بیمه بدنه' , src:'src/assets/body-insurance.jpg' , caption : 'همچنین مزیت های دیگری نیز دارد.بیمه بدنه، بیمه‌های اختیاری است که میتواند به عنوان مکمل بیمه شخص ثالث استفاده شود.    .'} ,
                {id : 4 , title : 'بیمه آتش سوزی' , src:'src/assets/fire-insurance.jpg' , caption : 'همچنین مزیت های دیگری نیز دارد.بیمه آتش سوزی ساختمان، بیمه‌های اختیاری است که متأسفانه لزوم خرید آن، زمانی که ...'} ,
                {id : 5 , title : 'بیمه شخص ثالث' , src:'src/assets/car-insurance.jpg' , caption : 'همچنین مزیت های دیگری نیز دارد.بیمه شخص ثالث، طرح بیمه‌های الزامی برای دارندگان وسایل نقلیه موتوری است.'} ,

            ] ,

        date : new Date()
        }
    } ,
    methods:{
        navigate(item){
        this.$router.push(`/InsuranceMagazine/blog/${item.id}`);
        }
    } ,

    computed: {
    currentDate() {
      return new Date().getFullYear();
    }
  }
   
  });
  </script>
  
<style scoped>
/* .page-margin{
    margin-top: 0px !important;
    padding-top: 4px !important;
} */
.curve{
    border : 2px solid #e7e5e5;
    border-radius: 4px !important;
}
.item-title{
    font-size: 14px;
}
.card-img{
    width: 100%;
    height: 300px;
    display: block;
    object-fit: cover;
    border-radius: 5px;
}
.item-date{
    font-size: 100%;
}
.sub-blog-card{
    width:260px;
    padding: 8px;
}
.card-image{
    height: 30vh;
    background-position: center;
    background-size: cover;
}
.card-side-image{
    width: 60px;
    height: 60px;
    border-radius: 5px;
}

h5{
    margin-bottom: 0px !important;
}

.filter-title-underline1{
    width: 20%;
    height: 3px;
    margin: 5px auto;
    background: #2980b9;
}
.filter-title-underline2{
    width:30%;
    height: 3px;
    margin: auto;
    background: #2980b9;
}

@media screen and (max-width:1600px){
   .sm-hidden{
    display: none;
   }
}

@media screen  and (max-width : 800px){
    .caption{
        font-size: 16px;
    }
}
@media screen  and (min-width : 801px){
    .caption{
        font-size: 16px;
        padding-bottom: 8px !important;
    }
}
</style>
  

   