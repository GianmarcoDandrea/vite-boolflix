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
  <div class="d-flex input-container">
    <input
      type="text"
      class="form-control"
      placeholder=" Cerca i tuoi film e le tue serie preferite"
      v-model.trim="store.searchText"
      @keyup.enter="$emit('performSearch')"
    />
    <button @click="$emit('performSearch')" class="btn">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
.input-container {

  width: 30%;
  .form-control{
    border: none;
  }
  .form-control:focus {

    border-color: unset;
    box-shadow: 0 0 2px 3px #DB202C;
    border: none
  }
  .btn {
    color: $primary-red;
    margin-left: 0.5rem;
  }
}



</style>