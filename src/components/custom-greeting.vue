<template>
  <input
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: ["value"]
};
</script>

<style scoped>
input {
  width: 200px;
  height: 20px;
  border: 1px solid #ddd;
}
</style>
