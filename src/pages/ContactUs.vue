<template>
    <q-page>
        <div class="title text-center q-py-md q-mr-sm">
            <span class="q-pr-sm text-primary text-weight-bolder contact-title">تماس با ما</span>
            <q-img src="../assets/phone.svg" width="20px"></q-img>
          </div>
      <section dir="rtl" class="q-pa-lg q-mx-auto text-center">

          <div class="row justify-center items-center reverse-wrap text-center q-gutter-md">
            <div class="col-md-6 col-sm-6 col-xs-12 text-center q-gutter-md form-bg q-pa-xl rounded-borders ">
              <q-input v-model="text"  bg-color="white" filled
                >
                <template v-slot:append>
                    <q-avatar>
                    <img src="../assets/person.svg" width="32px" />
                    </q-avatar>
                    </template> 
                        <template v-slot:prepend>
                            <label>نام و نام خانوادگی</label>
                    </template>
                </q-input>
              <q-input v-model="text"  bg-color="white" filled
                >
                <template v-slot:append>
                    <q-avatar>
                    <img src="../assets/phone.svg" width="32px" />
                    </q-avatar>
                    </template> 
                        <template v-slot:prepend>
                            <label>تلفن همراه  </label>
                    </template>
                </q-input>
              <q-input v-model="text" bg-color="white"  filled
                >
                <template v-slot:append>
                    <q-avatar>
                    <img src="../assets/email.svg" width="32px" />
                    </q-avatar>
                    </template> 
                        <template v-slot:prepend>
                            <label>ایمیل </label>
                    </template>
                </q-input>
               
          
                <q-input
                v-model="message"
                type="textarea"
                placeholder="متن پیام شما..."
                bg-color="white"
                filled
                rows="4"
            />
            <q-btn style="width: 50%;" class="bg-primary text-center q-mx-auto text-white q-my-xl">ارسال</q-btn>
            </div>
            <!-- <div class="col-md-6  rounded-borders font-style">
             <div class="info-container">
              <div class=" q-my-md ">
                <span  class="text-warning">
                    شماره تلفن :
                </span>
                <span class="text-white">
                    02188308288</span>
              </div>
              <div class=" q-my-md ">
                <span class="text-warning">
                     آدرس :
                </span>
                <span class="text-white">
                    تهران خیابان قائم مقام فراهانی، خیابان سنایی، خیابان مشاهیر، خیابان غفاری، پلاک 12</span>
              </div>
              <div class=" q-my-md ">
                <span   class="q-my-md text-warning">
                    ایمیل :
                </span>
                <span class="text-white">
                    
            info@qbimeh.ir
        </span>
              </div>
              <div>
                  <span  class="text-warning text-center">
                      شبکه های اجتماعی : 
                  
                  </span>
                  <a class="cursor-pointer">
          <q-img width="22px" src="/src/icons/whatsapp.svg"/>
         </a>
      <a class="cursor-pointer">
          <q-img width="22px" src="/src/icons/twitter-x.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img  width="22px"  src="/src/icons/telegram.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img   width="22px" src="/src/icons/robika.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img  width="22px"  src="/src/icons/linkedin.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img   width="22px" src="/src/icons/instagram.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img   width="22px" src="/src/icons/facebook.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img   width="22px"  src="/src/icons/eitaa.svg"/>
              </a>
              <a class="cursor-pointer"><q-img width="22px" src="/src/icons/bale.svg"/></a>  
                </div>
             </div>
            </div> -->

            <div class="col-md-4  text-right rounded-borders font-style">
              <div>
            <LottieAnimation
            :animationData="lottieData"
            :loop="true"
             style="width: 400px; margin: auto;"
            :autoplay="true"
            />
          </div>
             <div>
              <div class=" q-my-sm">
                <span  class="text-primary">
                    شماره تلفن :
                </span>
                <span class="text-black">
                    02188308288</span>
              </div>
              <div class=" q-my-md ">
                <span class="text-primary">
                     آدرس :
                </span>
                <span class="text-black">
                    تهران خیابان قائم مقام فراهانی، خیابان سنایی، خیابان مشاهیر، خیابان غفاری، پلاک 12</span>
              </div>
              <div class=" q-my-md ">
                <span   class="q-my-md text-primary">
                    ایمیل :
                </span>
                <span class="text-black">
                    
            info@qbimeh.ir
        </span>
              </div>
              <div>
                  <span  class="text-primary">
                      شبکه های اجتماعی : 
                  
                  </span>
                  <a class="cursor-pointer">
          <q-img width="36px" src="/src/icons/whatsapp 1 (1).svg"/>
         </a>
      <a class="cursor-pointer">
          <q-img width="36px" src="/src/icons/twitter (1) 1 (1).svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img  width="36px"  src="/src/icons/telegram (2) 1 (1).svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img   width="36px" src="/src/icons/robika (1).svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img  width="36px"  src="/src/icons/linkedin (1) 1 (2).svg"/>
              </a>
              <a class="cursor-pointer"  >
                  <q-img   width="36px" src="/src/icons/instagram (3) 1 (1).svg"/>
              </a>
              <!-- <a class="cursor-pointer">
                  <q-img   width="36px" src="/src/icons/icons8-facebook.svg"/>
              </a> -->
              <!-- <a class="cursor-pointer">
                  <q-img   width="22px"  src="/src/icons/eitaa.svg"/>
              </a> -->
              <a class="cursor-pointer"><q-img width="36px" src="/src/icons/bale.svg"/></a>  
                </div>
             </div>
           
            </div>
          </div>
      </section>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import LottieAnimation from '../components/lottie-animation.vue';
  import lottieData from 'src/contact.json';
  export default defineComponent({
    name: "ContactUs",
    data(){
        return{
            message : '' ,
            lottieData: lottieData
        }
    },
    components: {
      LottieAnimation
    },
  });
  </script>
  
<style scoped>
.form-bg{
  background: #EEEE;
  background-position: center;
  background-size: cover;
  height: 80vh;
}
.contact-title{
  font-size: 24px;
}
.font-style{
  font-size: 18px;
}


 .cursor-pointer{
    margin: 10px;
 }
 label{
    font-size: 16px;
 }

 .shape2-img3{
  animation: shape-img3 4s infinite 2s linear;
  position: absolute;
}
.shape3-img3{
  animation: shape-circle-img3 4s infinite 2s linear;
  position: absolute;
  left: 14px;
}
.shape4-img3{
  animation: shape-circle-img3 4s infinite 2s linear;
  position: absolute;
  left : 20px;
  top : 10px;
}

.shape6-img3{
  animation: shape-img3 4s infinite 2s linear;
  position: absolute;
  left : 40px;
  bottom: 10px;
}
@keyframes shape-img3 {
  0%{
    transform: rotate(360deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
@keyframes shape-circle-img3 {
  0%{
    transform: translate(100px , -20px);
  }
  100%{
    transform: translateX(0px);
  }
}
</style>
  