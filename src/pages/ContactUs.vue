<template>
    <q-page style="min-height:400px">
     
      <section dir="rtl" class="q-py-lg">
        <div class="title q-py-md q-mr-sm">
            <q-img src="../../src/assets/phone.svg" width="25px"></q-img>
            <span class="q-pr-sm text-primary">تماس با ما</span>
          </div>

          <div class="row justify-center items-center q-gutter-lg">
            <div class="col-md-4 col-sm-6 col-xs-12 q-gutter-md">
                <q-input filled v-model="text" label="نام و نام خانوادگی" />
                <q-input filled v-model="text" label="تلفن همراه" />
                <q-input filled v-model="text" label="ایمیل" />
                <q-input
                v-model="message"
                type="textarea"
                label="پیام خود را بنویسید"
                placeholder="متن پیام شما..."
                filled
                rows="5"
                dir="rtl"
                autogrow
            />
            <q-btn class="bg-primary text-white">ارسال</q-btn>
            </div>
            <div class="col-md-6">
              <div class=" q-my-md ">
                <span  class=" text-primary">
                    شماره تلفن :
                </span>
                <span>
                    02188308288</span>
              </div>
              <div class=" q-my-md ">
                <span class="text-primary">
                     آدرس :
                </span>
                <span>
                    تهران خیابان قائم مقام فراهانی، خیابان سنایی، خیابان مشاهیر، خیابان غفاری، پلاک 12</span>
              </div>
              <div class=" q-my-md ">
                <span  class=" q-my-md text-primary">
                    ایمیل :
                </span>
                <span>
                    
            info@qbimeh.ir
        </span>
              </div>
              <div>
                  <span  class="text-primary text-center">
                      شبکه های اجتماعی : 
                  
                  </span>
                  <a class="cursor-pointer">
          <q-img width="20px" src="/src/icons/whatsapp.svg"/>
         </a>
      <a class="cursor-pointer">
          <q-img width="20px" src="/src/icons/twitter-x.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img  width="20px"  src="/src/icons/telegram.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img   width="20px" src="/src/icons/robika.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img  width="20px"  src="/src/icons/linkedin.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img   width="20px" src="/src/icons/instagram.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img   width="20px" src="/src/icons/facebook.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img   width="20px"  src="/src/icons/eitaa.svg"/>
              </a>
              <a class="cursor-pointer"><q-img width="20px" src="/src/icons/bale.svg"/></a>  
                </div>
            </div>
          </div>
      </section>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ContactUs",
    data(){
        return{
            message : ''
        }
    },
    components: {
    
    },
  });
  </script>
  
<style scoped>
 .cursor-pointer{
    margin: 10px;
 }
</style>
  