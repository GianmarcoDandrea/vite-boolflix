<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="d-flex w-25">
    <input
      type="text"
      class="form-control"
      placeholder="Cerca "
      v-model.trim="store.searchText"
    />
    <button @click="$emit('performSearch')" class="btn btn-primary">Cerca</button>
  </div>
</template>

<style lang="scss" scoped></style>