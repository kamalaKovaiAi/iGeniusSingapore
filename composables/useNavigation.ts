import { ref, onMounted, onUnmounted } from 'vue';

export function useNavigation() {
  const isMenuOpen = ref(false);
  const activeDropdown = ref<number | null>(null);

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }

  function closeMenu() {
    isMenuOpen.value = false;
    activeDropdown.value = null;
  }

  function toggleDropdown(index: number) {
    if (activeDropdown.value === index) {
      activeDropdown.value = null;
    } else {
      activeDropdown.value = index;
    }
  }

  function handleResize() {
    if (typeof window !== 'undefined' && window.innerWidth > 960) {
      closeMenu();
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeydown);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('keydown', handleKeydown);
  });

  return {
    isMenuOpen,
    activeDropdown,
    toggleMenu,
    closeMenu,
    toggleDropdown
  };
}
