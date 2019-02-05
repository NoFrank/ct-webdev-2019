<template>
  <div>
    <Breadcrumbs name="In-Place-Edit"></Breadcrumbs>
    <h1>In-Place-Edit</h1>
    <p class="mt-4">Per Doppelklick kann ein Eingabefeld aktiviert werden.</p>
    <inplace-edit v-model="price"></inplace-edit>

    <p class="mt-2">
      Aktueller Wert innerhalb der Parent-Component: {{ price }}
    </p>
  </div>
</template>

<script>
import InplaceEdit from "../components/inplace-edit";

export default {
  components: { InplaceEdit },
  data: () => ({
    price: 2
  })
};
</script>
