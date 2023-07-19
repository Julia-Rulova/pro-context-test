<template>
  <ul class="lists">
    <li class="list" v-for="list in lists" :key="list.id">
      <div class="list__container">
        <p @click="handleShowList(list)">{{ list.name }}</p>
        <button
          class="list__btn"
          type="button"
          v-if="list.show"
          @click="setSort(list)"
        >
          {{ list.isRandomSort ? "Сортировать" : "Перемешать" }}
        </button>
      </div>

      <ul class="list__items" v-if="list.isRandomSort && list.show"></ul>

      <ul class="list__items" v-else-if="!list.isRandomSort && list.show">
        <li
          class="list__items-list"
          v-for="items in list.items.filter((i) => i.active)"
          :key="items.id"
        >
          <div
            class="list__item"
            :style="{ backgroundColor: items.color }"
            v-for="(item, index) in items.amount"
            :key="index"
          ></div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    handleShowList(list) {
      this.$store.commit("setListShow", { listId: list.id, val: !list.show });
    },
    setSort(list) {
      this.$store.commit("setItemsSort", {
        listId: list.id,
        val: !list.isRandomSort,
      });

      //   if (list.isRandomSor) {
      //     let targetArray = [];

      //   }
    },
  },
  computed: {
    ...mapGetters(["lists"]),
  },
};
</script>

<style scoped>
.lists {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.list {
  width: 100%;
  padding: 10px 15px;
  border: 2px solid black;
}

.list__container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.list__btn {
  background-color: blue;
  border: none;
  color: #fff;
  height: 30px;
  padding: 0 15px;
  cursor: pointer;
}

.list__items {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
}

.list__items-list {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
}

.list__item {
  width: 15px;
  height: 15px;
}
</style>