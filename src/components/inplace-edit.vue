<template>
  <div>
    <input
      v-show="isFocussed"
      :type="isFocussed ? 'number' : 'text'"
      v-model="displayValue"
      ref="input"
      @blur="isFocussed = false"
      @focus="isFocussed = true"
    />
    <div v-show="!isFocussed" @dblclick="setEdit()">{{ displayValue }}</div>
  </div>
</template>

<script>
export default {
  name: "currency-input",
  data() {
    return {
      isFocussed: false
    };
  },
  props: ["value"],
  computed: {
    displayValue: {
      get: function() {
        if (this.isFocussed) {
          // Formattierung entfernen
          return this.value.toString();
        } else {
          // Formattierten Wert zurückgeben
          return new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
          }).format(this.value);
        }
      },
      set: function(modifiedValue) {
        // emitte den neuen Wert
        this.$emit("input", modifiedValue);
      }
    }
  },
  methods: {
    setEdit() {
      this.isFocussed = true;
      this.$nextTick(() => this.$refs.input.focus());
    }
  }
};
</script>
