<template>
  <CarouselCard :games="gamesData" />
</template>

<script lang="ts" setup>
import CarouselCard from './CarouselCard.vue'
import { useStateStore } from '@/stores/stateStore'
import classicGameData from '../data/classicGames.json'
import { computed } from 'vue'

const store = useStateStore()

const gamesData = computed(() => {
  const games = store.view.isPlayStation() ? classicGameData.playstation : classicGameData.xbox

  return games
    .map((game) => ({
      title: game.title,
      images: game.images[0],
    }))
    .filter((game) => game.images)
})
</script>
