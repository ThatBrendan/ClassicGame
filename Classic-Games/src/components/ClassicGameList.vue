<template>
  <ClassicGameCard v-for="game in filteredGames" :key="game.id" :game="game" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import ClassicGameCard from "./ClassicGameCard.vue";
import { useStateStore } from "@/stores/stateStore";
import classicGameData from "../data/classicGames.json";

const store = useStateStore();

const filteredGames = computed(() => {
  return store.view.isPlayStation()
    ? classicGameData.playstation
    : classicGameData.xbox;
});
</script>
