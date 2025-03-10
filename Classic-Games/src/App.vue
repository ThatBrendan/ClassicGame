<template>
  <div class="navBar">
    <nav class="headerNav">
      <router-link :to="{ name: 'home' }">
        <img :src="store.view.logo" alt="" width="80px" height="80px" />
      </router-link>

      <div class="navLinks hide-mobile">
        <p
          v-for="s in store.menu"
          :key="s.title"
          @click="handleSwitch(s.title)"
          class="switch-Menu h6"
        >
          {{ s.title }}
        </p>
      </div>

      <div class="breadcrumb hide-desktop" @click.stop="toggleNav">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </nav>

    <div
      class="mobile-nav text-center row no-gutter"
      :class="{ open: open }"
      :style="{ backgroundColor: store.view.borderColor }"
    >
      <div class="mobile-nav-links col-9">
        <p
          v-for="s in store.menu"
          :key="s.title"
          @click="handleSwitch(s.title)"
          class="h6 white-text"
        >
          {{ s.title }}
        </p>
      </div>
      <div class="col-3 close-container">
        <span class="close" @click="toggleNav">&times;</span>
      </div>
    </div>
  </div>

  <router-view />
  <FooterPage />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import FooterPage from "./components/FooterPage.vue";
import { useStateStore } from "./stores/stateStore";
import { useRouter } from "vue-router";

const store = useStateStore();
const router = useRouter();

let open = ref(false);

function toggleNav() {
  open.value = !open.value;
  document.body.classList.toggle("open", open.value);
}

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
.breadcrumb {
  margin: auto 0;
}
.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: var(--black);
  margin: 6px 0;
}
.mobile-nav {
  position: fixed;
  left: 30px;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 1.5rem;
  z-index: 99999;
  overflow-y: auto;
  display: flex;
  justify-content: space-between;
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out;
}
.open .mobile-nav {
  transform: translate(0%);
}
.close {
  display: block;
  text-align: right;
  font-size: 3rem;
  color: var(--white);
}
.mobile-nav li,
.navBarLinks li {
  cursor: pointer;
}
</style>
