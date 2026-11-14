<template>
  <section
    class="hero"
    aria-roledescription="carousel"
    aria-label="Featured highlights"
    id="hero"
    tabindex="0"
    @mouseenter="pause"
    @mouseleave="resume"
    @keydown.left="prevSlide"
    @keydown.right="nextSlide"
  >
    <div
      class="slides"
      id="slides"
      @touchstart.passive="onTouchStart"
      @touchend.passive="onTouchEnd"
    >
      <!-- Slide 1 -->
      <article
        :class="['slide', 'slide-1', { active: currentSlide === 0 }]"
        :aria-hidden="currentSlide !== 0"
        aria-label="1 of 3"
      >
        <div class="slide-bg" :style="{ '--hero-photo': `url('/images/hero-1.jpg')` }" aria-hidden="true"></div>
        <div class="container slide-inner">
          <div>
            <span class="eyebrow-tag">Microsoft Authorized Partner</span>
            <h1>Office 365, Azure and Dynamics 365, set up and supported.</h1>
            <p class="lead">Plan, deploy and manage your Microsoft cloud with a team that works around the clock.</p>
            <div class="btn-row">
              <a class="btn btn-primary" href="#contact">Start your project</a>
              <a class="btn btn-ghost" href="#services">Explore Microsoft services</a>
            </div>
          </div>
          <div class="slide-card" aria-hidden="true">
            <div class="stat">380+</div>
            <div class="stat-label">Projects delivered</div>
            <div class="stat">50+</div>
            <div class="stat-label">Microsoft experts</div>
          </div>
        </div>
      </article>

      <!-- Slide 2 -->
      <article
        :class="['slide', 'slide-2', { active: currentSlide === 1 }]"
        :aria-hidden="currentSlide !== 1"
        aria-label="2 of 3"
      >
        <div class="slide-bg" :style="{ '--hero-photo': `url('/images/hero-2.jpg')` }" aria-hidden="true"></div>
        <div class="container slide-inner">
          <div>
            <span class="eyebrow-tag">Hosting and domains</span>
            <h1>Reliable hosting and domains for every website you run.</h1>
            <p class="lead">From shared hosting and WordPress to dedicated servers, pick the plan that fits your traffic.</p>
            <div class="btn-row">
              <a class="btn btn-primary" href="#services">View hosting plans</a>
              <a class="btn btn-ghost" href="#services">Register a domain</a>
            </div>
          </div>
          <div class="slide-card" aria-hidden="true">
            <div class="stat">480+</div>
            <div class="stat-label">Customers served</div>
            <div class="stat">48+</div>
            <div class="stat-label">Countries</div>
          </div>
        </div>
      </article>

      <!-- Slide 3 -->
      <article
        :class="['slide', 'slide-3', { active: currentSlide === 2 }]"
        :aria-hidden="currentSlide !== 2"
        aria-label="3 of 3"
      >
        <div class="slide-bg" :style="{ '--hero-photo': `url('/images/hero-3.jpg')` }" aria-hidden="true"></div>
        <div class="container slide-inner">
          <div>
            <span class="eyebrow-tag">24x7 support</span>
            <h1>Your services stay up, all day, every day of the year.</h1>
            <p class="lead">Our dedicated teams monitor, secure and back up your systems around the clock.</p>
            <div class="btn-row">
              <a class="btn btn-primary" href="#contact">Talk to our team</a>
              <a class="btn btn-ghost" href="#services">Backup and security</a>
            </div>
          </div>
          <div class="slide-card" aria-hidden="true">
            <div class="stat">24x7</div>
            <div class="stat-label">Dedicated support</div>
            <div class="stat">120+</div>
            <div class="stat-label">Employees worldwide</div>
          </div>
        </div>
      </article>
    </div>

    <div class="carousel-controls">
      <div class="container">
        <div class="dots" role="group" aria-label="Choose slide">
          <button
            v-for="idx in 3"
            :key="idx"
            class="dot"
            type="button"
            :aria-current="currentSlide === idx - 1"
            :aria-label="`Show slide ${idx}`"
            @click="goToSlide(idx - 1)"
          ></button>
        </div>
        <div class="arrows">
          <button class="pause-btn" type="button" @click="togglePause">
            {{ isPaused ? 'Play' : 'Pause' }}
          </button>
          <button class="arrow" type="button" aria-label="Previous slide" @click="prevSlide">&#8592;</button>
          <button class="arrow" type="button" aria-label="Next slide" @click="nextSlide">&#8594;</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCarousel } from '~/composables/useCarousel';

useHead({
  link: [
    { rel: 'preload', as: 'image', href: '/images/hero-1.jpg' },
    { rel: 'preload', as: 'image', href: '/images/hero-2.jpg' },
    { rel: 'preload', as: 'image', href: '/images/hero-3.jpg' }
  ]
});

const { currentSlide, isPaused, nextSlide, prevSlide, goToSlide, togglePause, pause, resume } = useCarousel(3, 3500);

let touchStartX = 0;

function onTouchStart(e: TouchEvent) {
  if (e.changedTouches && e.changedTouches.length > 0) {
    touchStartX = e.changedTouches[0].clientX;
  }
}

function onTouchEnd(e: TouchEvent) {
  if (e.changedTouches && e.changedTouches.length > 0) {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }
}
</script>
