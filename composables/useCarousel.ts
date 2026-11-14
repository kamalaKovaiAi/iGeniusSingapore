import { ref, onMounted, onUnmounted } from 'vue';

export function useCarousel(totalSlides: number = 3, intervalMs: number = 3500) {
  const currentSlide = ref(0);
  const isPaused = ref(false);
  let timer: ReturnType<typeof setInterval> | null = null;

  function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % totalSlides;
    if (!isPaused.value) {
      startTimer();
    }
  }

  function prevSlide() {
    currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
    if (!isPaused.value) {
      startTimer();
    }
  }

  function goToSlide(index: number) {
    currentSlide.value = index;
    if (!isPaused.value) {
      startTimer();
    }
  }

  function startTimer() {
    stopTimer();
    if (!isPaused.value) {
      timer = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % totalSlides;
      }, intervalMs);
    }
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function togglePause() {
    isPaused.value = !isPaused.value;
    if (isPaused.value) {
      stopTimer();
    } else {
      startTimer();
    }
  }

  function pause() {
    stopTimer();
  }

  function resume() {
    if (!isPaused.value) {
      startTimer();
    }
  }

  onMounted(() => {
    startTimer();
  });

  onUnmounted(() => {
    stopTimer();
  });

  return {
    currentSlide,
    isPaused,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePause,
    pause,
    resume,
    startTimer,
    stopTimer
  };
}
