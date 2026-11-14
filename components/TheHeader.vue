<template>
  <header class="site-header">
    <div class="topbar">
      <div class="container">
        <span>Microsoft Authorized Partner for Office 365, Azure &amp; Dynamics 365</span>
        <span>
          <a href="mailto:info@igeniusai.com">info@igeniusai.com</a> &nbsp;|&nbsp;
          <a href="tel:+14157999321">+1 415 799 9321</a>
        </span>
      </div>
    </div>

    <div class="container nav-wrap">
      <NuxtLink to="/" class="brand" aria-label="iGenius Singapore home">
        <span class="brand-mark">iG</span>
        <span>iGenius</span>
      </NuxtLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        @click="toggleMenu"
      >
        Menu
      </button>

      <nav aria-label="Main navigation">
        <ul :class="['menu', { open: isMenuOpen }]" id="main-menu">
          <li
            v-for="(item, idx) in menuItems"
            :key="idx"
            :class="{ open: activeDropdown === idx }"
          >
            <template v-if="item.dropdown">
              <button
                type="button"
                :aria-expanded="activeDropdown === idx"
                @click="toggleDropdown(idx)"
              >
                {{ item.title }}
              </button>
              <ul class="dropdown">
                <li v-for="(sub, sIdx) in item.dropdown" :key="sIdx">
                  <NuxtLink :to="sub.href" @click="closeMenu">{{ sub.label }}</NuxtLink>
                </li>
              </ul>
            </template>
            <template v-else>
              <NuxtLink
                :to="item.href || '#'"
                :class="{ 'nav-cta': item.isCta }"
                @click="closeMenu"
              >
                {{ item.title }}
              </NuxtLink>
            </template>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { navigationMenu } from '~/models/navigation';
import { useNavigation } from '~/composables/useNavigation';

const menuItems = navigationMenu;
const { isMenuOpen, activeDropdown, toggleMenu, closeMenu, toggleDropdown } = useNavigation();
</script>
