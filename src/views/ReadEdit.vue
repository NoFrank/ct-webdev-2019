<template>
  <div>
    <Breadcrumbs name="Read/Edit-Control"></Breadcrumbs>
    <h1>Read/Edit-Control</h1>
    <p class="mt-4">
      Der Wert wird als formattierte Währung dargestellt. Wenn das Eingabefeld
      fokussiert wird, wechselt der Typ auf numerisch.
    </p>
    <p>An die Parent-Komponente wird immer der numerische Wert übertragen.</p>
    <currency-input v-model="price"></currency-input>

    <p class="mt-2">
      Aktueller Wert innerhalb der Parent-Component: {{ price }}
    </p>
  </div>
</template>

<script>
import CurrencyInput from "../components/currency-input";

export default {
  components: { CurrencyInput },
  data: () => ({
    price: 2
  })
};
</script>
