<template>
  <q-layout view=" Lpr lFf">
    <div class="banner-styles relative-position">
      <q-header class="q-pa-md header absolute text-white">
        <ToolbarNavigation />
      </q-header>
      <h1
        ref="bannerTitle"
        class="absolute fixed-center banner-title text-white flex justify-center items-center"
      >
        بیمه،راه جبران خسارت
      </h1>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterSection />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import ToolbarNavigation from "../components/Header/toolbar-navigation.vue";
import FooterSection from "../components/Footer-Layout/footer-section.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    ToolbarNavigation,
    FooterSection,
  },
  mounted() {
    this.TypeWritterEffect();
  },
  methods: {
    TypeWritterEffect() {
      const bannerTitle = this.$refs.bannerTitle;
      if (!bannerTitle) return;

      let text = bannerTitle.textContent;
      bannerTitle.textContent = "";
      let i = 0;
      let timer = setInterval(() => {
        if (i >= text.length) {
          clearInterval(timer);
          return;
        }
        bannerTitle.textContent += text[i];
        i++;
      }, 100);
    },
  },
});
</script>

<style scoped>
.banner-styles {
  background: url(../assets/banner.png);
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 400px;
  opacity: 0/80;
}
.banner-title {
  font-weight: 900;
  background-color: #007bff;
  opacity: 40%;
  width: 100%;
  padding: 10px;
}
.header {
  width: 1280px;
  margin: auto;
  border-radius: 500px;
  margin-top: 50px;
  background: #cce4ff;
}
</style>
