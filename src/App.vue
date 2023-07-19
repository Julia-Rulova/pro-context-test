<template>
  <div class="app">
    <div class="app__list">
      <lists-component></lists-component>
    </div>
    <div class="app__list">
      <lists-with-items></lists-with-items>
    </div>
  </div>
</template>

<script>
import ListsComponent from "./components/ListsComponent.vue";
import ListsWithItems from "./components/ListsWithItems.vue";

export default {
  components: { ListsComponent, ListsWithItems },
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
  min-width: 100vw;
  min-height: 100vh;
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
