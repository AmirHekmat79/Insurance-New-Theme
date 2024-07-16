<template>
  <div class="row justify-center reverse-wrap items-center q-pa-xl q-mb-lg">
    <div class="col-md-8">
      <div class="row justify-center items-center q-gutter-md">
        <div class="col-md-4 col-sm-4 col-xs-6">
          <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:append>
              <img class="img-inner" src="src/assets/month.svg" />
            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm">ماه</label>
            </template>
          </q-input>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-6">
          <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:append>
              <img class="img-inner" src="src/assets/email.svg" />
            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm"> ایمیل</label>
            </template>
          </q-input>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-6">
          <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:append>
              <img class="img-inner" src="src/assets/phone.svg" />
            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm">
                شماره همراه</label
              >
            </template>
          </q-input>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-6">
          <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:append>
              <img class="img-inner" src="src/assets/umberella.svg" />
            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm">نوع بیمه</label>
            </template>
          </q-input>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-6">
          <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:append>
              <img class="img-inner" src="src/assets/location.svg" />
            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm">استان </label>
            </template>
          </q-input>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-6">
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
        </div>

        <div class="col-md-4 col-sm-4 col-xs-6">
          <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:append>
              <img class="img-inner" src="src/assets/month.svg" />
            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm"> روز</label>
            </template>
          </q-input>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-6">
          <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:append>
              <img class="img-inner" src="src/assets/person.svg" />
            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm">نام </label>
            </template>
          </q-input>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-6">
          <q-input class="Input" rounded outlined v-model="text">
            <template v-slot:append>
              <img class="img-inner" src="src/assets/building.png" />
            </template>
            <template v-slot:prepend>
              <label class="text-subtitle2 label-font q-ml-sm">شهر </label>
            </template>
          </q-input>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-6">
          <q-btn class="submit-btn"
            ><q-img
              class="submit-img q-mr-sm"
              src="src/assets/leftArrow.png"
            ></q-img
            >یاد آوری کن
          </q-btn>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="row justify-center items-center q-gutter-sm">
        <h2 class="form-title">یادآور تمدید بیمه نامه</h2>
        <q-img src="src/assets/head-idea-icon.svg" width="32px"></q-img>
      </div>
      <q-img class="form-img" src="src/assets/calender.png"></q-img>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InsuranceForm",
});
</script>

<style scoped>
.form-img {
  width: 300px;
}
.submit-img {
  width: 16px;
}
.form-title {
  font-size: 26px;
  color: #003975;
  text-align: center !important;
}
.submit-btn {
  cursor: pointer;
  background: #007bff;
  color: #fff;
  padding: 8px 24px;
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
