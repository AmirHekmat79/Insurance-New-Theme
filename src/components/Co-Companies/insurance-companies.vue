<template>
    <div class="q-pa-sm Companies-Container">
      <div class="row justify-around items-center text-center q-gutter-md">
        <h3 class="company-section-title">شرکت های بیمه</h3>
      </div>
      <div class="row items-center justify-center q-mx-auto q-gutter-md">
        <div v-for="item in InsuranceCompanies" :key="item.id">
            {{ item.title }}
        </div>
    </div>
    </div>
  </template>
    
    
    <script>
    import { defineComponent } from 'vue';
    import apiService from 'src/services/api-services';
    export default defineComponent({
      name: 'InsuranceCompanies',
      data() {
        return {
          InsuranceCompanies : [],
        //     { id: 1, src: alborz },
        //     { id: 2, src: dana },
        //     { id: 3, src: pasargad },
        //     { id: 4, src: parsian },
        //     { id: 5, src: mihan },
        //     { id: 6, src: kosar },
        //     { id: 7, src: iran },
        //     { id: 8, src: taavon },
        //     { id: 9, src: tejarat },
        //     { id: 10, src: asia },
        //     { id: 11, src: saman },
        //     { id: 12, src: moalem },
        //     {id : 13 , src:  dayinsurance} ,
        //      {id:14, src : carafarin},
        //      {id:15 ,src : novin},
        //       {id:16 , src : ourinsurance},
        //     {id:17 ,src: razi},
        //     {id:18 ,src: sina},
        //       {id:19,src:asmari},
        //       {id:19,src:arman}
        //   ],
          currentSlide: '0',
          autoplay: true,
          autoplayInterval: 3000,
          numSlides: 0,
        };
      },
      mounted() {
      this.getPolicyIntroduction();
      this.numSlides = Math.ceil(this.InsuranceCompanies.length / 5);
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
    .cards {
      width: 100px;
      height: 100px;
      background: #ef0101;
      color: aliceblue;
    }
  
  
  
    </style>