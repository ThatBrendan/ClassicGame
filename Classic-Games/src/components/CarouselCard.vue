<template>
  <div class="desktop-carousel">
    <div class="carousel">
      <button class="carousel-btn left" @click="prevSlide">&lt;</button>
      <div class="carousel-track" :style="{ transform: `translateX(${getOffset()})` }">
        <div class="carousel-slide" v-for="(game, index) in games" :key="index">
          <div class="overlay"></div>
          <img :src="game.images" alt="" class="carousel-image" />
          <div class="carousel-content">
            <p class="white-text h4">{{ game.title }}</p>
          </div>
        </div>
      </div>
      <button class="carousel-btn right" @click="nextSlide">&gt;</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{ games: { images: string; title: string }[] }>()
const currentSlide = ref(0)
const slideTime = 9000
let timer: NodeJS.Timeout | null = null

function getOffset() {
  return `-${currentSlide.value * 100}%`
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + props.games.length) % props.games.length
  restartCountdown()
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % props.games.length
  restartCountdown()
}

function restartCountdown() {
  if (timer) clearTimeout(timer)
  timer = setTimeout(nextSlide, slideTime)
}

onMounted(() => {
  if (props.games.length > 1) {
    timer = setTimeout(nextSlide, slideTime)
  }
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<style scoped>
.desktop-carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 200px) !important;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 1;
}
.carousel {
  display: flex;
  position: relative;
  overflow: hidden;
  height: 100%;
}
.carousel-content {
  position: absolute;
  bottom: 70%;
  left: 5%;
  padding: 15px;
  border-radius: 10px;
  text-align: left;
  max-width: 26rem;
  z-index: 2;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}
.carousel-slide {
  min-width: 100%;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--black);
  border: none;
  cursor: pointer;
  padding: 8px 13px;
  z-index: 10;
  border-radius: 50%;
}
.carousel-content button {
  margin-top: 1rem;
}
.carousel-btn.left {
  left: 10px;
}

.carousel-btn.right {
  right: 10px;
}
</style>
