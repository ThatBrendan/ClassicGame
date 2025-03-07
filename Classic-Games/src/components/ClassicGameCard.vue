<template>
  <div class="classic-game-card">
    <img :src="game.images[0]" alt="" class="game-image" />
    <h2 class="h6 boldFont">{{ game.title }}</h2>
    <p>{{ game.description }}</p>
    <p>Released: {{ game.released }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  game: { id: number; title: string; description: string; released: string; images: string[] }
}>()
</script>

<style scoped>
.classic-game-card {
  width: 400px;
  border: 2px solid var(--blue);
  border-radius: 10px;
  padding: 5px 10px;
  height: 350px;
  margin: 5px 10px;
}
.game-image {
  height: 100px;
  width: 100%;
  object-fit: cover;
}
</style>
