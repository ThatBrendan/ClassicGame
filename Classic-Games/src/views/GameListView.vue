<template>
  <section class="row no-gutter">
    <ClassicGameList />
  </section>
</template>

<script lang="ts" setup>
import ClassicGameList from '@/components/ClassicGameList.vue'
</script>

<style scoped>
section.row.no-gutter {
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
</style>
