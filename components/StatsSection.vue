<template>
  <section class="block alt" aria-labelledby="achieve-title">
    <div class="container">
      <div class="section-head">
        <h2 id="achieve-title">Trusted by businesses across the world</h2>
        <p>Our track record, built over years of delivering cloud, hosting and business software projects.</p>
      </div>
      <div class="stats">
        <div v-for="(stat, index) in stats" :key="index" class="stat-box">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { statsData } from '~/models/stats';

const stats = statsData;
</script>
