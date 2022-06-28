<template>
  <div class="container">
    <Menu></Menu>
    <IndexPage></IndexPage>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IndexPage from './components/IndexPage.vue';
import Menu from './components/Menu.vue';

@Component({
  components: { IndexPage, Menu },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
