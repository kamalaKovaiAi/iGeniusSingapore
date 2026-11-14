<template>
  <section class="block" aria-labelledby="partners-title">
    <div class="container">
      <div class="section-head">
        <h2 id="partners-title">Technology partners</h2>
        <p>We work with leading platforms so you get the right tool for each job.</p>
      </div>
      <div class="partners">
        <div v-for="(partner, index) in partners" :key="index" class="partner">
          {{ partner }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { partnersData } from '~/models/stats';

const partners = partnersData;
</script>
