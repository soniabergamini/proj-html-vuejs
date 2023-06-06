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
  <header id="headerSec">
    <PageHeader :phoneNum="store.phoneNumber" :menuItems="store.menuItems" :courseList="store.courseList" />
  </header>
  <main class="bg-white text-colGrey">
    <PageMain :phoneNum="store.phoneNumber" :courseList="store.courseList" :succesRate="store.succesRate"
      :instructors="store.instructors" :testimonials="store.testimonials" :news="store.news" />
  </main>
  <footer class="text-white">
    <PageFooter :phoneNum="store.phoneNumber" :address="store.address" :email="store.email" :website="store.website"
      :courseList="store.courseList" />
  </footer>
</template>

<style lang="scss" scoped>
@use './style/variables.scss' as *;
</style>
