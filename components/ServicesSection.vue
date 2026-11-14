<template>
  <section class="block" aria-labelledby="services-title" id="services">
    <div class="container">
      <div class="section-head">
        <h2 id="services-title">Services built for growing businesses</h2>
        <p>Everything from getting online to running enterprise cloud platforms, delivered by one partner.</p>
      </div>
      <div class="cards">
        <article v-for="service in services" :key="service.id" class="card">
          <div class="icon" aria-hidden="true">{{ service.icon }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <a class="more" :href="service.link">Learn more &rarr;</a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { servicesData } from '~/models/services';

const services = servicesData;
</script>
