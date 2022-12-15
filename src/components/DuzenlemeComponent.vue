<script setup>

import {useCargoState} from "@/stores/cargo_state";
import {useLoadingState} from "@/stores/loading_state";
import {usePersonState} from "@/stores/person_state";


const load = useLoadingState()
const cargoStore = useCargoState();
const personStore = usePersonState();
</script>

<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10" v-if="cargoStore.selectedCargo === null">Düzenlenecek kargoyu seçiniz..</div>
    <div class="col-10" v-if="cargoStore.selectedCargo !== null">
      <h1>Düzenle</h1>
      <hr class="style">

      <form action="">
        <div class="row">
          <div class="col-3">
            <label for="fgonderici">Gönderici</label>
          </div>
          <div class="col-9">
            <!--
            <input type="text" id="fgonderici" name="gonderici" v-if="cargoStore.selectedCargo === null" placeholder="Alıcı İsmi Giriniz">
            <input type="text" id="fgonderici" name="gonderici" v-else :placeholder="cargoStore.selectedCargo[1]">
            -->

            <select name="fgonderici">
              <option selected="selected" :value="cargoStore.selectedCargo[0]">
                {{ personStore.kisiBul(cargoStore.selectedCargo[1]) }} -- Değiştirmek için seçim yapın
              </option>

              <option v-for="kisi in personStore.persons" :value="kisi[0]"> {{ kisi[1] }}</option>


            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <label for="falici">Alıcı</label>
          </div>
          <div class="col-9">
            <!--
            <input type="text" id="falici" name="alici" v-if="cargoStore.selectedCargo === null" placeholder="Alıcı İsmi Giriniz">
            <input type="text" id="falici" name="alici" v-else :placeholder="cargoStore.selectedCargo[2]">
            -->

            <select name="falici">
              <option selected="selected" :value="cargoStore.selectedCargo[2]">
                {{ personStore.kisiBul(cargoStore.selectedCargo[2]) }} -- Değiştirmek için seçim yapın
              </option>
              <option v-for="kisi in personStore.persons" :value="kisi[1]"> {{ kisi[1] }}</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <label for="fen">En</label>
          </div>
          <div class="col-9">
            <input type="number" id="fen" name="en" v-if="cargoStore.selectedCargo === null" placeholder="En Giriniz">
            <input type="number" id="fen" name="en" v-else
                   :placeholder="'Şuan ki en: ' + cargoStore.selectedCargo[3] + ' cm'">
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <label for="fyukseklik">Yükseklik</label>
          </div>
          <div class="col-9">
            <input type="number" id="fyukseklik" name="yukseklik" v-if="cargoStore.selectedCargo === null"
                   placeholder="Yükseklik Giriniz">
            <input type="number" id="fyukseklik" name="yukseklik" v-else
                   :placeholder=" 'Şuan ki yükseklik: ' + cargoStore.selectedCargo[4] + ' cm'">
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <label for="fgenislik">Genişlik</label>
          </div>
          <div class="col-9">
            <input type="number" id="fgenislik" name="genislik" v-if="cargoStore.selectedCargo === null"
                   placeholder="Genişlik Giriniz">
            <input type="number" id="fgenislik" name="genislik" v-else
                   :placeholder="'Şuan ki genişlik: ' +cargoStore.selectedCargo[5] + ' cm'">
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <label for="fagirlik">Ağırlık</label>
          </div>
          <div class="col-9">
            <input type="number" id="fagirlik" name="agirlik" v-if="cargoStore.selectedCargo === null"
                   placeholder="Ağırlık giriniz">
            <input type="number" id="fagirlik" name="agirlik" v-else
                   :placeholder="'Şuan ki agırlık: ' + cargoStore.selectedCargo[6] + ' kg'">
          </div>
        </div>

        <!--
        <div class="row">
          <div class="col-3">
            <label for="country">Country</label>
          </div>

          <div class="col-9">

          </div>
        </div>

        <div class="row">
          <div class="col-3">
            <label for="subject">Subject</label>
          </div>
          <div class="col-9">
            <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
          </div>
        </div>
        -->
        <div class="right">
          <button class="btn"><font-awesome-icon icon="fa-solid fa-paper-plane" /> Yolla</button>
        </div>
      </form>
    </div>
    <div class="col-1"></div>
  </div>


</template>


<style scoped>


</style>