<template>
  <div id="hello">
    <div class="field">
      <label for="skill_name" class="label">スキル名</label>
      <p class="control">
        <input type="text" name="skill_name" class="input" v-model="skillName" placeholder="例）ファルシオン" autofocus>
      </p>
    </div>
    <skill-table :skill-name="skillName"></skill-table>
  </div>
</template>

<script>
import skillTable from './SkillTable.vue';

export default {
  name: 'hello',
  data () {
    return {
      skillName: ''
    }
  },
  components: {
    skillTable
  }
}
</script>

<style scoped>
.field {
  width: 60%;
  margin: 0 auto;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
