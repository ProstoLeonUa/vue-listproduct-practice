<template>
  <div class="wrapper">
    <ul>
      <store-item v-for="item in GET_ITEMS" :key="item.id" :payload="item"></store-item>
    </ul>
  </div>
</template>
<script>
import StoreItem from "./StoreItem";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["GET_ITEMS"]),
  },
  created() {
    this.$store.dispatch("SET_ITEM", "http://localhost:3005/");
  },
  components: {
    StoreItem: StoreItem,
  },
};
</script>
<style lang="sass">
.wrapper
	max-width: 1440px
ul
	list-style: none
	display: flex
	justify-content: space-between
</style>