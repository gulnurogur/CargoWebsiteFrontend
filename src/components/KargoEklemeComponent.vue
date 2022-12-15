<script setup>


import {usePersonState} from "@/stores/person_state";

const personStore = usePersonState();

</script>


<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <h1>Kargo Ekle</h1>
      <hr class="style">
      <div class="row">
        <div class="col-3">
          <label for="fgonderici">Gönderici</label>
        </div>
        <div class="col-9">
          <select name="fgonderici">
            <option selected="selected" value="">Değiştirmek için seçim yapın</option>
            <option v-for="kisi in personStore.persons" :value="kisi.kisi_id"> {{ kisi.kisi_ad + ' ' + kisi.kisi_soyad}}</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <label for="falici">Alıcı</label>
        </div>
        <div class="col-9">

          <select name="falici">
            <option selected="selected" value="">Değiştirmek için seçim yapın</option>
            <option v-for="kisi in personStore.persons" :value="kisi.kisi_id"> {{ kisi.kisi_ad + ' ' + kisi.kisi_soyad }}</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-3">
          <label for="fen">En</label>
        </div>
        <div class="col-9">
          <input type="number" placeholder="En Giriniz">
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <label for="fyukseklik">Yükseklik</label>
        </div>
        <div class="col-9">
          <input type="number" placeholder="Yükseklik Giriniz">
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <label for="fgenislik">Genişlik</label>
        </div>
        <div class="col-9">
          <input type="number" placeholder="Genişlik Giriniz">
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <label for="fagirlik">Ağırlık</label>
        </div>
        <div class="col-9">
          <input type="number" placeholder="Ağırlık Giriniz">
        </div>
      </div>

      <div class="right">
        <button class="btn"><font-awesome-icon icon="fa-solid fa-paper-plane" /> Yolla</button>
      </div>

    </div>

    <div class="col-1"></div>
  </div>
</template>


<style scoped>

</style>