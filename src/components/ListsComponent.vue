<template>
  <ul class="lists">
    <li class="list" v-for="list in lists" :key="list.id">
      <div class="list__top">
        <button
          class="list__open-btn"
          :class="{ 'list__open-btn_active': list.show }"
          type="button"
          @click="handleShowList(list)"
        ></button>
        <input
          class="list__check"
          type="checkbox"
          :checked="list.isActiveItems"
          v-model="list.isActiveItems"
          @input="handleSetListActive(list)"
        />
        <p>{{ list.name }}</p>
      </div>

      <ul class="items" v-if="list.show">
        <li class="items__item" v-for="item in list.items" :key="item.id">
          <div class="items__container">
            <input
              class="items__check"
              type="checkbox"
              :value="item.active"
              v-model="item.active"
              @input="handleSetActive(list, item)"
            />
            <p>{{ item.name }}</p>
          </div>

          <div class="items__container">
            <input
              class="items__amount-input"
              type="number"
              min="0"
              max="100"
              v-model="item.amount"
              @input="handleSetAmount($event, list, item)"
            />
            <input
              class="item__color-input"
              type="color"
              v-model="item.color"
              @input="handleSetColor(list, item)"
            />
          </div>
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
    handleSetAmount(evt, list, item) {
      console.log(evt.target.value);
      if (evt.target.value < 0 || !evt.target.value) {
        this.$store.commit("setItemAmount", {
          listId: list.id,
          itemId: item.id,
          amount: 0,
        });
      } else if (evt.target.value > 99) {
        this.$store.commit("setItemAmount", {
          listId: list.id,
          itemId: item.id,
          amount: 99,
        });
      } else {
        this.$store.commit("setItemAmount", {
          listId: list.id,
          itemId: item.id,
          amount: Number(evt.target.value),
        });
      }
    },
    handleSetColor(list, item) {
      this.$store.commit("setItemColor", {
        listId: list.id,
        itemId: item.id,
        color: item.color,
      });
    },
    handleSetActive(list, item) {
      this.$store.commit("setItemActive", {
        listId: list.id,
        itemId: item.id,
        val: !item.active,
      });

      this.$store.commit("checkListActive", list.id);
      this.$store.commit("setSort", list);
    },
    handleSetListActive(list) {
      this.$store.commit("setListActive", {
        listId: list.id,
        val: !list.isActiveItems,
      });

      this.$store.commit("setSort", list);
    },
  },
  computed: {
    ...mapGetters(["lists"]),
  },
  mounted() {
    this.lists.forEach((list) => {
      this.$store.commit("checkListActive", list.id);
    });
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
  display: flex;
  flex-direction: column;
}

.list__top {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.list__open-btn {
  background-color: transparent;
  border: none;
  background-image: url("../assets/images/arrowDown.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 20px;
  height: 20px;
  transform: rotate(-90deg);
  cursor: pointer;
}

.list__open-btn_active {
  transform: rotate(0);
}

.list__check {
  width: 20px;
  height: 20px;
  background: #ffffff;
  border: 1px solid black;
  border-radius: 0;
  cursor: pointer;
  appearance: none;
  position: relative;
  margin: 0 10px;
}

.list__check:checked {
  background-color: #fff;
}

.list__check:checked::after {
  content: "";
  width: 8px;
  height: 8px;
  background-color: #000;
  position: absolute;
  top: 5px;
  left: 5px;
}

.items {
  width: 75%;
  display: flex;
  flex-direction: column;
  margin: 20px auto 0;
  gap: 20px;
}

.items__item {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.items__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

.items__check {
  width: 20px;
  height: 20px;
  background: #ffffff;
  border: 1px solid black;
  border-radius: 0;
  cursor: pointer;
  appearance: none;
  position: relative;
}

.itemst__check:checked {
  background-color: #fff;
}

.items__check:checked::after {
  content: "";
  background-image: url("../assets/images/check.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 2px;
  left: 2px;
}

.items__amount-input {
  width: 40px;
  height: 20px;
  border: none;
  padding: 0;
  padding: 3px 5px;
  border-radius: 0;
}

.items__amount-input:focus-visible {
  outline: none;
  border: 1px solid black;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.item__color-input {
  width: 22px;
  height: 22px;
  border: none;
  background: none;
  appearance: none;
  cursor: pointer;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}
</style>