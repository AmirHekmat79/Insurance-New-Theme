<template>
    <q-page style="min-height:400px">  
      <section dir="rtl" class="q-py-lg ">
       <div class="row justify-center items-center text-center q-gutter-sm  only-in-large">
        <div style="height: auto !important;" class="col-lg-4">
                <q-card class="my-card" >
                    <h5 class="text-center  q-pt-lg">مطالب جدید</h5>
                    <div class="filter-title-underline1"></div>
                    <div class="filter-title-underline2"></div>
                <q-card-section v-for="item in magazines" :key="item.id" class="q-my-lg">
                        <div class="row justify-between items-center">
                            {{ item.title }}
                              <q-btn @click="goToDetails(item)" flat class="text-primary cursor-pointer">
                                مشاهده جزِئیات
                              </q-btn>
                            </div>
                            <q-separator light class="q-my-lg" />
                </q-card-section>
                
            <div>
                <q-separator light/>
            </div>
          
        </q-card>
         </div>
        <div class="col-md-6" >
            <div class="row justify-center items-center q-gutter-sm">
                <div class="col-lg-4 card-item" v-for="item in magazines" :key="item.id">
                <q-card class="my-card blog-card">
                <q-img class="card-image" :src="item.src">
                    <div class="absolute-bottom text-h6">
                    {{ item.title }}
                    </div>
                </q-img>

                <q-card-section>
                {{ item.caption }}
                </q-card-section>
                
            <div>
                <q-separator light/>
            </div>
            <q-btn flat color="primary" @click="goToDetails(item)">
                ادامه مطلب
            </q-btn>
        </q-card>
         </div>
            </div>
        </div>
       
       </div>
       <div class="row justify-center items-center q-gutter-sm text-center only-in-small">
        <div class="col-sm-6 card-item" v-for="item in magazines" :key="item.id">
                <q-card class="my-card">
                <q-img class="card-image" :src="item.src">
                    <div class="absolute-bottom text-h6">
                    {{ item.title }}
                    </div>
                </q-img>

                <q-card-section>
                {{ item.caption }}
                </q-card-section>
                
            <div>
                <q-separator light/>
            </div>
            <q-btn flat color="primary" @click="goToDetails(item)">
                ادامه مطلب
            </q-btn>
        </q-card>
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
                // {id : 5 , title : 'بیمه شخص ثالث' , src:'src/assets/car-insurance.jpg' , caption : 'بیمه شخص ثالث، طرح بیمه‌های الزامی برای دارندگان وسایل نقلیه موتوری است.'} ,

            ]
        }
    } ,
    methods : {
        goToDetails(item){
            this.$router.push({
            name: 'blog',
            params: {
            blogId: item.id
            }
        });
        }
    }
   
  });
  </script>
  
<style scoped>
.card-image{
    height: 30vh;
    background-position: center;
    background-size: cover;
}
/* .card-item{
    height: 500px !important;
} */
h5{
    margin-bottom: 0px !important;
}
 .my-card{
    border: 1px solid rgba(0, 0, 0, 0.12);
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

@media screen and (max-width : 1030px) {
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
}
</style>
  