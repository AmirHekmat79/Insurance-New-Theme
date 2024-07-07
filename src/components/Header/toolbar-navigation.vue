<template>
  <q-toolbar >
    <div class="row justify-between items-center toolbar-content">
      <div class="row justify-around items-center q-gutter-sm ">
        <q-btn class="register-btn"><a class="q-mx-md">ثبت نام</a><q-img src="../../assets/RegisterIcon.png" width="24px"></q-img></q-btn>
        <q-btn class="entrance-btn"><a class="q-mx-md">ورود</a><q-img src="../../assets/LoginIcon.png" width="24px"></q-img></q-btn>
        <q-btn class="text-black q-px-md search-btn" icon="search"></q-btn>
      </div>

       <div class="logo-container q-ml-auto">
        <q-img src="../../assets/logo.png" width="200px"></q-img>
      </div>
      </div>
 
  </q-toolbar>
</template>


<script>
import { defineComponent} from "vue";
export default defineComponent({
  name: "ToolbarNavigation",


});
</script>
<style scoped>
.search-btn{
  width: 48px;
  border : 2px solid #ABABAB;
  border-radius: 16px;
  background: #FFFFFF;
}
.entrance-btn{
  width: 160px;
  height: 40px;
  background: #eee;
  color : #007BFF;
  font-size:17px;
  border : 2px solid #007BFF;
  border-radius: 16px;
}
.register-btn{
  width: 160px;
  height: 40px;
  background: #007BFF;
  color : #FFFFFF;
  font-size:17px;
  border-radius: 16px;
}
.toolbar-content{
  width: 100%;
}
</style>
