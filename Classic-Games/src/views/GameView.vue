<template>
  <div v-if="game" class="game-carousel">
    <div class="row no-gutter">
      <div class="col-lg-6 carousel-text-container order-lg-0 order-1">
        <h2 class="h4 animated fadeInUp">{{ game.title }}</h2>
        <p class="h6 animated fadeInUp delay-1s">{{ game.description }}</p>
        <p class="animated fadeInUp delay-1s">Released: {{ game.released }}</p>
      </div>
      <div class="col-lg-6 carousel order-lg-1 order-0">
        <div class="carousel-box">
          <button class="carousel-btn left" @click="prevSlide">&lt;</button>
          <div
            class="carousel-track"
            :style="{ transform: `translateX(${getOffset()})` }"
          >
            <div
              class="carousel-slide"
              v-for="(image, index) in game.images"
              :key="index"
            >
              <div class="overlay"></div>
              <img :src="image" alt="" class="carousel-image" />
            </div>
          </div>

          <button class="carousel-btn right" @click="nextSlide">&gt;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import classicGameData from "../data/classicGames.json";
import { onMounted, onUnmounted, ref } from "vue";

interface Game {
  id: number;
  title: string;
  description: string;
  released: string;
  images: string[];
}

const route = useRoute();
const game = ref<Game | null>(null);

const currentSlide = ref(0);
const slideTime = 9000;
let timer: NodeJS.Timeout | null = null;

function getOffset() {
  return `-${currentSlide.value * 100}%`;
}

function prevSlide() {
  if (game.value) {
    currentSlide.value =
      (currentSlide.value - 1 + game.value.images.length) %
      game.value.images.length;
  }
  restartCountdown();
}

function nextSlide() {
  if (game.value) {
    currentSlide.value = (currentSlide.value + 1) % game.value.images.length;
  }
  restartCountdown();
}

function restartCountdown() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(nextSlide, slideTime);
}

onMounted(() => {
  const allGames = [...classicGameData.playstation, ...classicGameData.xbox];

  game.value =
    allGames.find(
      (g) =>
        g.title.toLowerCase() === route.params.name.toString().toLowerCase()
    ) || null;

  if (game.value && game.value.images.length > 1) {
    timer = setTimeout(nextSlide, slideTime);
  }
});

onUnmounted(() => {
  if (timer) clearTimeout(timer);
});
</script>

<style scoped>
.carousel-text-container {
  padding: 10px 30px;
  text-align: center;
  margin: auto;
}
.game-carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.carousel {
  display: flex;
  position: relative;
  overflow: hidden;
  max-height: 550px;
  height: 100%;
}
.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  height: 100%;
}
.carousel-slide {
  min-width: 100%;
  position: relative;
  overflow: hidden;
  height: 100%;
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
@media screen and (min-width: 768px) {
  .game-carousel {
    max-height: 550px;
  }
}
</style>
