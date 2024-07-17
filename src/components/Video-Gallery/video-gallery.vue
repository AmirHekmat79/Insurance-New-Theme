<template>
  <div
    class="q-pa-md q-my-lg q-mx-md-lg q-mx-auto text-center video-full-content"
  >
    <div class="row justify-center q-mr-md items-center">
      <q-img src="../../assets/video-status-icon.svg" width="32px"></q-img>
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
    </div>
  </div>
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
          this.numSlides = Math.ceil(this.InsuranceVideoGalleries.length / 3);
        })
        .catch((error) => {
          console.error("Error fetching insurance centre info:", error);
        });
    },
  },

  watch: {
    currentSlide(newSlide) {
      if (newSlide === this.numSlides.toString()) {
        this.currentSlide = "0"; // Reset the slide to the first one
      }
    },
  },
});
</script>

<style scoped>
.gallery-title {
  font-size: 32px;
  font: 32px "iransans";
  color: #003975 !important;
  text-align: right;
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
}
</style>
