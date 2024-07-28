<template>
    <q-page style="min-height:400px">
    <div class="row justify-around items-center">
        <div class="shape6-img3 text-right q-ma-lg">
    <q-img  src="../assets/shape1.svg" width="15px"></q-img>
   </div>
        <div class="text-right q-ma-lg">
            <q-img class="shape2-img3" src="../assets/triangle.svg" width="20px"></q-img>
        </div>
   
    <div class="shape4-img3 text-right q-ma-lg">
        <q-img  src="../assets/shape5.png" width="25px"></q-img>
    </div>
    <div class="shape3-img3 text-right q-ma-lg">
        <q-img  src="../assets/6.png" width="40px"></q-img>
    </div>
    </div>
        <div class="title text-right q-py-md q-mr-sm">
            <span class="q-pr-sm text-primary">تماس با ما</span>
            <q-img src="../assets/phone.svg" width="22px"></q-img>
          </div>
      <section dir="rtl" class="q-py-lg q-mx-auto text-center">

          <div class="row justify-center items-center q-gutter-lg">
            <div class="col-md-4 col-sm-6 col-xs-12 q-gutter-md">
              <q-input v-model="text"  filled
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
              <q-input v-model="text"  filled
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
              <q-input v-model="text"  filled
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
                filled
                rows="4"
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
  