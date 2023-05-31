<script>
import PageHeader from './components/PageHeader.vue'
import PageMain from './components/PageMain.vue'
import PageFooter from './components/PageFooter.vue'

import { store } from './data/store';

export default {
  name: "App",
  components: {
    PageHeader,
    PageMain,
    PageFooter
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <header>
    <PageHeader :phoneNum="store.phoneNumber" :menuItems="store.menuItems" />
  </header>
  <main class="min-h-[100dvh] bg-amber-300 text-colGrey">
    <PageMain />
  </main>
  <footer>
    <PageFooter />
  </footer>
</template>

<style lang="scss" scoped>
@use './style/variables.scss' as *;
</style>
