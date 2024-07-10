<template>
    <div class="q-pa-md q-my-lg text-center Companies-Container">
        <h2 class="company-section-title">شرکت های بیمه</h2>
      <div class="row justify-around items-center text-center q-gutter-md">
        <div class="col-md-1 company-container" v-for="item in InsuranceCompanies.slice(0,6)" :key="item.id">
            <q-card class="card">
                <q-card-section>
                    <q-img :src="item.metaMediaLogoFileUrl"></q-img>
                </q-card-section>
            </q-card>
        </div>
        <!-- <div class="q-pa-md">
            <q-btn
            flat
            round
            color="white"
            @click="prevSlide"
            :disable="currentSlide === '0'"
            class="col-auto bg-dark q-px-sm navigation-btns q-ml-auto"
        >
            <q-icon name="chevron_left" />
        </q-btn>
            <q-carousel
            class="cursor-pointer q-mx-auto Carousel"
            v-model="currentSlide"
            transition-prev="slide-right"
            height="400px"
            width="100%"
            infinite
            animation="fade"
            padding
            :autoplay="autoplay"
            :autoplay-interval="autoplayInterval"
            :autoplay-progress-bar="false"
            swipeable
            draggable
            >
            <q-carousel-slide     v-for="(slide, index) in numSlides" :key="index"    :name="index.toString()" >
                <div class="row justify-around items-center q-gutter-sm">
                <div
                class="col-4 col-sm-4 col-md-2"
                v-for="(item, itemIndex) in InsuranceCompanies.slice(
                    parseInt(currentSlide) * 5,
                    (parseInt(currentSlide) * 5) + 5
                )"
                :key="itemIndex"
                >
                <q-card class="cards bg-white shadow text-white">
                    <q-card-section
                    class="row justify-center items-center card-section"
                    >
                    <q-img :src="item.src" class="card-img" width="82px" height="82px"></q-img>
                    </q-card-section>
                </q-card>
                </div>
            </div>
            </q-carousel-slide>
         
     
          
            </q-carousel>
            <q-btn
            flat
            round
            color="white"
            @click="nextSlide"
            :disable="currentSlide === (numSlides - 1).toString()"
            class="col-auto bg-dark q-px-sm navigation-btns q-mr-auto"
        >
            <q-icon name="chevron_right" />
        </q-btn>
        </div> -->
      </div>

    </div>
  </template>
    
    
    <script>
    import { defineComponent ,ref} from 'vue';
    import apiService from 'src/services/api-services';
    export default defineComponent({
      name: 'InsuranceCompanies',
      data() {
        return {
            InsuranceCompanies : [],
            currentSlide: '0',
            autoplay: true,
            autoplayInterval: 3000,
            numSlides: 0,
        };
      },
  
      mounted() {
      this.getPolicyIntroduction();
    },
      methods : {
        prevSlide() {
        this.currentSlide = (parseInt(this.currentSlide) - 1).toString();
        },
        nextSlide() {
        this.currentSlide = (parseInt(this.currentSlide) + 1).toString();
        },
        getPolicyIntroduction() {
         console.log(23 ,'sdasd');
        apiService
          .getPolicyIntroduction('sabz')
          .then((response) => {
            this.InsuranceCompanies = response.data.message?.insuranceCentre?.insuranceCompanies || [];
            console.log(this.InsuranceCompanies);
          })
          .catch((error) => {
            console.error('Error fetching insurance centre info:', error);
          });
      },
      }
      ,
      watch: {
      currentSlide(newSlide) {
        if (newSlide === this.numSlides.toString()) {
          this.currentSlide = '0'; // Reset the slide to the first one
        }
      },
    },
  
    });
    </script>
    
    <style scoped>
    
   
    .company-section-title {
      font-size: 24px;
    }
    .card {
      width: 150px;
      height: 150px;
      background: #fff;
    }
  
   
  
    </style>