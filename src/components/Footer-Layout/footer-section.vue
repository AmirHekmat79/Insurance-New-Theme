<template>
    <section  class="row justify-center items-center shadow-10 top-footer q-gutter-lg">
     
      <div class="col-md-3 common-link-container  col-sm-6 col-xs-12"> 
        <h2 class="title q-mr-sm"> لینک های پر کاربرد </h2>
        <ul class="contactus">
          <div>
            <li class="row q-gutter-sm items-center q-my-sm">
              آدرس بیمه مرکزی
            </li>
          
            <li class="row q-gutter-sm items-center  q-my-sm" >
              آدرس سنهاب
            </li>
            
             <li class="row q-gutter-sm items-center q-my-sm"> 
              پیگیری درخواست
            </li>
             <li class="row q-gutter-sm items-center q-my-sm"> 
              دانلود نسخه موبایل
            </li>
             <li class="row q-gutter-sm items-center q-my-sm"> 
              قوانین و مقررات
            </li>
          </div>
        </ul>
      </div>
      <div class="col-md-3 site-feature-container  col-sm-6 col-xs-12"> 
        <h2 class="title q-mr-sm"> امکانات سایت </h2>
        <ul class="site-features">
          <li><a>   درباره ما </a></li>
          <li><a> خدمات ما  </a> </li>
          <li><a> تماس با ما </a></li>
          <li><a> پیشنهادات ، انتقادات و شکایات </a></li>
          <li> <a> پرسش های متداول</a> </li>
          
        </ul>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12 sign-img-container">
        <q-img class="enahad-sign" src="../../assets/enahad.png" width="150px"></q-img>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12 sign-img-container"> 
        <q-img class="international-sign" src="../../assets/internationalSign.png" width="150px"></q-img>
      </div>
    </section>
    <section dir="rtl" class="row justify-center items-center sub-footer ">
      <div class="col-md-6"> 
       <q-btn class="logo-btn q-my-md"><q-img src="../../assets/footerLogo.png" width="200px"></q-img></q-btn>
       <div class="row justify-center items-center q-my-lg q-gutter-sm">
         <q-img src="../../assets/telegramX.png" width="24px"></q-img>
         <q-img src="../../assets/linkedin.png" width="24px"></q-img>
         <q-img src="../../assets/youtube.png" width="24px"></q-img>
         <q-img src="../../assets/whatsapp.png" width="24px"></q-img>
        <q-img src="../../assets/telegram.png" width="24px"></q-img>
       </div>
       <div class="row justify-center items-center q-gutter-sm ">
         <div class="q-mb-lg"> <q-img src="../../assets/Call.png" width="24px"></q-img></div>
         <p class="text-subtitle call-number">021 - 12345678</p>
       </div>
       <div class="row justify-center items-center ">
          <div class="q-mb-xl"><q-img src="../../assets/Location.png" width="24px"></q-img></div>
            <p class="sub-footer-location-text">
              تهران  -  خیابان ولیعصر  -   نبش خیابان توانیر(عباس پور)   -   پلاک ۲۴۹۲   -    طبقه ۱  -   واحد ۱۰۴
            </p>
       </div>
      </div>
      <div class="col-md-6">
        <div id="footer-map" style="height: 200px; width:640px;"></div>
      </div>
     
    </section>
    <q-footer  class="Footer text-center" elevated>
        {{ InsuranceFooterTitle?.footerContent }}
    </q-footer>
  </template>
  
  <script>
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  import apiService from 'src/services/api-services';
  export default {
    name: 'FooterSection',
    data() {
      return {
        map: null ,
        InsuranceFooterTitle : null
      }
    },
    mounted() {
      this.initMap();
      this.getPolicyIntroduction();
    },
    methods: {
      initMap() {
        this.map = L.map('footer-map', {
          center: [51.5074, -0.1278],
          zoom: 13,
          scrollWheelZoom: false ,
        })
      
        L.tileLayer('@/assets/map.png', {
        }).addTo(this.map)
  
        L.marker([51.5074, -0.1278]).addTo(this.map)
      
      } ,
      getPolicyIntroduction() {
        apiService
          .getPolicyIntroduction('sabz')
          .then((response) => {
            this.InsuranceFooterTitle = response.data.message;
          })
          .catch((error) => {
            console.error('Error fetching insurance centre info:', error);
          });
      },
    }
  }
  </script>
  
  <style scoped>
  .title {
    font-size: 20px;
    font-weight: 500;
  }
  .Footer {
    padding: 11px;
    background: #3d8de8;
    color: #fff !important;
    position: absolute;
    overflow: hidden;
  }
  .top-footer {
    padding-bottom:  130px;
    padding-right: 40px;
    background: #ffff;
  }
  .sub-footer{
    padding:40px 30px;
    margin: auto;
    text-align: center;
    background: #eee;
  }
  #footer-map {
    width: 100%;
    height: 100%;
  }
  .site-features , .contactus{
    font : 14px 'iransans';
  }
  .site-features li{
    margin: 12px auto;
  }


.common-link-container , .site-feature-container {
  border : 1px solid #007BFF;
  border-radius: 20px;
  width: 288px;
  height: 342px;
  direction: rtl;
}

.sign-img-container{
  background: #CCE4FF;
  border-radius: 20px;
  width: 186px;
  height: 342px;
  direction: rtl;
  
}
.international-sign{
  margin: 60px 20px;
  text-align: center;
}
.enahad-sign{
  margin: 60px 20px;
  text-align: center;
}
.logo-btn{
  background: #003975;
  border-radius: 20px;
}
.sub-footer-location-text{
  white-space: wrap;
  line-height: 20px;
  width:405px;
  height: 122px;
  margin-top: 50px;
  color:#003975;
  font-weight: bolder;
}
.call-number{
  color : #003975;
}
  </style>

