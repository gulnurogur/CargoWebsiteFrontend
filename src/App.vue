<script setup lang="ts">



import KargoListesiComponent from "@/components/KargoListesiComponent.vue";
import DuzenlemeComponent from "@/components/DuzenlemeComponent.vue";

import KargoEklemeComponent from "@/components/KargoEklemeComponent.vue";
import KisiEklemeComponent from "@/components/KisiEklemeComponent.vue";
</script>

<template>
  <div class="topnav">
    <div class="col-1 col-s-3"></div>
    <div class="col-10 col-s-6">
      <div class="left">
        <a class="active" href="#home">Kargo Otomasyonu</a>
      </div>
      <div class="right">
        <a class="active" href="#kargolar">Kargolar</a>
        <a href="#duzenle">Düzenle</a>
        <a href="">Kargo Ekle</a>
        <a href="">Kişi Ekle</a>
      </div>
    </div>
    <div class="col-1 col-s-3"></div>

  </div>
  <KargoListesiComponent></KargoListesiComponent>
  <br class="space">
  <DuzenlemeComponent></DuzenlemeComponent>
  <br class="space">
  <KargoEklemeComponent></KargoEklemeComponent>
  <br class="space">

  <KisiEklemeComponent></KisiEklemeComponent>


</template>

<style scoped>



/* br */
br.space {
  margin-top: 3px;
  margin-bottom: 3px;
  color: inherit;
}
/* --br */






</style>
