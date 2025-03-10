<template>
  <div
    class="row no-gutter"
    :style="{ backgroundColor: store.view.borderColor }"
  >
    <div class="col-3 col-lg-2">
      <img :src="store.view.logo" alt="" width="80px" height="80px" />
    </div>
    <div class="col-9 col-lg-10">
      <p class="h6 white-text">{{ store.view.name }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStateStore } from "@/stores/stateStore";

const store = useStateStore();
</script>
