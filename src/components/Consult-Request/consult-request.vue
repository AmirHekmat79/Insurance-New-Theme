<template>
  <div
    class="row q-my-xl justify-center text-center reverse-wrap items-center q-py-lg q-gutter-md"
  >
    <div class="col-md-6 col-sm-6 col-xs-12">
      <form>
        
        <q-input class="Input" rounded outlined v-model="text">
          <template v-slot:append>
            <img class="img-inner" src="src/assets/person.svg" />
          </template>
          <template v-slot:prepend>
            <label class="text-subtitle2 label-font q-ml-sm"
              >نام خانوادگی
            </label>
          </template>
        </q-input>
        <q-input class="q-my-md Input" outlined rounded v-model="text">
          <template v-slot:append>
            <img class="img-inner" src="src/assets/phone.svg" />
          </template>
          <template v-slot:prepend>
            <label class="text-subtitle2 label-font q-ml-sm">
              شماره همراه
            </label>
          </template>
        </q-input>
        <q-input class="Input" rounded outlined v-model="text">
          <template v-slot:append>
            <img class="img-inner" src="src/assets/umberella.svg" />
          </template>
          <template v-slot:prepend>
            <label class="text-subtitle2 label-font q-ml-sm"> نوع بیمه </label>
          </template>
        </q-input>
        <q-btn class="submit-request q-my-md">
          <q-img
            class="q-mx-sm"
            src="../../assets/requestSubmit.png"
            width="20px"
          ></q-img
          >ثبت درخواست</q-btn
        >
      </form>
    </div>
    <div class="col-md-4 col-sm-6 col-xs-12">
      <h5 class="consult-title">درخواست مشاوره</h5>
      <q-img class="consult-img" src="../../assets/consultRequest.png"></q-img>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ConsultRequest",
});
</script>

<style scoped>
.consult-img {
  width: 490px !important;
  height: 372px !important;
}
.submit-request {
  background: #007bff;
  color: #fff;
}
.consult-title {
  font-size: 20px;
  font-weight: bolder;
}
@media screen and (min-width: 381px) and (max-width: 768px) {
  .Input {
    width: 100%;
  }
  .consult-img {
    width: 100% !important;
    height: 100% !important;
  }
}
.img-inner {
  width: 24px;
  height: 24px;
}

.Input {
  text-align: right;
  direction: rtl;
}
</style>
