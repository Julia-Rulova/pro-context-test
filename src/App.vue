<template>
  <div class="app">
    <div class="app__list">
      <lists-component></lists-component>
    </div>
    <div class="app__list"></div>
  </div>
</template>

<script>
import ListsComponent from "./components/ListsComponent.vue";

export default {
  components: { ListsComponent },
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  font-family: "Lucida Sans", Verdana, sans-serif;
}

.app {
  width: 100vw;
  height: 100vh;
  padding: 30px 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.app__list {
  height: 100%;
  width: 45%;
  border: 3px solid black;
  padding: 30px;
}
</style>
