<template>
  <div>
    <Breadcrumbs name="Maskierte Eingabe"></Breadcrumbs>
    <h1>Maskierte Eingabe</h1>
    <p class="mt-4">
      Die eingebenen Ziffern werden in Blöcke von je vier Ziffern gruppiert.
    </p>
    <grouped-number-input v-model="serial"></grouped-number-input>
    <p class="mt-2">
      Aktueller Wert innerhalb der Parent-Component: {{ serial }}
    </p>
  </div>
</template>

<script>
import GroupedNumberInput from "../components/grouped-number-input";

export default {
  components: { GroupedNumberInput },
  data: () => ({
    serial: 12
  })
};
</script>
