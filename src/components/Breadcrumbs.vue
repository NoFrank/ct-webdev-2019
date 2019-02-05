<template>
  <v-breadcrumbs :items="items">
    <v-icon slot="divider">chevron_right</v-icon>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: ["name"],
  computed: {
    // a computed getter
    items: function() {
      return [
        {
          text: "Home",
          disabled: false,
          to: "/"
        },
        {
          text: this.name,
          disabled: true
        }
      ];
    }
  }
};
</script>
