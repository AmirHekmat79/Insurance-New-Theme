<template>
  <section dir="rtl" class="row justify-center items-center sub-footer">
    <div class="col-md-3 col-xl-6 col-xs-6">
      <q-btn class="logo-btn q-my-md"
        ><q-img src="../../assets/footerLogo.png" width="200px"></q-img
      ></q-btn>
      <div class="row justify-start items-center q-my-lg q-gutter-md">
        <a class="cursor-pointer">
                  <q-img  width="24px"  src="/src/icons/telegram (2) 1 (1).svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img  width="24px"  src="/src/icons/linkedin (1) 1 (2).svg"/>
              </a>
              <a class="cursor-pointer">
          <q-img width="24px" src="/src/icons/twitter (1) 1 (1).svg"/>
              </a>
        <a class="cursor-pointer">
          <q-img width="24px" src="/src/icons/whatsapp 1 (1).svg"/>
         </a>
        <a class="cursor-pointer"  >
                  <q-img   width="24px" src="/src/icons/instagram (3) 1 (1).svg"/>
              </a>
      </div>
      <div class="row justify-start items-center q-gutter-sm">
        <div class="q-mb-md">
          <q-img src="../../assets/Call.png" width="24px"></q-img>
        </div>
        <p class="text-subtitle call-number">021 - 12345678</p>
      </div>
      <div class="row justify-start items-center q-gutter-sm">
        <div class="q-mb-md">
          <q-img src="../../assets/email.svg" width="24px"></q-img>
        </div>
        <p class="text-subtitle call-number">Info@easybimeh.com</p>
      </div>
      <div class="row justify-start items-center">
        <div>
          <p class="sub-footer-location-text">
            تهران - خیابان ولیعصر - نبش خیابان توانیر - پلاک ۲۴۹۲ - طبقه ۱ -
            واحد ۱۰۴
          </p>
        </div>
      </div>
    </div>

    <div class="col-md-3 col-xl-6  site-feature-container col-xs-6">
      <h2 class="title q-mr-sm">امکانات سایت</h2>
      <ul class="site-features">
        <li><a> درباره ما </a></li>
        <li><a> خدمات ما </a></li>
        <li><a> تماس با ما </a></li>
        <li><a> پیشنهادات ، انتقادات و شکایات </a></li>
        <li><a> پرسش های متداول</a></li>
      </ul>
    </div>
    <div class="col-md-3 col-xl-6  common-link-container col-xs-6">
      <h2 class="title q-mr-sm">لینک های پر کاربرد</h2>
      <ul class="contactus">
        <li class="row q-gutter-sm items-center q-my-sm">آدرس بیمه مرکزی</li>

        <li class="row q-gutter-sm items-center q-my-sm">آدرس سنهاب</li>

        <li class="row q-gutter-sm items-center q-my-sm">پیگیری درخواست</li>
        <li class="row q-gutter-sm items-center q-my-sm">دانلود نسخه موبایل</li>
        <li class="row q-gutter-sm items-center q-my-sm">قوانین و مقررات</li>
      </ul>
    </div>
    <div class="col-md-3 ">
      <div id="footer-map" style="height: 200px; width: 340px"></div>
    </div>
  </section>

  <section class="row justify-center items-center text-center shadow-1 top-footer q-gutter-lg " >
    <div class="col-sm-1 col-xs-3 sign-img-container">
      <q-img
        class="enahad-sign"
        src="../../assets/enahad.png"
        width="80px"
      ></q-img>
    </div>
    <div class="col-sm-1 col-xs-3 sign-img-container">
      <q-img
        class="kargozar-sign"
        src="../../assets/kargozar.png"
        width="80px"
      ></q-img>
    </div>
    <div
      class="col-sm-1 col-xs-3"
      v-for="(item, index) in InsuranceCompanies.filter(
        (item) => item.id == 32
      )"
      :key="index"
    >
      <q-img :src="item.metaMediaLogoFileUrl" width="80px"> </q-img>
    </div>
    <div class="col-sm-1  col-xs-6 sign-img-container">
      <q-img
        class="international-sign"
        src="../../assets/internationalSign.png"
        width="80px"
      ></q-img>
    </div>
  </section>
  <q-footer class="Footer text-center" elevated>
    {{ InsuranceFooterTitle?.footerContent }}
  </q-footer>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import apiService from "src/services/api-services";
export default {
  name: "FooterSection",
  data() {
    return {
      map: null,
      InsuranceFooterTitle: null,
      InsuranceCompanies: [],
    };
  },
  mounted() {
    this.initMap();
    this.getPolicyIntroduction();
  },
  methods: {
    initMap() {
      this.map = L.map("footer-map", {
        center: [35.72713135221933, 51.4136544156329],
        zoom: 13,
        scrollWheelZoom: false,
        attributionControl: false
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(this.map);

      L.marker([35.72713135221933, 51.4136544156329]).addTo(this.map);
      
    },
    getPolicyIntroduction() {
      apiService
        .getPolicyIntroduction("sabz")
        .then((response) => {
          this.InsuranceFooterTitle = response.data.message;
          this.InsuranceCompanies =
            response.data.message?.insuranceCentre?.insuranceCompanies || [];
          console.log(this.InsuranceFooterTitle);
        })
        .catch((error) => {
          console.error("Error fetching insurance centre info:", error);
        });
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 20px;
  font-weight: 500;
}
.Footer {
  padding: 11px;
  background: #16697a;
  color: #fff !important;
  position: absolute;
  overflow: hidden;
}
.top-footer {
  text-align: center;
  padding: 50px;
  background: #ffff;
}
.sub-footer {
  padding: 40px 30px;
  margin: auto;
  /* text-align: center; */
  background: #eee;
}
#footer-map {
  width: 100%;
  height: 100%;
}
.site-features,
.contactus {
  list-style-type: none;
  font: 14px "iransans";
}
.site-features li {
  margin-top: 20px;
  cursor: pointer;
}
.site-features li:hover {
  color: #007bff;
}
.contactus li {
  margin-top: 20px;
  cursor: pointer;
}
.contactus li:hover {
  color: #007bff;
}

li::marker {
  color: #003975 !important;
}
.common-link-container,
.site-feature-container {
  width: 288px;
  height: 342px;
  direction: rtl;
}

.logo-btn {
  background: #003975;
  border-radius: 20px;
}
.sub-footer-location-text {
  white-space: wrap;
  line-height: 30px;
  width: 300px;
  height: 112px;
  margin-top: 10px;
  color: #003975;
  font-weight: bolder;
}
.call-number {
  color: #003975;
}
</style>
