<template>
 <div class="row justify-center items-center cards-container shadow-10   q-pa-xl">
  <div class="col-md-auto col-sm-3 card-column" v-for="item in insuranceTypes" :key="item.id">
    <q-card
      class="card text-white"
    >
      <q-card-section class="text-center q-pa-sm">
        <q-img class="card-img fixed-top" :src="item.src" ></q-img>
        <div class="text-h5 card-title q-my-lg">{{ item.title }}</div>
        
      </q-card-section>
    </q-card>
  </div>
 </div>
</template>

<script>
import { defineComponent} from "vue";
import heart from  '../../assets/heart.png';
import equipments from  '../../assets/equipments.png';
import car from  '../../assets/car.png';
import bike from  '../../assets/bike.png';
import fire from  '../../assets/fire.png';
import elevater from  '../../assets/elevater.png';
export default defineComponent({
  name: "InsuranceTypeCards",
  data(){
    return{
      insuranceTypes : [
        {id : 1 , title : 'بیمه درمان' ,  src : heart} ,
        {id : 2 , title : 'بیمه تجهیزات الکترونیکی ' , src : equipments } ,
        {id : 3 , title : 'بیمه بدنه ' , src : car } ,
        {id : 4 , title : 'بیمه موتورسیکلت' ,  src : bike} ,
        {id : 5 , title : 'بیمه آتش سوزی ' ,  src : fire} ,
        {id : 6 , title : 'بیمه آسانسور ' ,  src : elevater} ,
      ]
    }
  }

});
</script>

<style scoped>

.cards-container{
  background: #ffff;
  width: 100%;
  border-top-left-radius : 150px;
  border-top-right-radius : 150px;
}
.card{
  width: 182px;
  height: 120px;
  background: #CCE4FF;
}
.card-title{
  color: #002247;
}
.card-img{
  width: 80px;
  position: absolute;
  /* transform: translate(-40px ,-50px); */
  top : -60px;
  margin: auto;
}
.card-column{
  margin: 12px;
}
@media screen  and (max-width : 1345px){
  .card-column{
  margin: 40px;
}
}
</style>