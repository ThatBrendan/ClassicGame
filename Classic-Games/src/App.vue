<template>
  <div class="navBar">
    <nav class="headerNav">
      <router-link :to="{ name: 'home' }">
        <img :src="store.view.logo" alt="" width="80px" height="80px" />
      </router-link>

      <div class="navLinks">
        <p
          v-for="s in store.menu"
          :key="s.title"
          @click="handleSwitch(s.title)"
          class="switch-Menu h6"
        >
          {{ s.title }}
        </p>
      </div>
    </nav>
  </div>

  <router-view />
  <FooterPage />
</template>

<script lang="ts" setup>
import FooterPage from "./components/FooterPage.vue";
import { useStateStore } from "./stores/stateStore";
import { useRouter } from "vue-router";

const store = useStateStore();
const router = useRouter();

function handleSwitch(title: string) {
  const selectedMenu = store.menu.find((m) => m.title === title);

  if (selectedMenu?.to) {
    router.push({ name: selectedMenu.to });
  } else if (title === store.view.switchMenu) {
    store.switchView();
  }
}
</script>

<style scoped>
.switch-Menu {
  cursor: pointer;
  margin: 0 10px;
  text-decoration: underline;
}
.navBar {
  display: flex;
  margin: 10px 0;
}
nav.headerNav {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: auto;
}
.navLinks {
  margin-left: 35px;
  display: flex;
}
</style>
