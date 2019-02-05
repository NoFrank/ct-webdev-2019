<template>
  <div>
    <input type="text" v-model="displayValue" @keypress="isNumber($event)" />
  </div>
</template>

<script>
export default {
  name: "grouped-number-input",
  props: ["value"],
  computed: {
    displayValue: {
      get: function() {
        if (!this.value) return;
        // zunächst alles außer Ziffern entfernen
        let value = this.value.toString().replace(/[^\d]/g, "");

        //Gruppieren
        value = value
          .toString()
          .match(/.{1,4}/g)
          .join(" - ");

        return value;
      },
      set: function(modifiedValue) {
        //alles außer Ziffern entfernen
        let value = modifiedValue.toString().replace(/[^\d]/g, "");

        // emitte den neuen Wert
        this.$emit("input", value);
      }
    }
  },
  methods: {
    isNumber: function(evt) {
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57))
        evt.preventDefault();
      return true;
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
