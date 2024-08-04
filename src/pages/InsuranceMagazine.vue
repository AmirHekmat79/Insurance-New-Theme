<template>
    <q-page class="page-margin">  
      <section dir="rtl" class="page-margin ">
       <div class="row justify-center items-center text-center" style="align-items: flex-start;">
        <div style="height: auto !important;width: 300px !important;background: #eee;" class="col-lg-4">
                <div class="my-card curve" >
                    <h5 class="text-center  q-pt-lg">مطالب جدید</h5>
                    <div class="filter-title-underline1"></div>
                    <div class="filter-title-underline2"></div>
                <div v-for="item in magazines" :key="item.id" class="q-my-lg">
                        <div class="column justify-center items-center">
                            <q-card class="sub-blog-card">
                              <div class="row justify-between items-center q-ml-md">
                                  <q-img class="card-side-image q-mx-sm" :src="item.src"> </q-img>
                               <p class="q-mx-sm item-title"> {{ item.title }}</p>
                              </div>
                              <div class="row justify-between items-center q-mr-md">
                                <p class="q-mx-sm item-date text-blue-grey-5">
                                    ۲۹ تیر | ۱۴:۳۰
                                </p>
                                <!-- <RouterLink :to="{name:'blog' ,params : {blogId : item.id}}" flat class="text-primary cursor-pointer">
                                 ادامه مطلب
                              </RouterLink> -->
                              <!-- <router-link :to="{ name: 'blog',params : {blogId : item.id} }">  ادامه مطلب</router-link> -->
                              <!-- <router-link :to="{ path: '/blog', params: { blogId: item.id }}">About</router-link> -->
                              <q-btn flat class="cursor-pointer text-primary" @click="navigate(item)">ادامه مطلب</q-btn>
                              </div>
                             
                            </q-card>
                            </div>
                            <q-separator light class="q-my-lg" />
                </div>
                
            <div>
                <!-- <q-separator light/> -->
            </div>
          
        </div>
         </div>
  
    <div  class="col-md-3 q-mx-md" v-for="item in magazines.filter(item => item.id == 5)" :key="item.id">
          <q-img :src="item.src"  class="card-img" style="width: 500px; height: 430px;">
     <div class="absolute-full text-subtitle2 flex flex-center">
       {{ item.title }}
     </div>
   </q-img>
    </div>
    <div class="col-md-6" >
            <div class="row justify-center items-center q-gutter-sm">
                <div class="col-lg-4 card-item" v-for="item in magazines.filter(item => item.id !== 5)" :key="item.id">
        <q-img :src="item.src" class="card-img">
          <div class="absolute-full text-subtitle2 flex flex-center">
            {{ item.title }}
          </div>
        </q-img>
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
                {id : 4 , title : 'بیمه آتش سوزی' , src:'src/assets/fire-insurance.jpg' , caption : 'بیمه آتش سوزی ساختمان، بیمه‌های اختیاری است که متأسفانه لزوم خرید آن، زمانی که خیلی دیر شده است، احساس میشود...'} ,
                {id : 5 , title : 'بیمه شخص ثالث' , src:'src/assets/car-insurance.jpg' , caption : 'بیمه شخص ثالث، طرح بیمه‌های الزامی برای دارندگان وسایل نقلیه موتوری است.'} ,

            ]
        }
    } ,
    methods:{
        navigate(item){
        this.$router.push(`/InsuranceMagazine/blog/${item.id}`);
        }
    }
   
  });
  </script>
  
<style scoped>
.page-margin{
    margin-top: 0px !important;
    padding-top: 4px !important;
}
.curve{
    border : 1px solid #eee;
    border-radius: 5px !important;
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
/* .card-item{
    height: 500px !important;
} */
h5{
    margin-bottom: 0px !important;
}
 .my-card{
    border: 1px solid rgba(248, 245, 245, 0.12);
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

/* @media screen and (max-width : 1030px) {
    .only-in-large{
        display: none;
    }
}
@media screen and (min-width : 1030px) {

    .only-in-small{
        display: none;
    }
}
@media screen and (min-width : 1210px) and (max-width : 1350px) {
   .blog-card{
    width: 300px;
   }
} */
</style>
  