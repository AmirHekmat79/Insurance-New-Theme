<template>
  <div class="q-py-lg q-my-lg q-mx-md text-center image-full-content " >
    <div class="row justify-center  items-center title-container">
      <h2 class="gallery-title ">گالری تصاویر</h2>
      <q-img src="../../assets/img-gallery.svg" width="32px"></q-img>
    </div>
    <div
      class="row justify-center items-center wrap   large-scale-gallery"
    >
      <div
        class="col-md-3 flip-box"
        v-for="(item, index) in InsuranceImageAlbums.slice(0, 4)"
        :key="index"
      >
        <div class="flip-box-inner">
          <div class="flip-box-front">
            <q-img class="img-item" :src="item?.metaMediaFileUrl"></q-img>
          </div>
          <div class="flip-box-back shadow-10">
            <h6 class="text-center image-title">{{ item.title }}</h6>
          </div>
        </div>
      </div>
    </div>
    <div
      class="row justify-center items-center wrap q-gutter-sm small-scale-gallery"
    >
      <div
        class="col-md-3 flip-box"
        v-for="(item, index) in InsuranceImageAlbums"
        :key="index"
      >
        <div class="flip-box-inner">
          <div class="flip-box-front">
            <q-img class="img-item" :src="item?.metaMediaFileUrl"></q-img>
          </div>
          <div class="flip-box-back shadow-3">
            <h6 class="text-center image-title">{{ item.title }}</h6>
          </div>
        </div>
      </div>
    </div>
    <q-img src="../../assets/Rectangle22.png" class="wave-img" alt=""></q-img>
  </div>
  
</template>

<script>
import { defineComponent } from "vue";
import apiService from "src/services/api-services";
export default defineComponent({
  name: "ImageGallery",
  data() {
    return {
      InsuranceImageAlbums: [],
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
          this.InsuranceImageAlbums = response.data.message?.imageAlbums || [];
        })
        .catch((error) => {
          console.error("Error fetching insurance centre info:", error);
        });
    },
  },
});
</script>

<style scoped>
*{
  
  padding: 0px !important;
  margin: 0px !important;
}
.title-container{
  margin-bottom: 20px !important;
}
.image-title {
  margin: 80px auto !important;
  text-align: center;
}
.gallery-title {
  font-size: 32px;
  margin-right: 10px !important;
  font-weight: bolder;
  text-align: right;
  color: #003975 !important;
}
.image-full-content {
  max-width: 100%;
  width: 100%; /* add this */
  box-sizing: border-box; /* add this */
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(204,228,255,1) 20%, rgba(204,228,255,1) 100%);
  position: relative;
  padding-top: 20px !important;
  padding-bottom: 50px !important;
  padding-left: 0px;
  padding-right: 0px;
  opacity: 0.9;
}

.img-item {
  width: 300px;
  height: 200px;
  border-radius: 10px;
}
.flip-box {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
  margin-top: 20px !important;
  margin-left: 10px !important;
  border-radius: 10px;
}

.flip-box-inner {
  border-radius: 10px;
  position: relative;
  width: 300px;
  height: 200px;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
  cursor: pointer;
}

.flip-box-front,
.flip-box-back {
  border-radius: 10px;
  position: absolute;
  width: 300px;
  height: 200px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #0093e9;
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
}

.flip-box-front {
  background-color: transparent;
  color: black;
}

.flip-box-back {
  background-color: #eee;
  color: black;
  transform: rotateY(180deg);
}

@media screen and (min-width: 1200px) {
  .small-scale-gallery {
    display: none;
  }
}
@media screen and (max-width: 1199px) {
  .large-scale-gallery {
    display: none;
  }
}
</style>
