<template>
  <q-page class="flex flex-center">
    <InsuranceTypeCards />
    <div class="column">
      <div>
        <InsuranceFeatures />
      </div>
      <InsuranceCompanies />
      <ConsultRequest />
      <InsuranceNews/>
      <InsuranceForm />
      <ImageGallery />
      <VideoGallery />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import InsuranceTypeCards from "../components/Insurance-Type/insurance-type-cards.vue";
import InsuranceFeatures from "../components/Insurance-Options/insurance-features.vue";
import ConsultRequest from "../components/Consult-Request/consult-request.vue";
import InsuranceCompanies from "../components/Co-Companies/insurance-companies.vue";
import VideoGallery from "../components/Video-Gallery/video-gallery.vue";
import ImageGallery from "../components/Image-Gallery/image-gallery.vue";
import InsuranceForm from "../components/Prolong-Insurance/insurance-form.vue";
import InsuranceNews from "../components/Insurance-News/insurance-news.vue";
export default defineComponent({
  name: "IndexPage",
  components: {
    InsuranceTypeCards,
    InsuranceFeatures,
    ConsultRequest,
    InsuranceCompanies,
    VideoGallery,
    ImageGallery,
    InsuranceForm,
    InsuranceNews
  },
});
</script>

<style></style>
