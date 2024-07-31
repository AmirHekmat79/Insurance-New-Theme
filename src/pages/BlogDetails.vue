<template>
    <q-page style="min-height:400px">  
      <section dir="rtl" class="q-py-lg ">
         <div class="blogDetails">
          <h6>هر آنچه راجع به بیمه عمر نیاز است بدانید</h6>
         </div>
      </section>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "BlogDetails",
    
    components: {
    
    },
  });
  </script>
  
<style scoped>
 p {
    font-size: 14px;
    line-height: 24px;
  }

 .title span {
      font-size: 20px;
    }

    @media (max-width: 1023px) {
    .title {
      margin-top: 30px;
    }
  }
</style>
  