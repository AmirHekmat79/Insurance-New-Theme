<template>
    <div class="row justify-center items-center q-pa-lg q-my-lg">
        <div class="col-md-8">
            <div class="row justify-center items-center q-gutter-md">
                           <div class="col-md-4">
                            <q-input  class="Input" rounded outlined v-model="text">
                                <template v-slot:prepend>
                                    <img class="img-inner" src="src/assets/month.svg">
                                </template>
                                <template v-slot:append>
                                    <label  class="text-subtitle2 label-font">ماه</label>
                                </template>
                        </q-input>  
                           </div>
                           <div class="col-md-4">
                            <q-input  class="Input" rounded outlined v-model="text">
                                <template v-slot:prepend>
                                    <img class="img-inner" src="src/assets/email.svg">
                                </template>
                                <template v-slot:append>
                                    <label  class="text-subtitle2 label-font"> ایمیل</label>
                                </template>
                        </q-input>  
                           </div>
                           <div class="col-md-4">
                            <q-input  class="Input" rounded outlined v-model="text">
                                <template v-slot:prepend>
                                    <img  class="img-inner" src="src/assets/phone.svg">
                                </template>
                                <template v-slot:append>
                                    <label  class="text-subtitle2 label-font"> شماره همراه</label>
                                </template>
                        </q-input>  
                           </div>
                           <div class="col-md-4">
                            <q-input  class="Input" rounded outlined v-model="text">
                                <template v-slot:prepend>
                                    <img class="img-inner" src="src/assets/umberella.svg">
                                </template>
                                <template v-slot:append>
                                    <label  class="text-subtitle2 label-font">نوع بیمه</label>
                                </template>
                                
                        </q-input>  
                           </div>
                           <div class="col-md-4">
                            <q-input  class="Input" rounded outlined v-model="text">
                                <template v-slot:prepend>
                                    <img class="img-inner" src="src/assets/location.svg">
                                </template>
                                <template v-slot:append>
                                    <label  class="text-subtitle2 label-font">استان </label>
                                </template>
                        </q-input>  
                           </div>
                           <div class="col-md-4">
                            <q-input  class="Input" rounded outlined v-model="text">
                                <template v-slot:prepend>
                                    <img class="img-inner" src="src/assets/person.svg">
                                </template>
                                <template v-slot:append>
                                    <label  class="text-subtitle2 label-font">نام خانوادگی  </label>
                                </template>
                        </q-input>  
                           </div>
                          
                           <div class="col-md-4">
                            <q-input  class="Input" rounded outlined v-model="text">
                                <template v-slot:prepend>
                                    <img class="img-inner" src="src/assets/month.svg">
                                </template>
                                <template v-slot:append>
                                    <label class="text-subtitle2 label-font">   روز</label>
                                </template>
                        </q-input>  
                           </div>
                           <div class="col-md-4">
                            <q-input  class="Input" rounded outlined v-model="text">
                                <template v-slot:prepend>
                                    <img class="img-inner" src="src/assets/person.svg">
                                </template>
                                <template v-slot:append>
                                    <label  class="text-subtitle2 label-font">نام  </label>
                                </template>
                        </q-input>  
                           </div>
                           <div class="col-md-4">
                            <q-input  class="Input" rounded outlined v-model="text">
                                <template v-slot:prepend>
                                    <img class="img-inner" src="src/assets/building.png">
                                </template>
                                <template v-slot:append>
                                    <label  class="text-subtitle2 label-font">شهر </label>
                                </template>
                        </q-input>  
                        
                           </div>
                       <div class="col-md-4">
                        <q-btn class="submit-btn">یادآوری کن</q-btn>
                       </div>
            </div>
        </div>
        <div class="col-md-4">
            <h2 class="form-title">یادآور تمدید بیمه نامه</h2>
            <q-img class="form-img" src="src/assets/calender.png"></q-img>
        </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';

  
  export default defineComponent({
    name: 'InsuranceForm',
  
   
  });
  </script>
  
  <style scoped>
 
  .form-img{
    width: 300px;
    
  }
  .form-title{
    font-size: 26px;
    color: #003975;
  }
  .submit-btn{
    cursor: pointer;
    background: #007BFF;
    color:#fff;
    padding: 8px 24px;
  }
  .img-inner{
    width: 24px;
    height: 24px;
  }
  </style>