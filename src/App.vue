<template>
  <div id="app">
    <nav class="nav">
      <div class="nav-center">
        <h1 class="title">FEH スキル検索</h1>
      </div>
    </nav>
    <div class="container">
      <skill-form></skill-form>
    </div>
  </div>
</template>

<script>
import skillForm from './components/SkillForm.vue'

export default {
  name: 'app',
  components: {
    skillForm
  }
}
</script>

<style scoped>
.nav {
  background: gold;
}
.nav .title {
  padding-top: 6px;
}
.container {
  margin: 20px auto;
}

</style>