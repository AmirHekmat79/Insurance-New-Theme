<template>
  <div class="q-py-lg q-my-lg q-mx-md text-center image-full-content shadow-1">
    <div class="row justify-end q-mr-md items-center">
      <h2 class="gallery-title">گالری تصاویر</h2>
    </div>
    <div
      class="row justify-around items-center wrap q-gutter-sm large-scale-gallery"
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
      class="row justify-around items-center wrap q-gutter-sm small-scale-gallery"
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
          <div class="flip-box-back shadow-10">
            <h6 class="text-center image-title">{{ item.title }}</h6>
          </div>
        </div>
      </div>
    </div>
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
.image-title {
  margin: 70px auto !important;
  text-align: center;
}
.gallery-title {
  font-size: 32px;
  font-weight: bolder;
  text-align: right;
  color: #003975 !important;
}
.image-full-content {
  background: #dfedfc;
  border-radius: 80px;
  padding: 30px;
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
  margin-top: 20px;
}

.flip-box-inner {
  position: relative;
  width: 300px;
  height: 200px;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box-front,
.flip-box-back {
  position: absolute;
  width: 300px;
  height: 200px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #0093E9;
  background-color: #8BC6EC;
  background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
 

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
