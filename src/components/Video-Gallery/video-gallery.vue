<template>
  <!-- <div
    class="q-pa-md q-my-lg q-mx-md-lg q-mx-auto text-center video-full-content relative-position"
  >
  <div class="text-right q-ma-lg">
    <q-img class="shape1-img3" src="../../assets/shape1.svg" width="20px"></q-img>
   </div>
   <div class="text-right q-ma-lg">
    <q-img class="shape2-img3" src="../../assets/triangle.svg" width="20px"></q-img>
   </div>
    <div class="row justify-center q-mr-md items-center">
      <h3 class="gallery-title q-my-md q-mx-sm">گالری ویدئوها</h3>
      <q-img src="../../assets/video-status-icon.svg" width="32px"></q-img>
    </div>
    
    <div class="flex q-my-md">
      
      <div
        class="col-md-6 video-desktop"
        v-for="(item, itemIndex) in InsuranceVideoGalleries.slice(0, 1)"
        :key="itemIndex"
      >
        <div class="bg-white shadow text-white">
          <div class="row justify-center items-center card-section">
            
            <video class="expand-video" controls>
              <source :src="item.metaMediaFileUrl" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        
        <q-carousel
          v-model="currentSlide"
          transition-prev="slide-right"
          transition-next="slide-left"
          height="auto"
          infinite
          animation="fade"
          padding
          :autoplay="false"
          :autoplay-interval="autoplayInterval"
          :autoplay-progress-bar="false"
          swipeable
          draggable
          control-color="black"
          navigation
        >
          <q-carousel-slide
            v-for="(slide, index) in numSlides"
            :key="index"
            :name="index.toString()"
          >
            <div class="row justify-center items-center text-center">
              
              <div class="column justify-center items-center q-gutter-sm">
                <div
                  class="col-auto videos-container text-center"
                  v-for="(item, itemIndex) in InsuranceVideoGalleries?.slice(
                    index * 3,
                    Math.min((index + 1) * 3, InsuranceVideoGalleries.length)
                  )"
                  :key="itemIndex"
                >
                  <div class="text-center bg-white shadow text-white">
                    <div
                      class="column justify-center items-center card-section"
                    >
                      <video controls>
                        <source :src="item.metaMediaFileUrl" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
        
      </div>
      
      <div class="text-right q-ma-lg">
      <q-img class="shape2-img3 q-mx-xl" src="../../assets/triangle.svg" width="30px"></q-img>
     </div>
      </div>
      <div class="shape3-img3 text-right q-ma-lg">
      <q-img  src="../../assets/6.png" width="80px"></q-img>
     </div>
      <div class="shape4-img3 text-right q-ma-lg">
      <q-img  src="../../assets/shape5.png" width="25px"></q-img>
     </div>
      <div class="shape6-img3 text-right q-ma-lg">
      <q-img  src="../../assets/shape1.svg" width="15px"></q-img>
     </div>
      <div class="shape5-img3 text-right q-ma-lg">
      <q-img  src="../../assets/shape5.png" width="26px"></q-img>
     </div>
    </div> -->
    <div class="row justify-center q-mr-md items-center q-py-xl">
      <h3 class="gallery-title q-my-md q-mx-lg">گالری ویدئوها</h3>
      <q-img src="../../assets/video-status-icon.svg" width="32px"></q-img>
    </div>
 <div class="row justify-around items-center q-py-lg">
  <div class="col-md-4 q-pa-md relative-position" v-for="item in InsuranceVideoGalleries.filter(item => item.id !== 51361)" :key="item.id">
    <video  ref="videoPlayer"   class="expand-video"   width="100%" height="276px">
              <source :src="item.metaMediaFileUrl" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div @click="openDialog(item.metaMediaFileUrl , item.title)" class="cursor-pointer"><q-img  width="60px" class="absolute-center" src="../../assets/play-button-round-icon.svg"></q-img></div>
  </div>
 </div>
 <q-dialog
     class="Dialog"
      v-model="showDialog"
       :full-width="$q.screen.lt.md"
    >
      <q-card>
        <q-card-actions align="right" class="bg-white text-teal">
           <q-btn class="popup-btn"> <q-icon name="close" v-close-popup ></q-icon></q-btn>
        </q-card-actions>
        <q-card-section>
          <div class="text-h6 text-center">{{videoTitle }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <video ref="videoPlayer"   class="expand-video"   width="100%">
              <source :src="selectedVideoUrl" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </q-card-section>

      
      </q-card>
    </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import apiService from "src/services/api-services";

export default defineComponent({
  name: "VideoGallery",

  data() {
    return {
      InsuranceVideoGalleries: [],
      currentSlide: "0",
      autoplay: true,
      autoplayInterval: 3000,
      numSlides: 0,
      showDialog: false,
      selectedVideoUrl : '' ,
      videoTitle : ''
    };
  },

  mounted() {
    this.getPolicyIntroduction();
  },

  methods: {
    getPolicyIntroduction() {
      apiService
        .getPolicyIntroduction("sabz")
        .then((response) => {
          this.InsuranceVideoGalleries =
            response.data.message?.videoGalleries || [];
          // this.numSlides = Math.ceil(this.InsuranceVideoGalleries.length / 3);
        })
        .catch((error) => {
          console.error("Error fetching insurance centre info:", error);
        });
    },
 
    openDialog(videoUrl , videoTitle) {
      this.showDialog = true;
      this.selectedVideoUrl = videoUrl;
      this.videoTitle = videoTitle;
    },
 }

  // watch: {
  //   currentSlide(newSlide) {
  //     if (newSlide === this.numSlides.toString()) {
  //       this.currentSlide = "0"; // Reset the slide to the first one
  //     }
  //   },
  // },
});
</script>

<style scoped>
.popup-btn{
  outline: none !important;
  box-shadow: none !important;
}
.gallery-title {
  font-size: 32px;
  font: 32px "iransans";
  margin-right: 13px !important;
  color: #003975 !important;
  text-align: right;
}
video{
  border-radius: 8px;
}
/* @media screen and  {
  
} */
/* .shape1-img3{
  animation: shape-img3 4s infinite 2s linear;
  position: absolute;
  bottom:10px;
}
.shape2-img3{
  animation: shape-img3 4s infinite 2s linear;
  position: absolute;
  top:20%;
  
}
.shape3-img3{
  animation: shape-circle-img3 4s infinite 2s linear;
  position: absolute;
  left:30px;
}
.shape4-img3{
  animation: shape-circle-img3 4s infinite 2s linear;
  position: absolute;
  left:30px;
}
.shape5-img3{
  animation: shape-circle-img3 4s infinite 2s linear;
  position: absolute;
  top:30px;
}
.shape6-img3{
  animation: shape-img3 4s infinite 2s linear;
  position: absolute;
  bottom: 0px !important;
  z-index: 1;
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
    transform: translate(50px , -50px);
  }
  100%{
    transform: translateX(0px);
  }
}
 

video {
  border-radius: 10px;
  width: 298px;
  height: 150px;
  background-position: center;
  background-size: cover;
  border-style: none;
  object-fit: contain;
  overflow-clip-margin: content-box;
  overflow: clip;
}
.expand-video {
  border-radius: 10px;
  width:690px;
  height: 480px;
  background-position: center;
  background-size: cover;
  border-style: none;
  object-fit: contain;
  overflow: clip;
}
.video-desktop {
  display: block;
}


@media screen and (max-width: 1052px) {
  .video-desktop {
    display: none;
  }
  .videos-container {
    margin: auto !important;
    text-align: center;
    width: 100%;
  }
} */
</style>
