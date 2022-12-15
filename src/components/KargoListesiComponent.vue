<script setup>

import DuzenlemeComponent from "@/components/DuzenlemeComponent.vue";
import {reactive} from "vue";
import {useLoadingState} from "@/stores/loading_state";
import {useCargoState} from "@/stores/cargo_state";
import {usePersonState} from "@/stores/person_state";

const load = useLoadingState();
const cargoStore = useCargoState()
const personStore = usePersonState()

function desiHesapla(en, boy, yukseklik){
  return (en * boy * yukseklik/3000).toFixed(3)
}

cargoStore.yukle()
personStore.yukle()

</script>

<template>

  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <div class="loader" v-if="load.loading"></div>
      <div class="col-12">
        <h1>Kargolar</h1>
        <hr class="style">

        <table>
          <tr>
            <th> <font-awesome-icon icon="fa-solid fa-hashtag" /></th>
            <th><font-awesome-icon icon="fa-solid fa-circle" /> Gönderici</th>
            <th><font-awesome-icon icon="fa-solid fa-square" /> Alıcı</th>
            <th><font-awesome-icon icon="fa-solid fa-arrows-left-right" /> En</th>
            <th><font-awesome-icon icon="fa-solid fa-up-right-and-down-left-from-center" />  Genişlik</th>
            <th><font-awesome-icon icon="fa-solid fa-arrows-up-down" /> Yükseklik</th>
            <th><font-awesome-icon icon="fa-solid fa-weight-hanging" /> Ağırlık</th>
            <th><font-awesome-icon icon="fa-solid fa-cube" /> Desi</th>
            <th><button class="btn white right" @click="cargoStore.yukle()"><font-awesome-icon icon="fa-solid fa-arrows-rotate" /> Yenile</button></th>
          </tr>
          <div class="col-12" v-if="cargoStore.kargolar.length === 0">Kargo Bulunamadı kargo eklenmesi gerekiyor.</div>
          <tr v-for="kargo in cargoStore.kargolar">
            <td>{{ kargo[0] }}</td>
            <td>{{ personStore.kisiBul(kargo[1]) }}</td>
            <td>{{ personStore.kisiBul(kargo[2]) }}</td>
            <td>{{ kargo[3] }} cm</td>
            <td>{{ kargo[4] }} cm</td>
            <td>{{ kargo[5] }} cm</td>
            <td>{{ kargo[6] }} kg</td>
            <td>{{ desiHesapla(kargo[3], kargo[4], kargo[5])}}</td>
            <td class="right">
              <button class="btn" @click="cargoStore.selectedCargo=kargo"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Düzenle</button>
              /
              <button class="btn red"><a href=""><font-awesome-icon icon="fa-solid fa-trash" /> Sil</a></button>
            </td>
          </tr>
        </table>
        <br class="space">

        <button class="btn"><a href=""><font-awesome-icon icon="fa-solid fa-chevron-left" /> Önceki</a></button>
        <button class="btn">Sonraki <font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
        <br class="space">


      </div>
    </div>
    <div class="col-1"></div>
  </div>

  <DuzenlemeComponent></DuzenlemeComponent>
</template>


<style scoped>
/* Table */




table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  /* border: 1px solid #d4d4d4; */
}

th {
  background-color: #161612;
  color: #f2f2f2;
}

th, td {

  text-align: left;
  padding: 16px;
  transition: all 300ms ease-out;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* ---Table */







</style>