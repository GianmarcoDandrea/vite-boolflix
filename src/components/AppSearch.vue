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
    <button @click="$emit('performSearch')" class="btn btn-danger">Cerca</button>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  margin-left: 0.5rem;
}
</style>