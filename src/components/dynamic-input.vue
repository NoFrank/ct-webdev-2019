<template>
  <v-text-field
    :label="label"
    v-model="value"
    @input="touchValue()"
    @blur="touchValue()"
    :error-messages="inputErrors"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    binding: {
      type: String,
      required: true
    },
    mutation: {
      type: String,
      required: true
    },
    errorGetter: {
      type: String,
      required: true
    }
  },
  computed: {
    inputErrors: function() {
      return this.$store.getters[this.errorGetter];
    },
    value: {
      get() {
        return this.$store.state[this.binding];
      },
      set(value) {
        this.$store.commit(this.mutation, value);
      }
    }
  },
  methods: {
    touchValue() {
      this.$store.dispatch("validations/touchValue", this.binding);
    }
  }
};
</script>

<style scoped>
input {
  width: 200px;
  height: 20px;
  border: 1px solid #ddd;
}
</style>
