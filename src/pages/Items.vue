<template>
  <Statistics></Statistics>
  <List></List>
  <AddButton></AddButton>
  <AddFrame></AddFrame>
  <Tip></Tip>
</template>

<script>
import Statistics from "@/components/items/Statistics.vue";
import List from "@/components/items/List.vue";
import AddFrame from "@/components/items/AddFrame.vue";
import Tip from "@/components/items/Tip.vue";
import AddButton from "@/components/items/AddButton.vue";
export default {
  name: "Items",
  components: {
    Statistics,
    List,
    AddFrame,
    Tip,
    AddButton,
  }
};
</script>

<style>
</style>